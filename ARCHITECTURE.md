# Estructura de Carpetas - Guía de Trabajo

> **Proyecto:** Unyx Solutions  
> **Última actualización:** Julio 2026

---

# Objetivo

Este documento describe la organización de carpetas del proyecto y la responsabilidad de cada una de ellas.

El propósito es mantener una arquitectura limpia, escalable y fácil de mantener, permitiendo que cualquier desarrollador pueda identificar rápidamente dónde crear o modificar código.

---

# Estructura General

```text
src/
├── components/
├── layouts/
├── pages/
├── styles/
├── utils/
├── data/
├── hooks/
├── lib/
└── types/
```

---

# 1. `/src/components/` - Componentes UI

**Representa:** Todas las piezas visuales reutilizables de la interfaz.

## `/common/` - Componentes Genéricos

Componentes reutilizables utilizados en toda la aplicación.

### Ejemplos

- Button
- Input
- Modal
- Card
- Tooltip

### Trabajo

- Crear componentes base con props flexibles.
- Mantener estilos consistentes.
- Garantizar accesibilidad.
- Favorecer la reutilización.

---

## `/layout/` - Componentes de Estructura

Define la estructura global de las páginas.

### Ejemplos

- Header
- Footer
- Sidebar
- Navigation

### Trabajo

- Construir la estructura principal del sitio.
- Gestionar navegación.
- Implementar diseño responsive.

---

## `/sections/` - Secciones de Contenido

Bloques grandes que conforman las páginas.

### Ejemplos

- Hero
- Services
- About
- Testimonials
- Contact
- Pricing

### Trabajo

- Implementar la lógica propia de cada sección.
- Integrar datos desde `/data`.
- Aplicar animaciones y optimizaciones.

---

## `/ui/` - Componentes Atómicos

Elementos visuales pequeños y altamente reutilizables.

### Ejemplos

- Icons
- Spinner
- Badge
- Label
- Divider
- Animaciones

### Trabajo

- Crear componentes ligeros.
- Favorecer la reutilización.
- Mantener un diseño consistente.

---

# 2. `/src/layouts/` - Layouts Principales

**Representa:** Plantillas que envuelven el contenido de las páginas.

## Archivo principal

```text
Layout.astro
```

## Trabajo

- Definir la estructura HTML base.
- Incluir Header y Footer.
- Gestionar metadatos.
- Configurar scripts globales.
- Aplicar estilos comunes.

### Ejemplo

```text
Layout
│
├── Header
├── Main Content
└── Footer
```

También pueden existir layouts especializados como:

- LandingLayout
- DashboardLayout
- AuthLayout
- ErrorLayout

---

# 3. `/src/pages/` - Rutas y Páginas

**Representa:** Cada URL del sitio web.

## Trabajo

Crear archivos `.astro` o `.tsx` para cada ruta.

### Ejemplos

```text
index.astro        → Inicio

about.astro        → Sobre nosotros

services.astro     → Servicios

contact.astro      → Contacto

404.astro          → Página de error
```

### API

Si el proyecto requiere backend:

```text
pages/api/
```

Ejemplos:

- contact.ts
- newsletter.ts
- auth.ts

---

# 4. `/src/styles/` - Estilos Globales

**Representa:** Configuración visual compartida por toda la aplicación.

## Trabajo

### globals.css

- Reset CSS
- Variables CSS
- Estilos base

### theme.css

- Tema claro
- Tema oscuro
- Paleta de colores

También pueden existir:

- animations.css
- utilities.css

### Objetivo

Centralizar toda la configuración visual del proyecto.

---

# 5. `/src/utils/` - Utilidades y Helpers

**Representa:** Funciones reutilizables sin lógica de interfaz.

## Trabajo

### constants.ts

Configuraciones globales.

Ejemplos:

- URLs
- Configuración
- Variables constantes

### helpers.ts

Funciones auxiliares.

Ejemplos:

- Formatear fechas
- Validar emails
- Formatear números

### seo.ts

Configuración SEO.

- Meta Tags
- Open Graph
- Twitter Cards

### animations.ts

Configuraciones compartidas de animaciones.

---

# 6. `/src/data/` - Datos Estáticos

**Representa:** Información fija utilizada por la aplicación.

## Trabajo

### services.ts

Listado de servicios.

### testimonials.ts

Testimonios de clientes.

### navigation.ts

Menú principal.

### team.ts

Información del equipo.

## Beneficios

- Separar contenido de la interfaz.
- Facilitar modificaciones.
- Mantener componentes limpios.

---

# 7. `/src/hooks/` - Custom Hooks de React

**Representa:** Lógica reutilizable basada en estado y efectos.

## Trabajo

### useScrollAnimation.ts

Animaciones al hacer scroll.

### useIntersectionObserver.ts

Detectar visibilidad de elementos.

### useMediaQuery.ts

Responsive mediante JavaScript.

### useFormValidation.ts

Validación de formularios.

### useCountUp.ts

Animaciones de números.

## Beneficios

- Evitar duplicar lógica.
- Mantener componentes pequeños.
- Mejorar reutilización.

---

# 8. `/src/lib/` - Librerías y Configuraciones

**Representa:** Integraciones con servicios externos.

## Trabajo

### api.ts

Cliente HTTP.

### analytics.ts

Google Analytics.

Hotjar.

Otros servicios de analítica.

### email.ts

Configuración de envío de correos.

### db.ts

Configuración de base de datos (si aplica).

## Objetivo

Centralizar toda la comunicación con servicios externos.

---

# 9. `/src/types/` - Tipos TypeScript

**Representa:** Interfaces y tipos compartidos en toda la aplicación.

## Trabajo

### index.ts

Exportación central de tipos.

### Interfaces

- Service
- Testimonial
- TeamMember
- NavItem

### También definir

- Props de componentes
- Respuestas de API
- Tipos reutilizables

## Beneficios

- Mayor seguridad de tipos.
- Mejor experiencia de desarrollo.
- Refactorizaciones más sencillas.

---

# 10. `/src/components/common/Button/` - Ejemplo de Organización

Un componente complejo debe organizarse de la siguiente forma:

```text
Button/
├── Button.tsx
├── Button.types.ts
├── Button.stories.tsx
└── index.ts
```

## Responsabilidad de cada archivo

### Button.tsx

Componente principal.

### Button.types.ts

Interfaces y tipos específicos.

### Button.stories.tsx

Documentación para Storybook.

### index.ts

Exportación pública.

---

# 📊 Flujo de Trabajo Recomendado

```text
1. /src/types/
   Define las interfaces y tipos.

2. /src/data/
   Agrega el contenido estático.

3. /src/utils/
   Implementa helpers y constantes.

4. /src/components/ui/
   Crea componentes atómicos.

5. /src/components/common/
   Construye componentes reutilizables.

6. /src/components/sections/
   Desarrolla las secciones principales.

7. /src/layouts/
   Construye la estructura de las páginas.

8. /src/pages/
   Implementa las rutas del proyecto.

9. /src/hooks/ y /src/lib/
   Agrega lógica reutilizable e integraciones.
```

---

# 🎯 Resumen Rápido

| Carpeta | Qué contiene | Cuándo trabajar ahí |
|----------|--------------|---------------------|
| `components/` | Componentes visuales | Durante todo el desarrollo |
| `layouts/` | Plantillas de página | Al iniciar la estructura |
| `pages/` | Rutas del sitio | Al crear nuevas páginas |
| `styles/` | Estilos globales | Configuración inicial |
| `utils/` | Funciones reutilizables | Cuando se necesita lógica común |
| `data/` | Contenido estático | Al agregar o modificar información |
| `hooks/` | Lógica React reutilizable | Cuando se requiere estado o efectos |
| `lib/` | Servicios externos | Al integrar APIs y herramientas |
| `types/` | Interfaces y tipos | Antes de comenzar el desarrollo |

---

# Buenas Prácticas

- Mantener una única responsabilidad por carpeta.
- Evitar duplicar componentes o utilidades.
- Reutilizar componentes antes de crear nuevos.
- Centralizar configuraciones compartidas.
- Definir siempre los tipos antes de implementar lógica.
- Mantener una arquitectura consistente entre todo el equipo.

---

# Convención Recomendada

```text
components/
│
├── common/
├── layout/
├── sections/
└── ui/

layouts/
pages/
styles/
utils/
data/
hooks/
lib/
types/
```

---

# Conclusión

Esta estructura busca mantener el proyecto organizado, escalable y fácil de mantener a medida que crece.

Cada carpeta tiene una responsabilidad claramente definida, permitiendo separar la lógica de negocio, la presentación, la configuración y los datos para mejorar la mantenibilidad y la colaboración entre desarrolladores.

---

**Proyecto:** Unyx Solutions

**Arquitectura:** Astro + React + TypeScript + Tailwind CSS

**Última revisión:** Julio 2026