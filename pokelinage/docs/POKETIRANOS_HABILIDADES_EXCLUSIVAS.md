# Pokelinage — Poketiranos colosales y habilidades exclusivas

Este catálogo es una parte obligatoria del prompt maestro unificado, no una sugerencia opcional. Usa las imágenes suministradas como referencias y conserva el motor de jefes actual.

## Reglas comunes

- Las once imágenes corresponden a diez diseños; las vistas frontal y posterior del Coloso Acorazado son un único jefe.
- Los jefes deben verse colosales (como referencia, 2,8–4 veces la altura del jugador, ajustado a la pantalla) y usar pixel art nítido, una barra de vida propia, fases legibles y una hitbox separada del tamaño visual.
- Cada Poketirano tiene una habilidad insignia exclusiva. Ningún Pokémon normal, élite común ni otro Poketirano puede utilizarla.
- Toda habilidad poderosa necesita preparación, telegráfico visible, ejecución, cooldown, recuperación y contrajuego. Nada de golpes inevitables, encierros sin salida o cadenas de ataques sin ventana de reacción.
- No generar todos los jefes simultáneamente. Mantener un encuentro según el calendario/progresión existente.
- Conservar aparición de Poketirano cada 300 segundos de tiempo de juego, estadísticas ×9,98, aviso del rayo de 2,5 s, disparo de 0,56 s con daño ×6 y exactamente un ticket rojo garantizado por derrota confirmada. Si el código real difiere, registrar la discrepancia antes de cambiarlo.
- Reutilizar Juice Manager, object pooling, telegráficos, daño y colisiones actuales. Las animaciones visuales no se aceleran por CHUNA.

## Roster y mecánicas acordadas

### 1. Guardián Celular — `poketirano_ref_01_guardian_celular.jpg`
**Habilidad: Prisma de las Mil Celdas.** Marca una cuadrícula energética en el terreno; celdas alternas se activan tras una cuenta regresiva. Hay núcleos destructibles que abren corredores seguros o interrumpen el siguiente patrón. En fase superior las líneas convergen en diagonales, pero siempre hay una salida legible.

### 2. Dragón del Vacío — `poketirano_ref_02_dragon_vacio.jpg`
**Habilidad: Falla de Eternidad.** Abre grietas dimensionales que anuncian rayos largos por turnos y colapsan en ondas secundarias. La fase final crea una pinza entre dos fracturas dejando un corredor seguro y una ventana de vulnerabilidad. La habilidad no elimina el control del jugador.

### 3. Hidra de las Tres Fauces — `poketirano_ref_03_hidra_tres_fauces.jpg`
**Habilidad: Convergencia Trifauce.** Cada cabeza telegraphía un patrón distinto: barrido lineal, lluvia acotada de proyectiles y golpe de zona retrasado. En fase superior los patrones se combinan con un pasillo de escape; tras la descarga la hidra queda agotada brevemente.

### 4. Coloso Acorazado — `poketirano_ref_04_coloso_acorazado_frente.jpg` + `poketirano_ref_04_coloso_acorazado_espalda.jpg`
**Habilidad: Asedio de Placas Sísmicas.** Anuncia una trayectoria de carga; el impacto crea anillos sísmicos esquivables y deja puntos débiles expuestos en la espalda. La fase superior añade una segunda carga señalizada. La armadura frontal puede reducir daño, pero no generar invulnerabilidad permanente.

### 5. Titán del Núcleo Encadenado — `poketirano_ref_05_titan_nucleo.jpg`
**Habilidad: Prisión de Grilletes Primordiales.** Une fragmentos por cadenas energéticas que forman triángulos de contención. Los enlaces se activan en secuencia y las anclas marcadas pueden destruirse para abrir una salida. Si la figura se completa, el golpe está anunciado y el núcleo queda expuesto después.

### 6. Guardián de las Raíces — `poketirano_ref_06_guardian_raices.jpg`
**Habilidad: Veredicto del Bosque Invertido.** Marca carriles mediante grietas y brotes; raíces gigantes emergen en secuencia y bloquean temporalmente rutas. Una semilla-núcleo visible alimenta la red; golpearla cancela el próximo ciclo y limita la regeneración. Siempre se conserva una ruta segura.

### 7. Monolito Fragmentado — `poketirano_ref_07_monolito_fragmentado.jpg`
**Habilidad: Constelación de Puños Errantes.** Desprende fragmentos que orbitan con trayectorias señalizadas y caen en secuencia, creando ondas de impacto. La formación deja un refugio temporal que cambia de posición. Al terminar, el jefe se recompone y queda vulnerable.

### 8. Sabueso del Eco Espectral — `poketirano_ref_08_sabueso_espectral.jpg`
**Habilidad: Cacería de los Tres Ecos.** Crea dos o tres ilusiones que repiten las trayectorias anteriores mientras el cuerpo real flanquea. El cuerpo auténtico tiene una señal distintiva antes del ataque; las copias no deben causar daño duplicado ni saturar colisiones.

### 9. Pesadilla Abisal — `poketirano_ref_09_pesadilla_abisal.jpg`
**Habilidad: Eclipse del Horizonte.** Baja moderadamente la iluminación y reproduce con retraso la última ruta del jugador como sombras de ataque. Anclas luminosas pueden destruirse para disipar el eclipse. El HUD, los telegráficos y los sprites siguen visibles; los controles nunca se bloquean.

### 10. Titán Glacial — `poketirano_ref_10_titan_glacial.jpg`
**Habilidad: Corona de la Última Aurora.** Levanta cristales en posiciones anunciadas. Los cristales refractan líneas de energía y luego estallan; el jugador puede destruirlos para abrir huecos o acortar la explosión. La fase final crea un anillo de hielo incompleto con salida clara y ralentización breve.

## Implementación del combate de jefe

Cada Poketirano debe integrarse con la arquitectura actual en estados equivalentes a:

`INTRO → PHASE_1 → TELEGRAPH → ATTACK → RECOVERY → PHASE_CHANGE → PHASE_2 → DEFEATED`

No hace falta usar esos nombres literales si ya existe una máquina de estados. El cambio de fase y la recompensa deben ejecutarse una sola vez. Las grandes habilidades deben avisarse con suficiente antelación (como referencia ajustable, 1,2–2,5 s según el patrón) y dejar tiempo real para reaccionar.

La identidad visual debe corresponder a su referencia. No asumas que las paletas alternativas son formas oficiales, variocolor o jefes nuevos. No sustituyas los diseños por criaturas genéricas ni alteres la Pokédex por motivos visuales.

## Validación

- Se reconoce visualmente cada uno de los diez jefes y se mapea a su imagen correcta.
- Son gigantescos, pero no tapan permanentemente al jugador, el HUD o los avisos.
- Cada habilidad tiene telegráfico, contrajuego, cooldown y recuperación.
- Ningún otro Pokémon hereda la habilidad insignia.
- No hay ataques inevitables, bloqueo permanente, dobles recompensas ni diez jefes simultáneos.
- Pokelinage conserva música, video, códigos secretos, mapa, misiones, ruleta, mejoras y guardado.
