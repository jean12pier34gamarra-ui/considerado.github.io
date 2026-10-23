# POKELINAGE — PROMPT MAESTRO UNIFICADO PARA GITHUB COPILOT

**Versión 3 corregida:** especifica de forma obligatoria la mejora gráfica del mapa y sus microanimaciones ambientales; incluye explícitamente el roster de diez Poketiranos con habilidades insignia exclusivas, además de la guía de continuidad, sprites, Hoopa, IA, balance, audio y publicación web.

## 1. Rol profesional y objetivo

Actúa como desarrollador principal senior de videojuegos web, con experiencia en HTML5, CSS, JavaScript, Canvas 2D, arquitectura de juegos, pixel art, animación de sprites, IA de enemigos, optimización, diseño de combate, accesibilidad y publicación mediante GitHub Pages.

El proyecto se llama **Pokelinage**, subtítulo **PokéSurvivor: Mundo Misterioso**. Es un juego de supervivencia/acción con Pokémon, estructura roguelite/bullet-heaven, mapa por biomas, menú RPG, equipo de compañeros, misiones, reclutamiento, mejoras permanentes, combate y evento dimensional.

La prioridad absoluta es **continuar el juego existente, preservar todo lo que ya funciona y mejorar con cambios localizados y verificables**. No reconstruyas desde cero, no sustituyas el motor por una demo simplificada y no elimines sistemas para hacer el trabajo más fácil.

## 2. Repositorio y estrategia segura

El repositorio GitHub Pages disponible tiene actualmente un archivo raíz index.html perteneciente a otro proyecto llamado “El Efecto Checklist”. **No reemplaces ni modifiques ese index.html ni el sitio principal.**

Desarrolla Pokelinage en una carpeta independiente, por ejemplo:

- pokelinage/index.html — entrada publicada del juego, una vez se integre el HTML completo.
- pokelinage/docs/PROMPT_MAESTRO_UNIFICADO.md — esta especificación.
- pokelinage/assets/reference/ — referencias gráficas.
- pokelinage/assets/ — solo recursos externos que se acuerde separar del HTML.

El HTML fuente actual se llama pokelinage.html. Su versión más reciente incluye recursos multimedia integrados como data URI. Si se crea una copia llamada index.html para Pages, debe conservarse también el HTML fuente canónico y ambos deben estar sincronizados. No publiques una página vacía que se haga pasar por el juego terminado.

Antes de editar, comprueba el estado del repositorio, la rama, los archivos existentes y sus commits. Trabaja en una rama feature separada y abre una Pull Request. No sobrescribas la rama principal automáticamente.

## 3. Materiales de referencia que debes inspeccionar

Inspecciona por completo cuando estén presentes:

1. pokelinage.html: fuente actual del juego, lógica, estilos, datos guardados y recursos multimedia.
2. pokelinage_handoff_prompt.txt: guía de continuidad del proyecto.
3. PROMPT_MAESTRO_POKELINAGE_GITHUB.md y versiones posteriores: requisitos de gráficos, IA, balance y publicación.
4. POKETIRANOS_HABILIDADES_EXCLUSIVAS.md: catálogo creativo de los diez jefes.
5. Cuatro imágenes iniciales de referencia del entrenador y los Pokémon.
6. Once imágenes nuevas de referencia de Poketiranos, incluyendo dos perspectivas del mismo coloso acorazado.
7. Audio extraído del video de usuario e integrado en el HTML para la ruleta.

Las referencias visuales no se deben dar por cargadas en el repositorio si no se verifican los archivos. Si falta algún recurso, informa qué archivo falta y continúa con un fallback seguro sin inventar que se ha importado.

Las hojas de sprites de referencia son JPG sobre fondo negro. Trabaja sobre copias; si hace falta transparencia, convierte a PNG y elimina únicamente el fondo uniforme negro de manera conservadora. Preserva contornos, sombras, ojos y píxeles negros internos de las criaturas. No modifiques los originales.

## 4. Reglas obligatorias de preservación

- Lee la implementación completa y localiza las funciones y dependencias antes de editar.
- Conserva el motor, datos, estilos, nombres, botones, mecánicas y medios existentes.
- No elimines una característica que parezca incompleta: describe el problema y el arreglo mínimo en el informe.
- No cambies probabilidades, precios, estadísticas base, recompensas, duración de eventos o límites de forma silenciosa.
- Haz una copia de seguridad antes de cambios grandes.
- Preserva el estado de localStorage. Si se cambia su estructura, añade una migración compatible y una ruta de recuperación.
- Evita IDs duplicados, referencias a elementos inexistentes, listeners duplicados, timers que sobreviven al reinicio y recompensas duplicables.
- Distingue claramente comprobaciones estáticas de pruebas reales en navegador. Nunca afirmes que has probado el juego si no ocurrió.
- No sustituyas sprites apropiados por emojis ni por una criatura no relacionada.
- Haz que cada sistema nuevo tenga límites, cooldowns, condiciones de salida y manejo seguro de errores.

## 5. Sistemas actuales que deben conservarse

### Interfaz y navegación
Menú principal, Pokédex de hasta 1.025 Pokémon, búsqueda/filtros/paginación, selección de equipo, mejoras, reclutamiento/ruleta, misiones, ajustes/códigos secretos, mapa de combate en Canvas, HUD, botones de habilidad y controles de teclado y táctiles.

Estilo RPG de exploración con azul noche, azul, oro, crema, púrpura y magenta. Mantén la identidad visual. Mejora solo las zonas necesarias.

### Pokémon, compañeros y progresión
Conserva colección, equipo, niveles, experiencia, movimientos, pasivas, objetos, ataques automáticos, habilidades manuales y mecánicas Mega que ya existan. Los compañeros orbitan alrededor del jugador con suavizado/interpolación y reloj independiente del multiplicador CHUNA. No hagas que la órbita gire 30 veces más rápido al activar CHUNA.

### Códigos secretos
- **MANBONIGA:** desbloquea 1.025 Pokémon y lleva las siete mejoras permanentes al máximo 5/5. Guarda el progreso anterior para poder revertirlo.
- **CHUNA:** hace avanzar el reloj del juego a 30 segundos de juego por segundo real conforme a la implementación existente. No acelera artificialmente el movimiento físico del jugador ni las animaciones visuales.
- **FUGA:** desactiva los efectos de los códigos y restaura el progreso anterior si existe una copia válida. No borra monedas, Pokémon obtenidos legítimamente, misiones ni progreso ajeno a los códigos.

### Combate y efectos
Conserva el Juice Manager, object pooling, partículas, números de daño, Screen Shake con decaimiento, Hit Stop breve en críticos, partículas elementales, colisiones, daño, habilidades, efectos temporales y recompensas actuales. Evita crear miles de objetos cada fotograma.

### Música y video
- Video de fondo reproducido solo en menús, oscurecido para legibilidad, con fallback si no se puede reproducir. No conviertas el fondo de combate en el video del menú.
- Música principal suministrada por el usuario (Ado, “Love me forever”): bucle durante la partida y hasta derrota, conforme al comportamiento actual.
- Música del portal (Imagine Dragons, “Take Me to the Beach”): al entrar al portal, sin solapar con la música principal; al salir, detener la pista del portal y reanudar la música principal desde su punto anterior.
- Mantén los recursos embebidos en HTML cuando así estén en la fuente y no exijas al jugador guardar archivos multimedia aparte sin necesidad.

### Sonido de la ruleta
El sonido extraído del clip de video del usuario está embebido en el HTML mediante el elemento con ID **gachaSpinAudio**, invocado por **playGachaSpinAudio()**. Debe sonar exclusivamente al comenzar una tirada válida de ruleta. Para tirada ×1, una reproducción; para tiradas múltiples ×10, una reproducción al inicio de la animación, no diez repeticiones. No debe sonar en el menú, combate, portal ni al cargar la página. Mantén tickets normales y rojos.

Las compensaciones actuales por duplicados son: común 10 monedas, raro 25, épico 75 y legendario 150. No cambies probabilidades ni recompensas.

### Pantalla completa
Ya existe un control de pantalla completa en menú y HUD de combate. Presérvalo. Debe alternar entrar/salir con la Fullscreen API si el navegador lo permite y sincronizar la etiqueta/estado visible ante cambios disparados por el propio navegador. Respeta los permisos y restricciones de iOS y otros navegadores móviles; no prometas compatibilidad universal. No reinicia la partida ni rompe controles táctiles.

### Mejoras permanentes
Conserva las siete mejoras, máximo 5 niveles, sus costes, efectos, progreso y guardado. Mantén sus reliquias/emblemas, rangos visuales y temática RPG. No modifiques economía ni valores mecánicos sin autorización.

### Misiones
Conserva misiones diarias, semanales y principales/permanentes, progreso visible, botón de reclamar, guardado y protección frente a recompensas duplicadas. Diarias reinician diariamente; semanales el lunes según la lógica del proyecto.

### Cofres dimensionales
Cofres rojos grandes en la Realidad Alterada; el jugador debe permanecer dentro del radio durante 2,5 segundos continuos para abrirlos. Conserva las probabilidades: objeto raro 42 %, épico 36 %, legendario 16 %, Piedra Mega 6 %. La imagen del botín debe corresponder al objeto ganado; si no hay imagen fiable, usa fallback neutral correcto.

## 6. Poketirano y eventos dimensionales

### Poketirano existente
Mantén su aparición cada 300 segundos de tiempo de juego; estadísticas ×9,98; advertencia del rayo dimensional 2,5 segundos; disparo de 0,56 segundos con daño ×6 basado en las estadísticas del jefe. Cada derrota confirmada da exactamente un ticket rojo garantizado además de otras recompensas. Procesa la derrota y el premio una sola vez.

No cambies su calendario ni sus recompensas para dar cabida a nuevos jefes. No generes a todos los Poketiranos de forma simultánea.

### Realidad Alterada
El nombre del evento es “Realidad Alterada”. Conserva la secuencia de Hoopa Desatado rompiendo el reloj con ambas manos y el mensaje grande “RUN!” durante cinco segundos con desvanecimiento. Las recompensas se cobran solo cuando el jugador llega físicamente y cruza el portal de salida; cero en el reloj no es suficiente.

**Discrepancia que no debe resolverse silenciosamente:** la guía/código actual describe 180 segundos (3:00), pero una nota de Gemini menciona 200 segundos (3:20). Conserva el valor actual hasta confirmación y documenta la discrepancia.

## 7. Arte 2D pixel art del entrenador y Pokémon

El estilo objetivo son los RPG Pokémon 2D de consolas portátiles: sprites nítidos, formas reconocibles y animación por fotogramas. No uses 3D, blur, render fotorrealista ni rediseños que contradigan las referencias.

- Usa la hoja del entrenador con gorra roja como guía del personaje principal.
- Inspecciona individualmente todas las hojas y mide sus celdas reales. No asumas una cuadrícula universal, cuatro columnas ni tamaños idénticos.
- Recorta únicamente los fotogramas válidos de cada hoja; no dibujes la hoja completa como una entidad.
- Implementa idle y ciclos de caminar por dirección donde existan frames; ataques e impactos cuando haya poses adecuadas.
- Si faltan direcciones, usa una transición discreta o una pose de respaldo; no deformes el sprite ni inventes frames a partir de otros Pokémon.
- Usa escalado nearest-neighbor, por ejemplo imageSmoothingEnabled = false al dibujar pixel art.
- Sombras bajo entidades y efectos moderados para separarlas del mapa.
- El sprite correcto debe acompañar a su especie y forma; un error de carga nunca muestra una criatura distinta.
- El dibujo es solo visual: no alteres identidad, estadísticas o mecánicas del Pokémon.

## 8. Portales mejorados inspirados en Hoopa

No conviertas el portal en un simple aro que gira uniformemente. Diseña una puerta dimensional con anillo dorado segmentado, detalles metálicos, abertura profunda, energía y una dimensión visible dentro. El aro puede mantenerse casi estable; anima principalmente la luz, reflejos, distorsión espacial, pulsos internos y partículas.

La entrada debe abrirse gradualmente; mientras esté activa, pulsar de forma sutil; al cruzarla, permitir una transición dimensional breve. La salida de Realidad Alterada conserva el núcleo oscuro y la paleta púrpura/magenta: #ff2a85, #ff85c0 y #4a0e4e, además de los colores del proyecto.

### Rotura del reloj por Hoopa
Mejora, no sustituyas, la cinemática existente: acercamiento, brazos extendidos, agarre con ambas manos, presión, deformación, grietas luminosas ramificadas, impacto sincronizado, fragmentos, destello, distorsión y transición a RUN!. Usa fases temporizadas deterministas, Juice Manager y pool de partículas. No cambies los temporizadores o el cobro de recompensas.

## 9. IA de enemigos y separación espacial

La IA actual persigue principalmente al jugador mediante un vector directo y puede acumular 100–250 enemigos en una zona. Mejora Enemy.update() y roles existentes sin eliminar habilidades, colisiones ni telegráficos.

Roles sugeridos:
1. Enjambre: enemigos comunes débiles y numerosos.
2. Perseguidor: marcha directa con separación suave.
3. Flanqueador: intenta cerrar ángulos o rutas alternativas.
4. Acechador predictivo: estima brevemente el desplazamiento del jugador sin acertar siempre.
5. Cargador: prepara una embestida con aviso visual.
6. Lanzador: dispara proyectiles lentos o crea zonas de daño anunciadas.
7. Protector: escudo temporal, resistencia limitada o vulnerabilidad en ciertos ángulos.

Usa separación entre enemigos próximos para evitar que ocupen el mismo píxel o se estanquen como una masa. Una distancia inicial de referencia puede ser 24–34 px, ajustada por tamaño. La separación debe ser suave, no expulsarlos como bolas de billar. Combina persecución con separación y flanqueo.

Para rendimiento, evita comparar todos los pares de enemigos en cada fotograma; utiliza una cuadrícula espacial/hash de celdas o vecinos locales. Limita el coste según densidad, reutiliza estructuras y mantén la IA basada en dt. La horda debe rodear y presionar, pero no realizar ataques inevitables.

## 10. Director de oleadas y escalado temporal

Ya existe un escalado de aparición normal añadido después de una modificación previa: el intervalo de spawn se reduce aproximadamente 3,5 % por minuto de juego hasta un máximo del 30 %, y la posibilidad de aparición extra crece gradualmente hasta un 38 %. Existe un límite de 220 enemigos normales en pantalla. **Inspecciona el código real antes de modificar esos valores y no apiles otro multiplicador encima sin consolidar la fórmula.**

Construye o refina un Wave Manager para repartir oleadas de manera uniforme, sin una explosión de 150–250 enemigos en el minuto 1:40 ni largos vacíos después. Encola grupos de enemigos y libera pocos por actualización. Limita entidades y procesamiento; no bloquees indebidamente jefes, elites o eventos importantes.

Escala objetivo:
- 0–2 min: enemigos base, dispersos y derrotables; aprendizaje del movimiento y EXP.
- 2–5 min: aumento constante de densidad y aparición gradual de roles especiales.
- 5–8 min: mayor presión por flanqueo, combinación de enemigos y élites.
- 8–10+ min: combinaciones peligrosas y subjefes programados, manteniendo rutas seguras y contrajuego.

Como referencias a evaluar sobre la fórmula ya existente: vida +12–16 % por minuto después del minuto 2, con un límite cerca de ×2,2–×2,4; daño +5–7 % por minuto con límite ×1,5–×1,6; velocidad +2–3 % por minuto con un límite alrededor de +20 %. Son objetivos de balanceo, no multiplicadores que deban sumarse sin revisar el código.

Se debe evitar el power-creep con mecánicas y no solo vida: escudos temporales, proyectiles, zonas telegráficas, puntos débiles, fases de recuperación, combinación de roles y amenazas que corten determinadas rutas. No uses inmunidad permanente. Toda amenaza fuerte debe mostrar preparación, ataque y recuperación con tiempos razonables para reaccionar.

CHUNA altera el reloj de juego pero no debe multiplicar 30× el movimiento físico, las órbitas, las partículas visuales ni la velocidad de animación. Los temporizadores especiales deben dispararse una sola vez incluso después de saltos del reloj.

## 11. Diez arquetipos de Poketirano colosal — ALCANCE OBLIGATORIO

**No omitas esta sección ni la reduzcas a una mención genérica de “añadir jefes”.** Los diez diseños y sus habilidades forman parte esencial de lo acordado. Cada jefe usa la referencia visual asociada, tiene tamaño colosal, barra de vida, entrada, fases, ataque insignia exclusivo, telegráfico, recuperación y contrajuego. No reutilices la habilidad insignia en Pokémon comunes, élites o los otros Poketiranos.

### Mapa rápido de habilidades

| Ref. | Poketirano | Habilidad insignia exclusiva |
|---|---|---|
| 01 | Guardián Celular | Prisma de las Mil Celdas |
| 02 | Dragón del Vacío | Falla de Eternidad |
| 03 | Hidra de las Tres Fauces | Convergencia Trifauce |
| 04 | Coloso Acorazado | Asedio de Placas Sísmicas |
| 05 | Titán del Núcleo Encadenado | Prisión de Grilletes Primordiales |
| 06 | Guardián de las Raíces | Veredicto del Bosque Invertido |
| 07 | Monolito Fragmentado | Constelación de Puños Errantes |
| 08 | Sabueso del Eco Espectral | Cacería de los Tres Ecos |
| 09 | Pesadilla Abisal | Eclipse del Horizonte |
| 10 | Titán Glacial | Corona de la Última Aurora |

Las once imágenes representan diez diseños porque las vistas frontal y posterior del coloso acorazado pertenecen al mismo jefe. Las referencias visuales no confirman por sí solas la identidad oficial de las criaturas; respeta la forma, la silueta y los colores aportados por el usuario.

### Habilidades, fases y contrajuego obligatorios

**1. Guardián Celular — Prisma de las Mil Celdas**  
Usa la referencia serpentina/celular verde-negra (con alternativa dorada). Marca el suelo con una cuadrícula energética; los segmentos se activan por turnos tras la cuenta regresiva. Algunos núcleos quedan expuestos: destruirlos abre corredores o interrumpe el siguiente patrón. En fase final las líneas convergen en diagonales, pero siempre queda una ruta de escape identificable. El contrajuego es leer el patrón, romper un número limitado de núcleos y moverse por los corredores disponibles.

**2. Dragón del Vacío — Falla de Eternidad**  
Usa la referencia del dragón cósmico alargado y esquelético. Abre grietas dimensionales que anuncian rayos largos y secuenciales; después cada grieta colapsa en una onda secundaria. No dispares todas las grietas simultáneamente. En fase superior una silueta colosal cruza la arena y altera brevemente la trayectoria de algunos proyectiles sin quitar al jugador el control. El ataque final combina dos fracturas como una pinza, dejando un corredor central o lateral seguro. El contrajuego es escapar de la línea marcada y atacar el foco vulnerable durante la recuperación.

**3. Hidra de las Tres Fauces — Convergencia Trifauce**  
Usa la referencia de dragón de tres cabezas. Cada cabeza tiene señal y patrón propios: barrido lineal, lluvia acotada de proyectiles y golpe de zona retrasado. En fase final coordina los tres patrones en una formación triangular, pero conserva un pasillo seguro que cambia entre ciclos. Tras la descarga las cabezas quedan brevemente agotadas. El contrajuego es leer cada señal, reposicionarse y atacar una cabeza expuesta, sin generar tres impactos inevitables sobre el mismo punto.

**4. Coloso Acorazado — Asedio de Placas Sísmicas**  
Usa juntas las vistas frontal y posterior del cuadrúpedo blindado como un único jefe. Baja el cuerpo y anuncia una carga por una trayectoria concreta; el choque crea anillos sísmicos esquivables. Después brillan puntos débiles en la espalda y las placas se vuelven vulnerables. En fase superior añade una segunda carga tras una pausa señalizada, no una persecución instantánea e infinita. El contrajuego es salir de la trayectoria, evitar los anillos y reposicionarse detrás o junto al jefe durante su recuperación. La armadura frontal puede reducir daño, pero no dar invulnerabilidad permanente.

**5. Titán del Núcleo Encadenado — Prisión de Grilletes Primordiales**  
Usa la referencia de golem de piedra/metal con fragmentos flotantes y energía cian/púrpura. Une fragmentos mediante cadenas de energía que forman triángulos de contención. Los enlaces se encienden uno por uno; el jugador puede destruir un ancla visible para abrir una salida. Si se completa la figura, descarga una onda anunciada y deja el núcleo expuesto después. En fase superior reorganiza fragmentos como escudo. El contrajuego es romper un ancla, no quedarse dentro de los enlaces y presionar el núcleo en la ventana vulnerable. La cadena nunca aparece instantáneamente encima del jugador.

**6. Guardián de las Raíces — Veredicto del Bosque Invertido**  
Usa la referencia de entidad arbórea/espiritual. Marca carriles de tierra con grietas y brotes antes de hacer emerger raíces gigantes en secuencia, bloqueando temporalmente algunas rutas. Una semilla-núcleo visible alimenta la red; dañarla detiene el siguiente ciclo y reduce una regeneración limitada. En fase final las raíces forman una espiral incompleta con una salida deliberada. El contrajuego es cambiar de carril, atacar el núcleo durante su exposición y aprovechar la pausa después del crecimiento. Los aliados vegetales no pueden curar indefinidamente al jefe.

**7. Monolito Fragmentado — Constelación de Puños Errantes**  
Usa la referencia del coloso mineral articulado. Desprende puños o placas que orbitan en formaciones legibles, brillan en orden y caen uno por uno, creando ondas de impacto. La secuencia deja un refugio temporal que cambia de sitio. En fase superior forma una corona de fragmentos, hace un cierre convergente y luego se recompone aturdido. El contrajuego es observar el orden, moverse antes de cada impacto y aprovechar la recomposición. Limita piezas simultáneas para no saturar Canvas.

**8. Sabueso del Eco Espectral — Cacería de los Tres Ecos**  
Usa la referencia canina espectral azul/blanca con variante violeta. Deja dos o tres ilusiones residuales que repiten la trayectoria anterior mientras el cuerpo real flanquea. El cuerpo auténtico tiene un destello distinto antes de abalanzarse; los ecos se disipan y no duplican el daño de contacto. En fase superior puede fingir una retirada y rodear al jugador, pero nunca teletransportarse encima sin aviso. El contrajuego es reconocer el cuerpo real y esquivar la trayectoria marcada.

**9. Pesadilla Abisal — Eclipse del Horizonte**  
Usa la referencia oscura/fantasmagórica roja y magenta. Reduce la iluminación solo moderadamente, preservando HUD, sprites y avisos. Las sombras repiten con retraso la última ruta del jugador y luego convergen en líneas de corte anunciadas. Existen anclas luminosas destructibles que disipan el eclipse antes de tiempo. En fase superior, la silueta gigante genera una onda oscura con anillos de salida visibles. El contrajuego es destruir anclas y cambiar la ruta prevista; los controles nunca se bloquean y la pantalla nunca queda completamente oscura.

**10. Titán Glacial — Corona de la Última Aurora**  
Usa la referencia del titán con cristales cian y paleta azul/violeta. Levanta cristales en lugares anunciados; sus caras refractan líneas de energía que se cruzan antes de que los cristales estallen. El jugador puede dañar los cristales para abrir huecos o acortar la explosión. En fase superior crea un anillo de hielo incompleto que se contrae por etapas, siempre con una salida clara. El suelo helado ralentiza por poco tiempo, no congela indefinidamente. El contrajuego es destruir cristales bloqueantes y cruzar las aperturas antes del estallido.

### Arquitectura y balance de jefes

- Usa una máquina de estados compatible con la arquitectura existente: introducción, fase, telegráfico, ataque, recuperación, cambio de fase y derrota. No es obligatorio usar esos nombres literalmente si ya existe un sistema equivalente.
- Cada jefe debe tener por lo menos dos fases cuando la arquitectura lo permita; umbrales de cambio se procesan una sola vez. Los cambios pueden alterar patrón y efectos, no multiplicar todas las estadísticas sin límite.
- Los ataques grandes necesitan tiempo suficiente para leer y esquivar; usa aproximadamente 1,2–2,5 segundos de aviso como referencia ajustada a la habilidad, nunca como cifra rígida para todos los patrones.
- No permitir golpes inevitables, encerramientos sin salida, cadenas infinitas de ataques o bloqueo de controles.
- Separa la escala gráfica colosal de la hitbox y del daño por contacto. Mantén visible el HUD, los telegráficos y al jugador.
- Mantén el pixel art nítido con nearest-neighbor e `imageSmoothingEnabled = false`; no deformes sprites para encajarlos.
- Reutiliza Juice Manager, object pooling, colisiones y avisos existentes. No pongas los diez patrones complejos en un único bloque que se ejecute para todos los enemigos en cada fotograma.
- Nunca generes los diez jefes simultáneamente. Solo aparece el encuentro previsto por el calendario o el modo de progresión aprobado.
- Conserva el evento actual de Poketirano cada 300 segundos de tiempo de juego, sus estadísticas ×9,98, el telegráfico del rayo de 2,5 segundos, el disparo de 0,56 segundos con daño ×6 y exactamente un ticket rojo garantizado por derrota confirmada. Si la implementación real difiere, reporta la discrepancia antes de cambiarla.
- Los cambios de fase, muerte, recompensas y callbacks deben ser idempotentes; cada jefe muerto solo concede sus recompensas una vez. Las animaciones visuales no se aceleran por CHUNA.
- Las variantes de color de las referencias no se deben asumir automáticamente como formas oficiales, variocolor o jefes adicionales; documenta su uso y conserva la identidad existente de la Pokédex.

## 12. Mapa, biomas y legibilidad — MEJORA GRÁFICA Y MICROANIMACIÓN OBLIGATORIAS

No basta con conservar el mapa estático o agregar unas cuantas plantas. **Mejora visiblemente la calidad gráfica del mapa de combate y añade animaciones ambientales pequeñas, perceptibles y continuas**, preservando su cámara, límites, colisiones, controles, distribución y mecánicas actuales.

### Calidad visual del terreno
- Mejora el pixel art de suelos, caminos, césped, tierra y piedra, con tiles más ricos y coherentes, variación controlada de patrones, bordes de terreno limpios, pequeñas manchas de textura, sombras cortas bajo árboles/rocas y profundidad mediante capas de fondo, terreno, decoración baja y oclusiones frontales.
- Cada bioma debe distinguirse por paleta, tipo de terreno, vegetación y distribución de props. No reutilices exactamente el mismo paisaje cambiando solo el color.
- Usa nearest-neighbor y `imageSmoothingEnabled = false` para pixel art; evita blur, bordes interpolados y escalado subpíxel. Mantén legibles los sprites.
- La calidad mejorada debe ser visible durante la partida, no solamente en menús o imágenes promocionales.

### Microanimaciones del mapa
En cada bioma implementa al menos uno o varios elementos ambientales animados:
- Hierba alta que se balancea levemente en 2–3 píxeles o frames simulando una brisa.
- Flores y pequeños arbustos que se mecen o suben y bajan de forma discreta.
- Agua, charcos y lagunas con 2–4 fases de ondulación, destellos pixelados y pequeñas ondas que aparecen y desaparecen.
- Hojas, copas de árboles o lianas con oscilación mínima, sin deformar sus sprites.
- Partículas ocasionales y escasas —polvo, motas de luz, luciérnagas, hojas o cristales— elegidas según el bioma.
- Brillos ambientales en minerales, cristales o zonas mágicas, con cadencia baja y sin parecer ataques.

Las animaciones deben ser sutiles pero visibles aunque el jugador permanezca quieto. **No hagas girar, sacudir ni desplazar todo el mapa para simular vida.** Anima los elementos o capas individuales y conserva estable el seguimiento de cámara existente.

### Temporización y rendimiento
- Anima mediante `dt` o un reloj visual independiente y estable. El multiplicador `CHUNA` no debe acelerar 30× hierba, agua, partículas, sprites, cámara u órbitas.
- Genera la colocación del decorado usando una semilla estable por mapa/bioma; inicializa una vez las posiciones y no regeneres la vegetación cada fotograma.
- Cachea el terreno estático en un canvas auxiliar o textura reutilizable si encaja con el motor actual. Redibuja solo los elementos dinámicos, reutiliza el pool de partículas y aplica culling a decoraciones fuera de cámara si es necesario.
- Mantén capas claras: terreno, decoración baja, sombras, entidades, elementos frontales/oclusiones controladas, efectos de combate y telegráficos.
- Ninguna decoración o partícula puede tapar al jugador, compañeros, enemigos, botín, portales, barra de jefe o avisos de peligro. Conserva contraste entre suelo y entidades.
- Adapta partículas y efectos a móviles modestos; respeta `prefers-reduced-motion` cuando sea razonable y conserva un mapa legible si se reduce el movimiento.
- Al terminar, lista exactamente qué aspectos del terreno se mejoraron y qué microanimaciones funcionan en cada bioma. No digas que el mapa está animado si solo se anima el jugador o la cámara.

Los sprites pueden recibir sombras y efectos moderados, con prioridad a una silueta legible. Mantén controles accesibles en PC y móvil.

## 13. Publicación con GitHub Pages y HTTPS

GitHub Pages es estático: no introduzcas backend ni servidor permanente si no hace falta. Prepara la versión final para servirse bajo una ruta de proyecto, no asumas que el sitio se aloja siempre en la raíz del dominio. Comprueba las rutas relativas y el funcionamiento al recargar.

La página raíz del repositorio actual pertenece a otro proyecto; no la sobrescribas. El juego debe residir en la carpeta pokelinage. No afirmar que el juego está publicado hasta que el HTML completo esté subido, la publicación de Pages esté configurada y se compruebe el URL resultante.

Conserva medios embebidos si están en el HTML. Si por una limitación técnica se propone separar los medios, informa antes y documenta el efecto; no elimines ni comprimas destructivamente datos multimedia. Si un archivo grande no puede subirse mediante la integración disponible, reporta el bloqueo con honestidad, no lo sustituyas por una demo.

## 14. Flujo profesional de trabajo

### Auditoría
Inventaria archivos, clases y funciones: Player, Enemy, compañeros, dibujado del Canvas, spawn, roles, jefe, portal, Hoopa, audio, guardado, UI, códigos y controles. Identifica diferencias entre esta especificación y el código y descríbelas. Crea respaldo.

### Implementación por fases
1. Asegura una copia de trabajo del juego y un checkpoint.
2. Mejora sprites, animación y portal en cambios pequeños.
3. Refina IA y separación espacial con medición de coste.
4. Consolida spawn/scaling sin duplicar fórmulas.
5. Implementa arquetipos de jefe solo donde el sistema actual permita integrarlos sin romper progresión.
6. Prepara la publicación en una carpeta independiente.
7. Ejecuta validaciones automáticas y pruebas reales cuando haya navegador.

### Pruebas mínimas
- Sintaxis JavaScript y CSS/HTML.
- IDs duplicados, elementos inexistentes, listeners y temporizadores.
- Inicio, pausa, derrota, reinicio y recarga.
- Guardado, migración, MANBONIGA, CHUNA y FUGA.
- Una tirada de ruleta y una múltiple; audio una vez por animación.
- Entrada/salida del portal y música sin solapamiento.
- Entrada/salida de pantalla completa.
- Colisiones y controles en PC y móvil.
- Cofres, objetos y arte correcto de recompensas.
- Misiones, reclamaciones y ausencia de duplicados.
- Movimiento orbital durante CHUNA.
- Oleadas a los minutos 0, 2, 5, 8 y 10.
- Aparición de Poketirano y exactamente un ticket rojo por derrota.
- Cada nuevo jefe en sus fases, telegráficos, recuperación, colisiones y rendimiento.

No declares una prueba como aprobada si solo se revisó estáticamente. Registra browser/viewport/escenario cuando se realice una prueba real. Si no hay navegador, indica lo que quedó pendiente.

## 15. Entregables y criterios de aceptación

Entrega:
1. pokelinage.html completo y descargable, sin sustituir los medios ni sistemas existentes.
2. pokelinage/index.html listo para Pages solo cuando sea una copia sincronizada del juego completo.
3. Referencias gráficas organizadas, con inventario de los archivos que se hayan subido realmente.
4. Copia de seguridad y Pull Request con cambios pequeños y revisables.
5. Resumen de cambios, validaciones, pruebas realizadas y problemas pendientes.

El trabajo está aceptado cuando el juego conserva sus características actuales, los recursos multimedia siguen íntegros, el arte es pixel art nítido, el portal tiene profundidad, las oleadas no producen picos excesivos, los enemigos muestran comportamientos variados y separaciones, la dificultad progresa sin volverse injusta, cada Poketirano tiene una habilidad única y legible, y la web carga correctamente desde la ruta de GitHub Pages.

No cambies los 180 segundos del portal a 200 sin aprobación. No modifiques recompensas de Poketirano. No sobrescribas el sitio ajeno que vive en la raíz del repositorio. No finjas que los assets han sido subidos ni que el navegador se ha probado si no es cierto.

**Prioridad final: preservar, inspeccionar, mejorar con mentalidad profesional, probar honestamente y entregar una versión completa que pueda continuar evolucionando sin perder lo construido.**
