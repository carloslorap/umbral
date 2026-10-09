# Umbral Inmobiliaria — landing en Astro

Landing de práctica para una agencia ficticia de venta de departamentos en Lima.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (HTML estático)
npm run preview  # sirve el build
```

## Estructura

```
src/
├── data/proyectos.ts        # datos tipados (como si vinieran de una API)
├── layouts/Layout.astro     # <html>, <head>, fuentes y <slot />
├── styles/global.css        # tokens (variables CSS) y botones compartidos
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── PlanoDepa.astro      # plano SVG interactivo
│   ├── Proyectos.astro      # lista + filtro por distrito
│   ├── ProyectoFila.astro   # recibe un proyecto por props
│   ├── Proceso.astro
│   ├── Contacto.astro       # formulario con validación nativa
│   └── Footer.astro
└── pages/index.astro        # la ruta "/"
```

## Conceptos de Astro que practicas aquí

- **Frontmatter (`---`)**: corre solo en el build. Ahí se importan datos y se calculan valores (ej. el total de m² del plano).
- **Props tipadas**: `interface Props` + `Astro.props` en `Layout` y `ProyectoFila`.
- **`<slot />`**: el layout envuelve el contenido de la página.
- **`.map()` en el template**: la lista de proyectos, filtros y ambientes del plano.
- **`class:list`**: clases condicionales en el badge de estado.
- **CSS scoped**: cada `<style>` solo afecta a su componente; lo compartido va en `global.css`.
- **`<script>`**: JS del cliente empaquetado por Astro (filtro, plano, formulario). Cero frameworks.

## Ideas para seguir practicando

1. Crear `src/pages/proyectos/[id].astro` con `getStaticPaths()` para una página por proyecto.
2. Mover los proyectos a una Content Collection (`src/content/`).
3. Conectar el formulario a un endpoint (`src/pages/api/visita.ts`) o a tu backend FastAPI.
4. Agregar una isla interactiva con React (`npx astro add react`) y `client:visible`, por ejemplo un simulador de crédito.
