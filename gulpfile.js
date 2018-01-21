const gulp = require('gulp'),
  pug = require('gulp-pug'),
  plumber = require('gulp-plumber'),
  stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const ghPages = require('gulp-gh-pages');


function html () {
  return gulp.src('./*.jade')
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
  gulp.watch('./*.jade', html);
  gulp.watch(['./stylesheets/main.styl', './blocks/**/*.styl'], css);
};

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task('default', gulp.series(html, copy, css, watch));
