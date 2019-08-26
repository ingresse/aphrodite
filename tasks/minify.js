'use strict';

const gulp        = require('gulp');
const paths       = require('./paths');
const usemin      = require('gulp-usemin');
const uglify      = require('gulp-uglify');
const annotate    = require('gulp-ng-annotate');
const angularSort = require('gulp-angular-filesort');

/**
 * Minify JS files
 */
gulp.task('minify-js', () => {
    return gulp.src(paths.index)
        .pipe(usemin({
            css   : [],
            js    : [ angularSort, annotate, uglify ],
            vendor: [ uglify ],
        }))
        .pipe(gulp.dest(paths.dist))
        .pipe(gulp.dest(paths.docs))
    ;
});
