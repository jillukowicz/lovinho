var gulp = require('gulp');
var zip = require('gulp-zip');
var fs = require('fs');
var run = require('gulp-run');
var cleanDest = require('gulp-clean-dest');
var project = JSON.parse(fs.readFileSync('./package.json'));

var love = '/Applications/main.app/Contents/MacOS/love';

gulp.task('package', function () {
  return gulp.src('./main/**')
    .pipe(cleanDest('dist'))
    .pipe(zip(appName() + '.love'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('exec', function() {
  return run(love + ' ' + './dist/' + appName() + '.love').exec();
});

function appName(){
  return project.name;
}