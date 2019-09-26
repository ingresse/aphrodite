'use strict';

const
    gulp   = require('gulp'),
    rename = require('gulp-rename'),
    OUTPUT = './src/scripts/libs/',
    SRC    = [
        './node_modules/credit-card-type/dist/js/app.built.min.js'
    ]
;

/**
 * Copy (one) node modules dependency
 */
gulp.task('node-modules-deps', () => {
    return gulp
        .src(SRC, {
            nodir: true,
            base : './node_modules/',
        })
        .pipe(rename('credit-card-type.min.js'))
        .pipe(gulp.dest(OUTPUT))
    ;
});

