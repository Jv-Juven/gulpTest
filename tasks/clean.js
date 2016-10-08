var gulp = require('gulp');

var del = require('del');

// 清除目标文件
gulp.task('clean', function() {
    // 这里的路径是按照require之后文件的位置的相对路径
    return del(['dist/**', '!dist']).then(function () {
        console.log("清楚dist成功\n");
    });
});
