var gulp = require('gulp'),
  pug = require('gulp-pug'),
  plumber = require('gulp-plumber'),
  stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var ghPages = require('gulp-gh-pages');


gulp.task('html', function() {
  return gulp.src('./*.jade')
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('css', function () {
  return gulp.src('./stylesheets/main.styl')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('copy', function() {
   return gulp.src('./img/*.{png,jpg}')
   .pipe(gulp.dest('./build/img'));
});

gulp.task('watch', function() {
  gulp.watch('./*.jade', ['html']);
  gulp.watch(['./stylesheets/main.styl', './blocks/**/*.styl'], ['css']);
});

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['html', 'copy', 'css', 'watch'], function() {
  // place code for your default task here
});
