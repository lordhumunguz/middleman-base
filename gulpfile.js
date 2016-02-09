var gulp = require('gulp');
var stylus = require('gulp-stylus');
var poststylus = require('poststylus');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();

// Configuration
var paths = {
  'stylesheetsEntryPoint': 'source/stylesheets/site.styl',
  'stylesheets': 'source/stylesheets/**/*.styl',
  'views': 'source/**/*.slim',
  'bower': 'bower_components',
  'tempDist': 'gulp_dist'
};
var postCssPlugins = [
  'lost',
  'autoprefixer'
];

// Stylesheet task
gulp.task('stylesheets', function () {
  gulp.src(paths.stylesheetsEntryPoint)
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: [poststylus(postCssPlugins)],
      include: [paths.bower]
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.tempDist + '/stylesheets'))
    .pipe(browserSync.stream({match: '**/*.css'}))
});

// Browsersync task
gulp.task('browser-sync', function(){
  browserSync.init({
     proxy: "localhost:4567"
  });
});

// Watch task
gulp.task('watch', ['stylesheets', 'browser-sync'], function() {
  gulp.watch(paths.stylesheets, ['stylesheets']);
  gulp.watch(paths.views).on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['stylesheets']);
