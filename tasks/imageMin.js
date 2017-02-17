'use strict';

const gulp     = require('gulp'),
      paths    = require('./paths'),
      imagemin = require('gulp-imagemin');


/**
 * Image minification task
 */
gulp.task('image-min', () => {
    gulp.src(paths.images, { base: './src/' })
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest(paths.dist));

    return gulp.src(paths.images, { base: './src/' })
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest(paths.docs));
});
