'use strict';

const gulp       = require('gulp'),
      paths      = require('./paths'),
      htmlmin    = require('gulp-htmlmin'),
      ngtemplate = require('gulp-ng-template'),
      DEST       = './src/scripts/';


/**
 * Compile HTML templates with $templateCache task
 */
gulp.task('ng-template', () => {
    var browserSync = require('browser-sync').get('aphrodite');

    gulp.src(paths.htmlDocs)
        .pipe(htmlmin({
            collapseWhitespace       : false,
            conservativeCollapse     : true,
            collapseBooleanAttributes: true,
            removeCommentsFromCDATA  : true,
            removeOptionalTags       : true
        }))
        .pipe(ngtemplate({
            moduleName: 'aphrodite-docs',
            standalone: false,
            prefix    : 'docs/',
            filePath  : 'DocsViews.js'
        }))
        .pipe(gulp.dest(DEST))
        .pipe(browserSync.stream());

    return gulp.src(paths.html)
        .pipe(htmlmin({
            collapseWhitespace       : true,
            conservativeCollapse     : true,
            collapseBooleanAttributes: true,
            removeCommentsFromCDATA  : true,
            removeOptionalTags       : true
        }))
        .pipe(ngtemplate({
            moduleName: 'aphrodite',
            standalone: false,
            prefix    : '',
            filePath  : 'Views.js'
        }))
        .pipe(gulp.dest(DEST))
        .pipe(browserSync.stream());
});
