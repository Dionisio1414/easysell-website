const gulp = require('gulp')
const svgstore = require('gulp-svgstore')
const rename = require('gulp-rename')

module.exports = function svgSprite() {
  return gulp.src('app/images/svg/*.svg')
    .pipe(svgstore())
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/images/svg/sprite'))
}