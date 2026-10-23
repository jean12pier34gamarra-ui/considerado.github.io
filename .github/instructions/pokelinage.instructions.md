---
applyTo: "pokelinage/**"
---

# Instrucciones de GitHub Copilot para Pokelinage

Antes de editar cualquier archivo bajo `pokelinage/`, lee `pokelinage/docs/PROMPT_MAESTRO_UNIFICADO.md` y el HTML fuente vigente de Pokelinage.

## Reglas que no se pueden romper

- Trabaja solo dentro de `pokelinage/` para las tareas del juego. No modifiques el `index.html` de la raíz: pertenece a “El Efecto Checklist”.
- No reconstruyas el juego desde cero ni sustituyas el motor por una demo.
- No elimines mecánicas existentes ni cambies probabilidades, recompensas, guardados o duración del portal sin autorización.
- Conserva los códigos `manboniga`, `chuna`, `fuga`; combate y Poketirano; Realidad Alterada y Hoopa; cofres; ruleta y duplicados; siete mejoras; misiones; órbitas de compañeros; música, audio de ruleta y video.
- Mantén los medios embebidos si lo están. No finjas que las referencias visuales se han subido si no están en el árbol Git.
- Haz cambios localizados y revisables. Para cambios grandes, usa rama separada, checkpoint y Pull Request.
- Usa sprites pixel art 2D nítidos, verifica las dimensiones reales de cada hoja y no elimines píxeles negros interiores al aislar fondos.
- Consolida la lógica de spawn/escalado antes de sumar multiplicadores; conserva CHUNA y el calendario/recompensa actual de Poketirano.
- Cada habilidad insignia de Poketirano debe ser exclusiva, gigante pero con hitbox justa, telegráfico, fase de ataque, recuperación y contrajuego.
- Nunca declares pruebas de navegador, de audio ni de rendimiento que no se hayan ejecutado realmente. Distingue validación estática de pruebas reales.
- En GitHub Pages, comprueba rutas relativas bajo la ruta de subcarpeta. No declares el sitio listo hasta que el juego completo haya sido subido y la URL publicada se haya verificado.

## Entrega al modificar

Incluye un resumen de cambios, validaciones realizadas, pruebas pendientes y archivos/recursos que falten. Evita cambios ajenos a Pokelinage.
