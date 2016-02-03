var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var connect = require('gulp-connect');
var mocha = require('gulp-mocha');
var util = require('gulp-util');
var uglifyify = require('uglifyify');
var sass = require('gulp-sass');


gulp.task('test', function () {
    return gulp.src(['src/**/*Spec.js'], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', util.log);
});

function compile(watch) {
  var bundler = watchify(
                  browserify(
                    './src/js/entry.js',
                    { debug: true }
                  ).transform(
                    babel,
                    {
                      presets: ["es2015"]
                    }
                  ).transform('uglifyify')
                );

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'))
      .pipe(connect.reload());
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      gulp.start('test');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('connect', function() {
  connect.server({
    port: '3000',
    livereload: true
  });
});

gulp.task('sass', function() {
  gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());;
});


gulp.task('default', ['watch', 'sass', 'connect']);
