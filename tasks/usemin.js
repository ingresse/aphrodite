'use strict';

const gulp     = require('gulp'),
      paths    = require('./paths'),
      usemin   = require('gulp-usemin'),
      uglify   = require('gulp-uglify'),
      annotate = require('gulp-ng-annotate'),
      angularSort = require('gulp-angular-filesort'),
      nano     = require('gulp-cssnano');


/**
 * Minify js and css files
 */
gulp.task('usemin', ['ng-template'], () => {
    gulp.src(paths.index)
        .pipe(usemin({
            css: [],
            js: [angularSort, annotate],
        }))
        .pipe(gulp.dest(paths.dist));

    gulp.src(paths.index)
        .pipe(usemin({
            css: [],
            js: [angularSort, annotate, uglify],
            vendor: [uglify],
        }))
        .pipe(gulp.dest(paths.dist));

    return gulp.src(paths.index)
        .pipe(usemin({
            css: [],
            js: [angularSort, annotate, uglify],
            vendor: [uglify],
        }))
        .pipe(gulp.dest(paths.docs));
});
