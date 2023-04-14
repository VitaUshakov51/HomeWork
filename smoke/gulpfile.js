'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('scss', function () {
    return gulp.src('src/styles/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('js', function () {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});


// exports.scss = function () {
//     return gulp.src('src/styles/style.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(cssmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('dist/styles'));
// }


exports.watch = function () {
    gulp.watch('src/styles/*.scss', gulp.series('scss'));
};
gulp.task('default', gulp.parallel('scss', 'js'));