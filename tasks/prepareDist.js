'use strict';

const gulp  = require('gulp'),
      del   = require('del'),
      paths = require('./paths'),
      SRC   = [
          paths.dist + '/index.html',
          paths.dist + '/assets/aphrodite-docs.min.css',
          paths.dist + '/assets/images/favicon.png',
          paths.dist + '/assets/images/application-logo*.svg',
          paths.dist + '/scripts/aphrodite-docs.min.js',
      ];


/**
 * Delete specific files in dist folder
 */
gulp.task('prepare-dist', () => {
    return del.sync(SRC, { force: true });
});
