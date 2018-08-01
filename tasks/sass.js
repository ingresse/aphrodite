'use strict';

const
    gulp       = require('gulp'),
    paths      = require('./paths'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    prefixer   = require('gulp-autoprefixer'),
    nano       = require('gulp-cssnano'),
    base64     = require('gulp-base64'),
    DEST       = './src/assets'
;


/**
 * Sass compiler
 */
gulp.task('sass', () => {
    var browserSync = require('browser-sync').get('aphrodite');

    return gulp.src(paths.sass)
        .pipe(sass({
            options: {
                sassDir: './src/assets/sass',
            }
        })
        .on('error', sass.logError))
        .pipe(base64({
            debug  : false,
            baseDir: './src',
            exclude: [
                'VenusGlyphs-Regular.svg',
                'VenusGlyphs-Regular.eot',
                'VenusGlyphs-Regular.ttf',
                'VenusGlyphs-Regular.woff',
                'VenusGlyphs-Regular.woff2',
            ],
        }))
        .pipe(sourcemaps.write())
        .pipe(prefixer())
        .pipe(nano({ safe: true }))
        .pipe(gulp.dest(DEST))
        .pipe(browserSync.stream());
});
