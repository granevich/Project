/**
 * Created by granevich on 06.05.2016.
 */
var gulp = require('gulp'),
browserSync = require('browser-sync'),
sass = require('gulp-sass');



gulp.task('sass', function () {
    return gulp.src('app/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}))
});


gulp.task('browserSync', function () {
    browserSync({
        server:{
            baseDir:'app'
        },
        notify:false
    });
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/sass/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload)
});