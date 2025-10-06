const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarSass() {
  return gulp.src('./src/estilos-sass/styles.scss') // Solo el archivo principal
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css')); // Carpeta de destino para el CSS compilado
}

// Exportar la tarea para poder ejecutarla con el comando 'gulp sass'
exports.sass = compilarSass;

// Tarea 'watch' para que Gulp observe los cambios en los archivos
function watchArchivos() {
  gulp.watch('./src/estilos-sass/**/*.scss', compilarSass);
}

// Tarea 'default' para que se ejecute al teclear solo 'gulp'
exports.default = watchArchivos;