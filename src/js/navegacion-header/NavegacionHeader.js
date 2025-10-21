// Componente de navegación principal del portafolio
// Maneja la interactividad del header y la navegación responsiva

const NavegacionHeader = (() => {
    // Variables privadas usando camelCase según reglas AGENTS.md
    let menuAbierto = false;
    let elementoHeader = null;
    
    // Función de inicialización - usa función flecha según reglas
    const init = () => {
        console.log('🧭 Inicializando NavegacionHeader...');
        
        // Obtenemos el elemento del DOM
        elementoHeader = document.querySelector('.header');
        if (!elementoHeader) {
            console.warn('⚠️ No se encontró elemento .header');
            return;
        }
        
        // Configuramos eventos - explica WHY necesitamos estos eventos
        configurarEventos();
        configurarResponsividad();
    };
    
    // Configurar eventos de interacción - función flecha según reglas
    const configurarEventos = () => {
        const botonMenu = elementoHeader.querySelector('.boton-menu-movil');
        
        // Evento click para menú móvil (cuando se implemente)
        if (botonMenu) {
            botonMenu.addEventListener('click', alternarMenu);
        }
        
        // Resaltado de página actual - mejora la UX mostrando dónde está el usuario
        resaltarPaginaActual();
    };
    
    // Alternar menú móvil - función flecha según reglas
    const alternarMenu = () => {
        menuAbierto = !menuAbierto;
        const navegacion = elementoHeader.querySelector('.barra-navegacion');
        
        // Toggle clase para animación CSS
        navegacion.classList.toggle('menu-abierto', menuAbierto);
        
        // Actualizar aria-expanded para accesibilidad
        const boton = elementoHeader.querySelector('.boton-menu-movil');
        if (boton) {
            boton.setAttribute('aria-expanded', menuAbierto.toString());
        }
    };
    
    // Resaltar página actual - mejora la navegación del usuario
    const resaltarPaginaActual = () => {
        const paginaActual = window.location.pathname.split('/').pop() || 'index.html';
        const enlaces = elementoHeader.querySelectorAll('.barra-navegacion a');
        
        // Función flecha para forEach según reglas
        enlaces.forEach(enlace => {
            const href = enlace.getAttribute('href');
            if (href === paginaActual) {
                enlace.classList.add('activo');
            } else {
                enlace.classList.remove('activo');
            }
        });
    };
    
    // Configurar comportamiento responsivo
    const configurarResponsividad = () => {
        // Escuchar cambios de tamaño de ventana para ajustar navegación
        window.addEventListener('resize', () => {
            // Cerrar menú móvil si la pantalla se hace más grande
            if (window.innerWidth > 768 && menuAbierto) {
                alternarMenu();
            }
        });
    };
    
    // API pública del componente - patrón módulo según mejores prácticas
    return {
        init,
        alternarMenu,
        resaltarPaginaActual
    };
})();

// Exportar para uso con módulos ES6 (cuando se implemente)
// export { NavegacionHeader };