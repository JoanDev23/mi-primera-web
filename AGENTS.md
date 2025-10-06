# AGENTS.md - Guía de Portafolio DAW

Este archivo contiene las reglas y el contexto específico para mi proyecto de portafolio, que evoluciona junto con mis estudios de Grado Superior de DAW (Desarrollo de Aplicaciones Web).

## 1. Contexto Académico y Profesional (Prioridad Alta)

**OBJETIVO PRINCIPAL:** Mostrar mi progreso desde principiante hasta graduado de FP Superior.

**FOCO:** Priorizar la calidad del código y la implementación de las tecnologías vistas en clase.

* **Ruta de Estudios:** La IA debe asumir que estoy completando el Grado Superior de DAW. Prioriza el contexto y las prácticas de **Symfony**, **React**, o **servicios REST/API** (según el módulo actual).
* **Identificación de Proyectos:** Cada proyecto visible debe tener un archivo `README.md` que especifique el módulo o la tecnología FP a la que pertenece (ej: "Módulo 4: Desarrollo Web en Entorno Cliente").

## 2. Convenciones de Código y Estilo

### A. Estructura y Archivos

* **Nombres de Carpetas:** Las carpetas de alto nivel deben usar **'kebab-case'** (ej: `mis-proyectos-daw`).
* **Archivos de Componentes (JS/TS/PHP):** El nombre de los archivos debe usar **'PascalCase'** (ej: `UsuarioCard.jsx` o `ControladorUsuario.php`).
* **Archivos SASS/SCSS:** Deben usar **'snake_case'** (ej: `_componente_header.scss`).

### B. Estilo de Código (JavaScript / TypeScript)

* **Identificadores:** Usar **'camelCase'** para variables y funciones.
* **Funciones Flecha:** El agente debe usar preferentemente funciones flecha para todos los componentes de React o *callbacks* en JS.
* **Comentarios:** Todo bloque de código complejo **debe** llevar un comentario de una línea que explique su propósito (*"why"*), no solo lo que hace (*"what"*).

## 3. Flujo de Trabajo y Comandos Esenciales

* **Comando de Desarrollo:** El comando principal para iniciar el entorno local siempre es **`npm run dev:portfolio`**. La IA debe usar este comando para cualquier prueba local.
* **Comando de Publicación (Deploy):** El comando final para generar la versión pública del portafolio es **`npm run build:prod`**.
* **Herramienta de Estilo:** El agente debe verificar que no haya errores de formato ejecutando **`npm run lint:fix`** antes de proponer cualquier cambio.

## 4. Estrategia de Contenido (Copy para Principiantes)

### A. Títulos de Commits (Git)

Los mensajes de commit deben ser **claros y orientados a la acción** (estándar de la industria).

* `feat`: Nuevas funcionalidades (ej: `feat: Añadir sección de contacto con validación básica`).
* `fix`: Solución de errores (ej: `fix: Corregir error de responsive en móviles`).
* `refactor`: Mejoras de código sin cambio de funcionalidad (ej: `refactor: Limpiar la lógica del hook de estado en proyectos`).

### B. Descripciones de Proyectos (README.md)

Cuando se solicite una descripción de un proyecto, la IA debe usar el siguiente **Formato de Tres Párrafos**:

1.  **El Problema y el Módulo FP:** *Describir brevemente qué hace el proyecto y a qué reto o módulo del DAW responde.*
2.  **Tecnologías Clave:** *Listar las tecnologías principales utilizadas (ej: "Usado con PHP, Symfony 6, y Twig como plantilla")*
3.  **Lecciones Aprendidas (El Crecimiento):** *Destacar la lección más importante aprendida al crear el proyecto (ej: "Este proyecto me enseñó la importancia del ORM en el acceso a bases de datos")*.