// 引入 gulp
var gulp = require('gulp');

// 监听文件变化
var watcher = gulp.watch(['../js/**/*.js', '../less/**/*.less'], ['lint', 'less', 'scripts', 'html']);
gulp.task('watch', function () {
    // return watcher.on('change', function(event) {
    //     console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    // });
    console.log('watch开始');
    return gulp.watch(['./js/**/*.js', './less/**/*.less'], ['lint', 'less', 'scripts', 'html']);
})
