# Recursos Bíblicos

Mapas, modelos 3D, líneas de tiempo y rutas de estudio interactivas para profundizar en el estudio de la Biblia.
Las reglas del proyecto están en [`docs/DIRECTRICES.md`](docs/DIRECTRICES.md): léelas antes de agregar un recurso.

```bash
npm install
npm run dev      # desarrollo local
npm run build    # compila a dist/ y genera el índice de búsqueda
npm run preview  # prueba el resultado compilado
```

Agregar un recurso = crear `src/content/recursos/{slug}.md` (ver DIRECTRICES §8 y §20).
Publicar = hacer push a `main`; GitHub Actions compila y despliega.
