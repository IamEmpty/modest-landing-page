var gulp = require('gulp'),
  jade = require('gulp-jade'),
  stylus = require('gulp-stylus');


gulp.task('html', function() {

  gulp.src('./*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('css', function () {
  gulp.src('./stylesheets/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./*.jade', ['html']);
  gulp.watch('./stylesheets/main.styl', ['css']);
});


gulp.task('default', ['html', 'css', 'watch'], function() {
  // place code for your default task here
});
