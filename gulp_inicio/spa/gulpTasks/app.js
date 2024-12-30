const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

// Minificar HTML
function apphtml() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'));
}

// Processar e minificar CSS
function appcss() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'));
}

// Transpilar e minificar JS
function appjs() {
    return gulp.src('src/assets/js/**/*.js') // Corrigido o caminho
        .pipe(babel({ presets: ['@babel/env'] })) // Usando preset correto
        .pipe(uglify())
        .pipe(concat('app.min.js')) // Corrigido o nome do arquivo
        .pipe(gulp.dest('build/assets/js')); // Corrigido o caminho de destino
}

// Copiar imagens
function appimg() {
    return gulp.src('src/assets/img/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'));
}

gulp.task('apphtml', apphtml)
module.exports = {
    apphtml, appcss, appjs, appimg
};
