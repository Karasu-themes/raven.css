const { src, dest, watch, series } = require ('gulp'),
  sass = require('gulp-sass')(require('sass')),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  rollup = require('gulp-better-rollup'),
  babel = require('@rollup/plugin-babel');

// path
const path = {
  // css path
  css: {
    input: "./source/scss/raven.scss",
    output: "./dest/css",
    watch: "./source/scss/**/*.scss"
  },
  // js path
  js: {
    input: {
      core: "./source/js/raven.core.js",
    },
    output: "./dest/js",
    watch: "./source/js/**/*.js"
  }
}


function css () {
  return src(path.css["input"])
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(dest( path.css["output"]) )
}

function js () {
  return src(path.js["input"].core)
  .pipe(rollup({
    plugins: [babel]
  }, {
    format: 'iife',
    name: "raven",
    banner: `
/*!
* RavenCSS -  v1.1.0
* Copyright 2020 © Karasu themes
* Developed by Marcelo (github.com/MarceloTLD)
* MIT License (//github.com/Karasu-themes/karasu/blob/master/LICENSE)
*/
    `
  }))
  .pipe(dest( path.js["output"]) )
}

// tasks
exports.build = series(css, js);
exports.watch = function () {
  watch([path.css["watch"], path.js["watch"]], series(css, js))
}