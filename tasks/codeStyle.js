'use strict';

const gulp  = require('gulp'),
      paths = require('./paths'),
      jscs  = require('gulp-jscs'),
      SRC   = paths.js.src;

/**
 * Check code style
 */
gulp.task('code-style', () => {
    return gulp.src(SRC)
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'));
});
