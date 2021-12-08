'use strict';

const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();

// Path
const path = {
  www: {
    style: 'dist/style/',
    html: 'dist/*.html'
  },
  src: {
    style: 'src/styles/*.scss'
  },
  watch: {
    srcStyle: 'src/styles/**/*.scss',
    buildStyle: 'dist/style/*.css',
    html: 'dist/*.html',
    js: 'dist/scripts/**/*.js'
  }
}

// Compilation less
function styles() {
  return src(path.src.style)
    .pipe(sourcemaps.init())
    .pipe(sass()
      .on('error', notify.onError({
        message: '<%= error.fileName %>' +
          '\nLine <%= error.lineNumber %>:' +
          '\n<%= error.message %>',
        title: '<%= error.plugin %>'
      }))
    )
    .pipe(sourcemaps.write())
    .pipe(dest(path.www.style));
}
exports.styles = styles;

function serve() {
  browserSync.init({
    server: "./dist"
  });

  watch([
    path.watch.srcStyle
  ], styles);

  watch([
    path.watch.html,
    path.watch.buildStyle,
    path.watch.js,
  ]).on('change', reload);
}

function reload() {
  browserSync.reload();
}

exports.default = series(
  parallel(styles),
  serve
);
