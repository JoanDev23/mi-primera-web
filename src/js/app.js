// Archivo principal de JavaScript - Portafolio DAW
// Inicializa todos los módulos y componentes del portafolio

// Importar componentes principales (cuando uses módulos ES6)
import { NavegacionHeader } from './navegacion-header/NavegacionHeader.js';
// import { GestorProyectos } from './modulos-funcionales/GestorProyectos.js';

// Función principal que inicializa el portafolio
const inicializarPortafolio = () => {
    console.log('🚀 Iniciando Portafolio DAW...');
    
    // Inicializar componentes cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', () => {
        // Aquí se inicializarán todos los componentes
        console.log('✅ DOM cargado - Componentes listos para inicializar');
        
        // Inicializar componente de navegación - ahora disponible
        if (typeof NavegacionHeader !== 'undefined') {
            NavegacionHeader.init();
        }
        
        // GestorProyectos.cargarProyectos(); // Pendiente de implementar
    });
};

// Iniciar la aplicación
inicializarPortafolio();