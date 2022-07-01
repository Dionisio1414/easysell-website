
const gulp = require('gulp')

const imageMinify = require('./imageMinify')
const svgSprite = require('./svgSprite')
const styles = require('./styles')
const pug2html = require('./pug2html')
const script = require('./script')
const copyDependencies = require('./copyDependencies')

const server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true,
    })

    gulp.watch('app/img/*/*.{gif,png,jpg,svg,webp,mp4}', gulp.series(imageMinify, readyReload))
    gulp.watch('app/img/sprite/*.svg', gulp.series(svgSprite, readyReload))
    gulp.watch('app/styles/**/*.sass', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('app/js/**/*.js', gulp.series(script, readyReload))
    gulp.watch('app/pages/**/*.pug', gulp.series(pug2html, readyReload))

    gulp.watch('package.json', gulp.series(copyDependencies, readyReload))

    return cb()
}