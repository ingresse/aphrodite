'use strict';

const gulp    = require('gulp'),
    paths   = require('./paths'),
    wiredep = require('wiredep').stream,
    SRC     = paths.index;


/**
 * Wiredep task
 */
gulp.task('wiredep', ['ng-template'], () => {
    return gulp.src(SRC)
        .pipe(wiredep());
});

