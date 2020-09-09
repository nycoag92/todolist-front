var gulp            = require('gulp');
var connect         = require('gulp-connect');
var sass            = require('gulp-sass');
var st              = require('st');
sass.compiler       = require('node-sass');

gulp.task('css:sass', function () {
    return gulp.src('src/stylesheets/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/stylesheets/css'));
});

gulp.task('serve', function() {
    connect.server({
        root: './src',
        livereload: true,
        port: 3000,
        middleware: function (connect, opt) {
          return [
            st({ path: 'node_modules', url: '/node_modules' })
          ];
        }
    });
});