'use strict';

const gulp    = require('gulp'),
      paths   = require('./paths'),
      jshint  = require('gulp-jshint'),
      stylish = require('jshint-stylish'),
      SRC     = paths.js.src;


/**
 * JSHint task
 */
gulp.task('js-hint', () => {
    return gulp.src(SRC)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});
