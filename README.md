# Portfolio UTN — Micrositio del equipo Atlas

Micrositio multipágina desarrollado para presentar el portfolio académico del equipo Atlas UTN: integrantes, evolución del aprendizaje, desafíos (D3 a D7), ruta profesional (RPA) y síntesis del TPI.

## Descripción

El proyecto está construido con Astro y una base de estilos globales con Tailwind CSS 4 + CSS personalizado. La arquitectura prioriza:

- contenido editable centralizado en `src/data/content.ts`
- componentes reutilizables para secciones comunes
- navegación clara entre páginas académicas clave

## Stack

- **Framework:** Astro 4
- **Estilos:** Tailwind CSS 4 (`@import "tailwindcss"`) + CSS global
- **Tooling:** Vite (interno de Astro) para dev/build/preview
- **Lenguaje:** TypeScript (config `astro/tsconfigs/strict`)

## Requisitos

- Node.js 18+
- npm 9+

> Si usás otra versión de Node, se recomienda gestionar entornos con `nvm`.

## Instalación

```bash
npm install
```

## Ejecución

### Desarrollo

```bash
npm run dev
```

Servidor local por defecto: `http://localhost:4321`

### Build de producción

```bash
npm run build
```

Salida generada en `dist/`.

### Preview local del build

```bash
npm run preview
```

Útil para validar el artefacto de producción de forma local (no reemplaza un servidor productivo).

## Scripts disponibles

| Script | Descripción |
| :-- | :-- |
| `npm run dev` | Inicia entorno de desarrollo |
| `npm run build` | Genera build optimizado en `dist/` |
| `npm run preview` | Levanta una vista local del build |
| `npm run check` | Ejecuta chequeos de Astro/TypeScript |

## Estructura del proyecto

```text
/
├── public/                # Assets estáticos servidos tal cual
├── src/
│   ├── assets/            # Assets procesados por Astro (ej: logo)
│   ├── components/        # Componentes reutilizables
│   ├── data/              # Contenido editable del micrositio
│   ├── layouts/           # Layout base y estructura global
│   ├── pages/             # Rutas del sitio (file-based routing)
│   └── styles/            # Estilos globales
├── astro.config.mjs       # Configuración de Astro
├── tsconfig.json          # Configuración TypeScript
└── package.json           # Scripts y dependencias
```

## Despliegue

El proyecto genera un sitio estático en `dist/`, por lo que puede desplegarse en cualquier hosting estático (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

Flujo recomendado:

1. `npm run build`
2. Publicar el contenido de `dist/` en el proveedor elegido

## Troubleshooting básico

- **Error de dependencias o lockfile:**
  - borrar `node_modules`
  - ejecutar `npm install`
- **Cambios de estilos no impactan:**
  - confirmar que `src/styles/global.css` sigue importado desde `src/layouts/BaseLayout.astro`
- **El sitio no arranca en el puerto esperado:**
  - iniciar con `npm run dev -- --port 4321` (o puerto libre)
- **Errores de tipado/chequeo:**
  - correr `npm run check` y revisar archivos `.astro` y `.ts` afectados
