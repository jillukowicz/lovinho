var gulp = require('gulp');
var zip = require('gulp-zip');
var fs = require('fs');
var cleanDest = require('gulp-clean-dest');
var project = JSON.parse(fs.readFileSync('./package.json'));


gulp.task('package', function () {
  return gulp.src('./love/**')
    .pipe(cleanDest('dist'))
    .pipe(zip(appName() + '.zip'))
    .pipe(gulp.dest('./dist'));
});


function appName(){
  return project.name;
}