'use strict';

//No need to install gulp modules individually
var gulp = require('gulp');
var sass = require('gulp-sass');
//var sourcemap = require('gulp-sourcemaps');
//var minifyCSS = require('gulp-clean-css');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
//var changed = require('gulp-changed');

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

//Compile CSS Code
//1. Call Gulp Source to get scss Code
//2. Call pipe method to process scss code into css
//3. Output processed code into SCSS_DEST file

/*
gulp.task('compile_scss', function(){

  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({ suffix: '.min' }))
  .pipe(change(SCS_DEST))
  .pipe(gulp.dest(SCSS_DEST));

});
*/
//Detect changes in SCSS

/*
gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC, ['compile_scss'])
});
*/

//Run tasks
gulp.task('default', ['watch_scss']);
