// 引入 gulp
var gulp = require('gulp');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
// 合并，压缩文件
gulp.task('scripts', function(cb) {
    console.log('scripts开始');
    // 这里的路径是按照require之后文件的位置的相对路径
    gulp.src('./js/*.js')
        .pipe(sourcemaps.init())
        // .pipe(concat('all.js'))
        // .pipe(gulp.dest('./dist'))
        // .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'));
    cb()
});
