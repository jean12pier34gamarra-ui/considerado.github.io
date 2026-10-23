# Implementación investigada de Pokelinage

Esta carpeta contiene utilidades de implementación para la rama de trabajo del juego:

- `responsive-controls.js`: detección de móvil/tablet por agente de usuario, pointer coarse, hover y tamaño compacto; añade `mobile-device` o `desktop-device` al elemento raíz.
- `responsive-controls.css`: oculta el joystick y los botones táctiles en escritorio y los muestra en dispositivos móviles.
- `map-canvas-cache.js`: caché LRU de chunks estáticos de 512×512 (16×16 tiles de 32 px) y texturas estáticas de lagos; los efectos dinámicos se dibujan encima.

La versión monolítica descargable `pokelinage.html` mantiene estas utilidades inline para seguir siendo un solo archivo autosuficiente. Estos archivos de implementación se guardan en GitHub como código fuente reutilizable y para revisión; no se cargan automáticamente desde el HTML monolítico.

## Reglas de integración

1. No cambiar el `index.html` de la raíz del repositorio: pertenece a “El Efecto Checklist”.
2. Si se publica el juego completo, hacerlo desde `pokelinage/index.html`.
3. Mantener animaciones ambientales y sprites independientes del reloj acelerado CHUNA.
4. La caché guarda terreno/lago estático; ondas, hierba y partículas se animan en una capa superior.
5. No hacer una afirmación de prueba visual si no se abrió la página en un navegador real.
