const { src, dest, watch } = require ('gulp'),
  sass = require('gulp-sass')(require('sass')),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename');

// path
const path = {
  // css path
  css: {
    input: "./source/scss/raven.scss",
    output: "./dest/css",
    watch: "./source/scss/**/*.scss"
  },
  // js path
  js: {}
}


function build () {
  return src(path.css["input"])
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(dest( path.css["output"]) )
}


// tasks
exports.build = build;
exports.watch = function () {
  watch(path.css["watch"], build)
}