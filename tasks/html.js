// 引入 gulp
var gulp = require('gulp');

var minifyHtml = require('gulp-minify-html');
// html处理
gulp.task('html', function(cb) {
    console.log('html开始');
    // 这里的路径是按照require之后文件的位置的相对路径
    gulp.src('./views/**/*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('./dist/views'));
    cb();
});
