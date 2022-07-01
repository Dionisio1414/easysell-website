const gulp = require('gulp')
const path = require('path')
const concat = require('gulp-concat')
const plumber = require('gulp-plumber')
const eslint = require('gulp-eslint')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')

const srcs = path.join(path.join(__dirname, '../'), 'app')

const paths = {
  scripts: {
    src: [
      './node_modules/float-sidebar/dist/float-sidebar.js',
      './node_modules/tiny-slider/dist/min/tiny-slider.js',
      './node_modules/smooth-scroll/dist/smooth-scroll.min.js',
      './node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js',
      './node_modules/vanilla-js-dropdown/src/vanilla-js-dropdown.js',
      './node_modules/imask/dist/imask.min.js',
      './node_modules/basiclightbox/dist/basicLightbox.min.js',
      './node_modules/swiper/swiper-bundle.js',
      'app/js/main.js'
    ]
  }
}

module.exports = function script() {
  return gulp.src(paths.scripts.src)
    .pipe(eslint())
    .pipe(eslint.format())
    // .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.min.js'))
    .pipe(terser({
      keep_fnames: true,
      mangle: false
    }))
    // .pipe(sourcemaps.write())
    // .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'))
}

// const webpack = require('webpack-stream')
// const CircularDependencyPlugin = require('circular-dependency-plugin')
// const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const CompressionPlugin = require('compression-webpack-plugin');
// const eslint = require('gulp-eslint')

// module.exports = function script() {
//   return gulp.src('app/js/main_new.js')
//     .pipe(plumber())
//     .pipe(eslint())
//     .pipe(eslint.format())
//     .pipe(webpack({
//       mode: process.env.NODE_ENV,
//       output: {
//         filename: '[name].min.js',
//       },
//       module: {
//         rules: [
//           {
//             test: /\.m?js$/,
//             exclude: /(node_modules|bower_components)/,
//             use: {
//               loader: 'babel-loader',
//               options: {
//                 presets: ['@babel/preset-env']
//               }
//             }
//           }
//         ]
//       },
//       plugins: [
//         new CircularDependencyPlugin(),
//         new DuplicatePackageCheckerPlugin(),
//         new CompressionPlugin({
//           test: /\.js(\?.*)?$/i,
//         })
//       ],
//       optimization: {
//         minimize: true,
//         minimizer: [
//           new UglifyJsPlugin({
//             test: /\.js(\?.*)?$/i,
//             uglifyOptions: {
//               output: {
//                 comments: false,
//               },
//               mangle: true,
//               compress: {},
//               parse: {},
//               toplevel: true,
//             },
//           }),
//         ],
//       },
//     }))
//     .pipe(gulp.dest('build/js'))
// }