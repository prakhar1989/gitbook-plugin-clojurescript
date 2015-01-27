var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    rename    = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');


gulp.task('default', function() {
  gulp.src('book/himera.css')
      .pipe(minifyCSS())
      .pipe(rename('himera.min.css'))
      .pipe(gulp.dest('book'))
});
