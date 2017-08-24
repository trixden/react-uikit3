const gulp = require('gulp');
const gutil = require('gulp-util');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const concat = require('gulp-concat');
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

gulp.task('buildCSS', () => (
  gulp
    .src('./node_modules/uikit/dist/css/uikit.min.css')
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./testing'))
));

gulp.task('compile', ['buildJS', 'buildCSS']);

gulp.task('watch', ['buildJS', 'buildCSS'], () => {
  gulp.watch([
    'src/**/*.jsx',
    'testing/**/*.jsx'
  ], ['buildJS', 'buildCSS']);
});
