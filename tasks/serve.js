'use strict';

const gulp  = require('gulp'),
      paths = require('./paths'),
      browserSync = require('browser-sync').create('aphrodite'),
      SRC   = './src';


/**
 * BrowserSync task
 */
gulp.task('serve', () => {
    browserSync.init({
        port: 9000,
        https: true,
        notify: false,
        injectChanges: true,
        minify: false,
        open: false,
        ghostMode: {
            clicks: false,
            forms: false,
            scroll: false,
            code: true
        },
        server: {
            baseDir: SRC
        }
    });
});

/**
 * BrowserSync task
 */
gulp.task('serve:dist', ['build'], () => {
    browserSync.init({
        port: 9000,
        https: true,
        notify: false,
        injectChanges: true,
        minify: false,
        open: false,
        server: {
            baseDir: paths.docs
        }
    });
});
