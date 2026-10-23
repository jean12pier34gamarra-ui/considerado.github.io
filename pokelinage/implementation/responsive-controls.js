/* Pokelinage responsive input detection — helper version for GitHub integration.
   The self-contained pokelinage.html also includes equivalent inline logic. */
(function (global) {
  "use strict";

  const root = global.document.documentElement;
  const media = (query) => !!(global.matchMedia && global.matchMedia(query).matches);

  function isHandheld() {
    const nav = global.navigator || {};
    const ua = nav.userAgent || "";
    const mobileUA =
      /Android|iPhone|iPad|iPod|Mobile|IEMobile|Opera Mini/i.test(ua) ||
      (nav.userAgentData && nav.userAgentData.mobile === true);

    const primaryPointerIsTouch =
      media("(pointer: coarse)") && media("(hover: none)");
    const sw = (global.screen && global.screen.width) || global.innerWidth || 1024;
    const sh = (global.screen && global.screen.height) || global.innerHeight || 768;
    const compactScreen = Math.min(sw, sh) <= 1100;

    // Avoid showing a mobile joystick on ordinary mouse/keyboard desktops,
    // even when the desktop browser window happens to be narrow.
    return Boolean(mobileUA || (primaryPointerIsTouch && compactScreen));
  }

  function sync() {
    const handheld = isHandheld();
    root.classList.toggle("mobile-device", handheld);
    root.classList.toggle("desktop-device", !handheld);
    return handheld;
  }

  function subscribeMedia(query) {
    if (!global.matchMedia) return;
    const mq = global.matchMedia(query);
    if (mq.addEventListener) mq.addEventListener("change", sync);
    else if (mq.addListener) mq.addListener(sync);
  }

  sync();
  global.addEventListener("resize", sync, { passive: true });
  global.addEventListener("orientationchange", sync, { passive: true });
  subscribeMedia("(pointer: coarse)");
  subscribeMedia("(hover: none)");

  global.PokelinageInputMode = Object.freeze({
    isHandheld,
    sync,
    keyboard: "WASD / flechas; habilidades 1, 2 y 3 en modo Portal"
  });
})(window);
