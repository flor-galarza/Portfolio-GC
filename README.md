# Sitio Web — Gestión Compartida

Micrositio multipágina desarrollado con Astro para presentar el portfolio académico del equipo **Gestión Compartida**. Reúne identidad de equipo, recorrido de aprendizaje, TPI, mapa conceptual y la evolución de los desafíos en una estructura clara, mantenible y lista para seguir creciendo.

## Estado actual

- **D3**: desarrollado con contenido real.
- **D4 a D7**: visibles como **Próximamente**, con estructura preparada para completar más adelante.
- El sitio ya refleja el refactor de arquitectura y el uso de **componentes reutilizables** + **contenido centralizado**.

## Stack principal

- **Astro 5**
- **TypeScript**
- **Tailwind CSS 4** + estilos globales propios
- **Vite** (integrado en Astro)

## Secciones del sitio

- `/` — Home
- `/equipo` — presentación del equipo Gestión Compartida
- `/rpa` — rutas personales de aprendizaje
- `/tpi` — síntesis del Trabajo Práctico Integrador
- `/mapa-conceptual` — mapa conceptual del proyecto
- `/desafios` — índice general de desafíos
- `/desafios/d3` a `/desafios/d7` — páginas individuales por desafío

> Nota: existe además `/contacto` como ruta secundaria dentro del proyecto.

## Estructura útil para edición

```text
src/
├── components/        # Componentes reutilizables de UI
├── data/
│   └── content.ts     # Fuente central de textos, equipo, desafíos y TPI
├── layouts/
│   └── BaseLayout.astro
├── pages/             # Rutas del sitio (Astro file-based routing)
└── styles/
    └── global.css     # Estilos globales y variables visuales
```

## Mantenimiento rápido

- **La mayoría del contenido editable vive en `src/data/content.ts`.**
- Las páginas de desafíos reutilizan una plantilla común, por lo que el cambio de estado o contenido suele resolverse desde datos centrales.
- La navegación global y la estructura compartida pasan por `src/components/` y `src/layouts/BaseLayout.astro`.
- Antes de publicar, conviene revisar `astro.config.mjs`, ya que el campo `site` sigue con un valor placeholder.

## Cómo correr el proyecto localmente

### Requisitos

- Node.js 18+
- npm 9+

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Servidor local por defecto: `http://localhost:4321`

## Comandos relevantes

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia el entorno local de desarrollo |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza localmente el build generado |
| `npm run check` | Ejecuta chequeos de Astro y TypeScript |

## Flujo recomendado para futuras ediciones

1. Actualizar contenido en `src/data/content.ts`.
2. Levantar el proyecto con `npm run dev`.
3. Verificar consistencia con `npm run check`.
4. Generar build con `npm run build` antes de publicar.

## Salida de producción

El proyecto genera un sitio estático en `dist/`, apto para desplegar en hosting estático como Netlify, Vercel, GitHub Pages o Cloudflare Pages.
