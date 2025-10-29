import {src, dest, series, watch} from 'gulp';
import * as dartSass from 'sass' //importa todo lo que hay en sass en un archivo dartSass
import gulpSass from 'gulp-sass' //importa lo que hay en sass en un archivo gulp
import cleanCSS from 'gulp-clean-css'; //paquete de minificacion
import rename from 'gulp-rename'; //para renombrar a .min

const sass = gulpSass(dartSass) //gulpSass tendra lo que tenga en dartSass

// Tarea para compilar SCSS a CSS
function css() {
    return src('src/scss/app.scss')

        //compila SASS a CSS
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))

        //MINIFICAR Y OPTIMIZAR
        .pipe(cleanCSS({compatibility: 'ie11' }))

        //RENOMBRAR  (genera app.min.css)
        .pipe(rename({
            suffix: '.min'
        }))

        //DESTINO: guarda el archivo final
        .pipe(dest('build/css'));
}

// Tarea para observar cambios en archivos SCSS
function watchFiles() {
    watch('src/scss/**/*.scss', css);
}

export {css as build};
export {css, watchFiles as dev};