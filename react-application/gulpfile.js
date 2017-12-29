'use strict';

//No need to install gulp modules individually
var gulp = require('gulp');
var sass = require('gulp-sass');

///////////////
// - SCS/CSS
//////////////

var SCSS_SRC = "./src/Assets/scss/**/*.scss";
var SCSS_DEST = "./src/Assets/css";

gulp.task('sass', function() {
  return gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(SCSS_DEST));
});

gulp.task('watch_scss', function() {
  gulp.watch(SCSS_SRC, ['sass']);
});

//Run tasks
gulp.task('default', ['watch_scss']);
