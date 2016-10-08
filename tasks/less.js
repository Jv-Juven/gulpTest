var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer'); // css属性加上前缀

// 编译Less
gulp.task('less', function(cb) {
    console.log('less开始');
    // 这里的路径是按照require之后文件的位置的相对路径
    gulp.src('./less/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false, // 在未压缩的情况下，美化编译之后的样式
        }))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
    cb();
});
