const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('build')
    .pipe(webserver({
        port: 5500,
        open: true,
        liverereload: true,
    }))
}

function monitorarArquivos() {
  watch('src/**/*.html', () => gulp.series('apphtml')())
  watch('src/**/*.scss', () => gulp.series('appscss')())
  watch('src/**/*.js', () => gulp.series('appjs')())
  watch('src/assets/imgs/**/*.html', () => gulp.series('appimg')())
}

module.exports = { monitorarArquivos, servidor }