var gulp = require('gulp');
var browserify = require('browserify');


gulp.task('bundle-js', function() {
  gulp.src('./src/js/app.js')
    .pipe(browserify())
    .pipe(gulp.dest('./dist'));
});
