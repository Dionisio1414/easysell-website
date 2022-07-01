const gulp = require('gulp')

module.exports = function fonts() {
  return gulp.src('app/fonts/**/*.{woff,woff2}')
    .pipe(gulp.dest('build/fonts'))
}