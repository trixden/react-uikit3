const gulp = require('gulp');
const gutil = require('gulp-util');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const $ = require('gulp-load-plugins')();

gulp.task('buildJS', () => {
  return browserify({
    entries: './testing/index.jsx',
    extensions: ['.jsx', '.js'],
    debug: false
  })
  .transform('babelify', {
    presets: ['es2015', 'react'],
    plugins: ['transform-class-properties']
  })
  .bundle()
  .on('error', function(err) {
    gutil.log(gutil.colors.red.bold('[browserify error]'));
    gutil.log(err.message);
    this.emit('end');
  })
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('testing'));
});

gulp.task('start', ['buildJS'], () => {
  gulp.watch([
    'src/**/*.jsx',
    'testing/**/*.jsx'
  ], ['buildJS']);
});
