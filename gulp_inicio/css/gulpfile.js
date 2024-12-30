const { parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function TransformacaoCSS() {
    return gulp.src('src/sass/index.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true })) 
        .pipe(concat('estilo.mim.css'))
        .pipe(gulp.dest('build/css')); 
}

function copiarHtml() {
    return gulp('src/index.html')
    .pipe(gulp.dest('build'))
}

exports.default = parallel(TransformacaoCSS, html);