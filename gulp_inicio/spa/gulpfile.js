const {series, parallel} = require('gulp')
const gulp = require('gulp')

const {apphtml, appcss, appjs, appimg } = require('gulpTasks/app.js')
const {depscss, depsfont } = require('gulpTasks/deps.js')
const {monitorarArquivos, servidor } = require('gulpTasks/servidor.js')

module.exports.default = series (
    parallel(
        series(apphtml, appcss, appjs, appimg),
        series(depscss, depsfont)
    ),
    servidor,
    monitorarArquivos
)
