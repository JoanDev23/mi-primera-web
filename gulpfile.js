import {src, dest, watch, series, parallel} from 'gulp' // src permite acceder a ciertos archivos del gulp y con el dest permitira crear el destino. series permite ejecutar las funciones en orden y parallel permite ejecutar las funciones al mismo tiempo
import * as dartSass from 'sass' //importa todo lo que hay en sass en un archivo dartSass
import gulpSass from 'gulp-sass' //importa lo que hay en sass en un archivo gulp

const sass = gulpSass(dartSass) //gulpSass tendra lo que tenga en dartSass

export function js(done){ //funcion js
    src("src/js/app.js")
    .pipe(dest("build/js")) //src es la carpeta de origen y dest es la carpeta de destino
    done(); //sirve para deneter la funcion
}

export function css(done){
    src("src/estilos-sass/styles.scss", { sourcemaps: true }) //src es la carpeta de origen y el sourcemaps es para que se genere un mapa de los archivos css
        .pipe(sass({outputStyle: 'compact'}).on("error", sass.logError)) //convierte sass a css / .on("error", sass.logError)). permite mostrar errores en la terminal
        .pipe(dest("build/css", {sourcemaps: true})) //destino de la carpeta build/css y el sourcemaps se guardara en la misma carpeta

    done(); //sirve para deneter la funcion
}

export function dev(){
    watch("src/estilos-sass/**/*.scss", css) //escucha todos los cambios en los archivos .scss en la carpeta src
    watch("src/js/**/*.js", js) //escucha todos los cambios en los archivos .js en la carpeta src
}

export default series(js, css, dev) //exporta la funcion por defecto y ejecuta las funciones js, css y dev en ese orden