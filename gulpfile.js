var gulp = require('gulp'),
  jade = require('gulp-jade'),
  plumber = require('gulp-plumber'),
  stylus = require('gulp-stylus');


gulp.task('html', function() {
  return gulp.src('./*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('css', function () {
  return gulp.src('./stylesheets/main.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./*.jade', ['html']);
  gulp.watch(['./stylesheets/main.styl', './blocks/**/*.styl'], ['css']);
});


gulp.task('default', ['html', 'css', 'watch'], function() {
  // place code for your default task here
});
