/// <binding AfterBuild='copy, min' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify');

var paths = {
    webroot:"./wwwroot/"
}

paths.bootstrapCss = "./bower_components/bootstrap/dist/css/bootstrap.css";

paths.bootstrapJs = "./bower_components/bootstrap/dist/js/bootstrap.js";
paths.jqueryJs = "./bower_components/jquery/dist/jquery.js";

paths.cssDest = paths.webroot + "css";
paths.jsDest = paths.webroot + "js";

gulp.task("min:js", function () {
    return gulp.src([paths.jqueryJs, paths.bootstrapJs])
            .pipe(concat(paths.jsDest + "/min/site.min.js"))
            .pipe(uglify())
            .pipe(gulp.dest("."));
});

gulp.task("copy:js", function () {
    return gulp.src([paths.jqueryJs, paths.bootstrapJs])
            .pipe(gulp.dest(paths.jsDest));
});


//gulp.task('default', function () {
//    // place code for your default task here
//});

gulp.task("min", ["min:js"]);
gulp.task("copy", ["copy:js"]);

gulp.task("default", ["copy:js"]);