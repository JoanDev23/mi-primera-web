import {src, dest, series, watch} from 'gulp';
import * as dartSass from 'sass' //importa todo lo que hay en sass en un archivo dartSass
import gulpSass from 'gulp-sass' //importa lo que hay en sass en un archivo gulp

const sass = gulpSass(dartSass) //gulpSass tendra lo que tenga en dartSass

function css() {
    return src('src/scss/app.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('build/css'));
}

function watchFiles() {
    watch('src/scss/**/*.scss', css);
}

export {css as build};
export {css, watchFiles as dev};