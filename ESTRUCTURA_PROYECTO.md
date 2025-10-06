# Guía de Estructura de Archivos - Portafolio DAW

## 📁 Estructura Completa del Proyecto

```
Portafolio/
├── 📁 src/                              # Carpeta fuente
│   ├── 📁 estilos-sass/                # Estilos SASS (kebab-case)
│   │   ├── 📁 base/                    # Estilos base
│   │   │   ├── _reset_global.scss      # Reset CSS (snake_case)
│   │   │   ├── _tipografia_base.scss   # Tipografía base
│   │   │   └── _index.scss             # Index del módulo
│   │   ├── 📁 componentes/             # Componentes UI
│   │   │   ├── _botones_principales.scss
│   │   │   ├── _tarjetas_proyecto.scss
│   │   │   ├── _navegacion_header.scss
│   │   │   └── _index.scss
│   │   ├── 📁 layout/                  # Layout y estructura
│   │   │   ├── _contenedor_principal.scss
│   │   │   ├── _grid_proyectos.scss
│   │   │   ├── _footer_portafolio.scss
│   │   │   └── _index.scss
│   │   ├── 📁 variables/               # Variables globales
│   │   │   ├── _colores_variables.scss
│   │   │   ├── _espaciado_variables.scss
│   │   │   ├── _breakpoints_responsive.scss
│   │   │   └── _index.scss
│   │   ├── 📁 paginas/                 # Estilos específicos de páginas
│   │   │   ├── _inicio_portada.scss
│   │   │   ├── _sobre_mi_seccion.scss
│   │   │   ├── _proyectos_galeria.scss
│   │   │   └── _index.scss
│   │   └── styles.scss                 # Archivo principal SASS
│   ├── 📁 componentes-js/              # Componentes JavaScript (kebab-case)
│   │   ├── NavegacionHeader.js         # Componente navegación (PascalCase)
│   │   ├── TarjetaProyecto.js         # Componente tarjeta
│   │   ├── FormularioContacto.js      # Componente formulario
│   │   └── GaleriaImagenes.js         # Componente galería
│   ├── 📁 modulos-funcionales/         # Módulos funcionales
│   │   ├── ManejadorTemas.js          # Cambio de tema claro/oscuro
│   │   ├── ValidadorFormularios.js    # Validación de formularios
│   │   ├── AnimacionesScroll.js       # Animaciones al hacer scroll
│   │   └── GestorProyectos.js         # Gestor de datos de proyectos
│   ├── 📁 assets/                      # Recursos estáticos
│   │   ├── 📁 imagenes/
│   │   ├── 📁 iconos/
│   │   └── 📁 documentos/
│   └── main.js                         # Archivo JavaScript principal
├── 📁 css/                            # CSS compilado (generado automáticamente)
│   └── styles.css
├── index.html                         # Página principal (en raíz)
├── sobre-mi.html                      # Página sobre mí (en raíz)
├── proyectos.html                     # Página de proyectos (en raíz)
├── contacto.html                      # Página de contacto (en raíz)
├── 📁 proyectos-daw/                  # Proyectos específicos del DAW
│   ├── 📁 modulo-1-sistemas/          # Proyectos por módulo
│   ├── 📁 modulo-2-bases-datos/
│   ├── 📁 modulo-3-programacion/
│   └── 📁 modulo-4-entorno-cliente/
├── package.json
├── gulpfile.js
├── README.md
├── AGENTS.md
└── ESTRUCTURA_PROYECTO.md             # Este archivo
```

## 🔍 **Aclaración Importante sobre Estructura:**

- **Archivos HTML:** Van en la **raíz** del proyecto (`index.html`, `sobre-mi.html`)
- **Estilos de páginas:** Van en `src/estilos-sass/paginas/` (solo archivos `.scss`)

Esto significa:
- `index.html` → raíz del proyecto
- `_inicio_portada.scss` → `src/estilos-sass/paginas/`

## 🎯 Reglas de Nomenclatura por Tipo de Archivo

### 📁 **Carpetas (kebab-case)**
- `estilos-sass/`
- `componentes-js/` 
- `modulos-funcionales/`
- `proyectos-daw/`
- `modulo-1-sistemas/`

### 🎨 **Archivos SCSS (snake_case)**
- `_colores_variables.scss`
- `_tipografia_base.scss`
- `_botones_principales.scss`
- `_navegacion_header.scss`
- `_tarjetas_proyecto.scss`
- `_contenedor_principal.scss`

### ⚙️ **Archivos JavaScript/TypeScript (PascalCase para componentes)**
- `NavegacionHeader.js`
- `TarjetaProyecto.js`
- `FormularioContacto.js`
- `ManejadorTemas.js`
- `ValidadorFormularios.js`

### 🌐 **Archivos HTML (kebab-case)**
- `index.html`
- `sobre-mi.html`
- `proyectos.html`
- `contacto.html`

## 📝 Convenciones de Código

### JavaScript
```javascript
// Variables y funciones: camelCase
const nombreUsuario = 'Joan';
const obtenerDatosProyecto = () => { /* ... */ };

// Componentes: Funciones flecha preferentemente
const TarjetaProyecto = ({ titulo, descripcion }) => {
  // Comentario explicando POR QUÉ esta lógica es necesaria
  return `<div class="tarjeta">${titulo}</div>`;
};
```

### SCSS
```scss
// Comentarios explicando el propósito, no solo lo que hace
// Utilizamos variables para mantener consistencia visual en todo el portafolio
$color-primario: #007bff;
$espaciado-base: 1rem;

// Nombres de clases usando kebab-case
.tarjeta-proyecto {
  // Usamos variables para facilitar futuros cambios de tema
  background-color: $color-fondo;
  padding: $espaciado-base;
}
```

## 🚀 Comandos de Trabajo

```bash
# Desarrollo (SIEMPRE usar este comando)
npm run dev:portfolio

# Producción
npm run build:prod

# Linting (ejecutar antes de commit)
npm run lint:fix
```

## 📋 Checklist para Nuevos Archivos

Antes de crear cualquier archivo nuevo:

1. ✅ ¿El nombre sigue la convención correcta?
2. ✅ ¿Está en la carpeta correcta?
3. ✅ ¿Tiene comentarios explicando el "por qué"?
4. ✅ ¿He ejecutado `npm run lint:fix`?
5. ✅ ¿El commit sigue la convención (feat/fix/refactor)?

---
*Estructura basada en las reglas definidas en AGENTS.md*