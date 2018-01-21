const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');


function html () {
  return gulp.src('./*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./build/'))
};

function css () {
  return gulp.src('./stylesheets/main.styl')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css/'));
};

function copy () {
  return gulp.src('./img/*.{png,jpg}')
    .pipe(gulp.dest('./build/img'));
};

function watch() {
  gulp.watch('./*.pug', html);
  gulp.watch(['./stylesheets/main.styl', './blocks/**/*.styl'], css);
};

gulp.task('default', gulp.series(html, copy, css, watch));
