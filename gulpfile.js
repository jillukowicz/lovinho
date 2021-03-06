var gulp = require('gulp');
var zip = require('gulp-zip');
var run = require('gulp-run');
var fs = require('fs');
var cleanDest = require('gulp-clean-dest');
var project = JSON.parse(fs.readFileSync('./package.json'));

var love = '/Applications/love.app/Contents/MacOS/love ';
var distribution = './dist/' + appName() + '.love';

gulp.task('package', function () {
  return gulp.src('./main/**')
    .pipe(cleanDest('dist'))
    .pipe(zip(appName() + '.love'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('exec', function() {
  return run(love + distribution).exec();
});

function appName(){
  return project.name;
}