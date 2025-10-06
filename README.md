# Portafolio Personal - DAW

## El Problema y el Módulo FP
Este proyecto es mi portafolio personal desarrollado como parte de mi formación en el Grado Superior de Desarrollo de Aplicaciones Web (DAW). Responde a la necesidad de mostrar mi progreso académico y profesional, desde principiante hasta graduado, creando una presencia web que demuestre las competencias adquiridas en los diferentes módulos del ciclo formativo.

## Tecnologías Clave
El proyecto está construido con **HTML5**, **SASS/SCSS** para los estilos, **JavaScript** para la interactividad, y **Node.js** con **Gulp** como herramienta de automatización de tareas. La arquitectura de estilos sigue la metodología modular con imports y forwards de SASS, permitiendo una organización escalable del código CSS.

## Lecciones Aprendidas (El Crecimiento)
Este proyecto me ha enseñado la importancia de seguir convenciones de código consistentes y la configuración adecuada de herramientas de build. La experiencia con Gulp me mostró cómo automatizar tareas repetitivas como la compilación de SASS, y cómo estructurar un proyecto de forma que sea mantenible y siga estándares profesionales de la industria.

## Comandos Disponibles

- **Desarrollo:** `npm run dev:portfolio` - Inicia el entorno de desarrollo con watch automático
- **Producción:** `npm run build:prod` - Genera la versión optimizada para producción
- **Linting:** `npm run lint:fix` - Verifica y corrige errores de formato

## Estructura del Proyecto

```
Portafolio/
├── src/
│   ├── estilos-sass/       # Archivos SASS (kebab-case) con snake_case interno
│   ├── componentes-js/     # Componentes JavaScript (PascalCase)
│   └── modulos-funcionales/ # Módulos funcionales del portafolio
├── css/                    # CSS compilado (generado automáticamente)
├── proyectos-daw/          # Proyectos organizados por módulos DAW
├── index.html              # Página principal
└── gulpfile.js             # Configuración de automatización
```

---
*Proyecto desarrollado como parte del ciclo formativo de Grado Superior en Desarrollo de Aplicaciones Web*