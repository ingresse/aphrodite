'use strict';

const gulp   = require('gulp'),
      reqDir = require('require-dir'),
      runSeq = require('run-sequence');

// Require gulp tasks
const dir = reqDir('./tasks');


/**
 * Default task
 */
gulp.task('default', [
    'ng-template',
    'serve',
    'js-hint',
    'sass',
    'sassDocs'
], () => {
    gulp.watch(dir.paths.js.src,                        [ 'js-hint' ]);
    gulp.watch([ dir.paths.html, dir.paths.htmlDocs ],  [ 'ng-template' ]);
    gulp.watch([ dir.paths.sassAll, dir.paths.css ],    [ 'sass', 'sassDocs' ]);
});


/**
 * Build task
 */
gulp.task('build', function () {
    runSeq('clean:dist', [
            'ng-template',
            'sass',
            'sassDocs',
            'copy',
            'image-min',
            'svg-min',
            'wiredep',
            'usemin'
        ], 'prepare-dist');
});

