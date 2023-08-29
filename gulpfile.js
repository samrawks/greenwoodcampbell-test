var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var csslint = require('gulp-csslint');
var autoPrefixer = require('gulp-autoprefixer');
// require('es6-promise').polyfill();
var cssComb = require('gulp-csscomb');
var cmq = require('gulp-merge-media-queries');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
gulp.task('css',function(){
  gulp.src(['src/css/**/*.css'])
    .pipe(plumber({
      handleError: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(autoPrefixer())
    .pipe(cssComb())
    .pipe(cmq({log:true}))
    .pipe(csslint())
    .pipe(csslint.formatter())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'))
    .pipe(reload())
});
gulp.task('js',function(){
  gulp.src(['src/js/**/*.js'])
    .pipe(plumber({
      handleError: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(reload())
});
// gulp.task('html',function(){
//   gulp.src(['src/html/**/*.html'])
//     .pipe(plumber({
//       handleError: function (err) {
//         console.log(err);
//         this.emit('end');
//       }
//     }))
//     .pipe(gulp.dest('./'))
//     .pipe(reload())
// });
gulp.task('default',function(){
  browserSync.init({
    server: "./"
  });
  gulp.watch('src/js/**/*.js', gulp.series('js'));
  gulp.watch('src/css/**/*.css', gulp.series('css'));
  // gulp.watch('src/html/**/*.html', gulp.series('html'));
  // gulp.watch('src/images/**/*', gulp.series('image'));
});