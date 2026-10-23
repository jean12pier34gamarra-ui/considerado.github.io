# Pokelinage — PokéSurvivor: Mundo Misterioso

Este directorio está reservado para alojar el juego Pokelinage en GitHub Pages, sin reemplazar el proyecto existente en la raíz del repositorio.

## Estado

- [x] Especificación maestra consolidada y disponible en `docs/PROMPT_MAESTRO_UNIFICADO.md`.
- [ ] Mejorar de forma perceptible el arte del mapa y añadir microanimaciones ambientales por bioma (hierba, flores/hojas, agua, brillos/partículas) sin regenerar objetos por fotograma ni acelerar con CHUNA.
- [ ] Implementar el roster de diez Poketiranos con las habilidades insignia únicas listadas en el prompt; no tratarlos como un único jefe genérico.
- [ ] Importar la versión completa y vigente de `pokelinage.html` como `index.html` de esta carpeta, conservando todos los medios integrados.
- [ ] Añadir las imágenes de referencia del entrenador, Pokémon y diez arquetipos de Poketirano.
- [ ] Revisar sintaxis, referencias a recursos y consola del navegador.
- [ ] Probar audio de la ruleta, música del portal, códigos secretos, pantalla completa, oleadas y jefes.
- [ ] Verificar la URL publicada antes de anunciar el juego como listo.

## No sobrescribir la página raíz

El archivo raíz `/index.html` corresponde a otro proyecto (“El Efecto Checklist”). Pokelinage debe vivir en esta subcarpeta y publicarse en la ruta `/pokelinage/` cuando se agregue el HTML completo.

## Fuente canónica

La versión de trabajo debe partir del archivo completo y actual `pokelinage.html`, no de una reconstrucción. El prompt define los requisitos de preservación, mejoras gráficas, IA, spawn, dificultad, portales, audio y Poketiranos.
