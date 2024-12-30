const { series } = require("gulp")
const gulp = require("gulp")
const ts = require("gulp-types")
const tsproject = ts.createProjects('tsconfig.json')

function transformaçaoTS() {
    return tsproject.src()
    .pipe(tsproject)
    .pipe(gulp.dest('build'))
}

exports.default = series(transformaçaoTS)