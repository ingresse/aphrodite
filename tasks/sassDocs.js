'use strict';

const gulp  = require('gulp'),
      paths = require('./paths'),
      sass  = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      prefixer = require('gulp-autoprefixer'),
      nano  = require('gulp-cssnano'),
      DEST  = './src/assets';


/**
 * Sass compiler
 */
gulp.task('sassDocs', () => {
    var browserSync = require('browser-sync').get('aphrodite');

    return gulp.src(paths.sassDoc)
        .pipe(sass({
            options: {
                sassDir: './src/assets/sass/docs',
            }
        })
        .on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(prefixer())
        .pipe(nano({ safe: true }))
        .pipe(gulp.dest(DEST))
        .pipe(browserSync.stream());
});
