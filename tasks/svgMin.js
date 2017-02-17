'use strict';

const gulp   = require('gulp'),
      paths  = require('./paths'),
      svgmin = require('gulp-svgmin');


/**
 * Image minification task
 */
gulp.task('svg-min', () => {
    gulp.src(paths.svg, { base: './src/' })
        .pipe(svgmin())
        .pipe(gulp.dest(paths.dist));

    return gulp.src(paths.svg, { base: './src/' })
        .pipe(svgmin())
        .pipe(gulp.dest(paths.docs));
});
