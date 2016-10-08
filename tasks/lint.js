// 引入 gulp
var gulp = require('gulp');
// 引入组件
var jshint = require('gulp-jshint');
// 引入配置文件
var config = require('../config/config.js');

// 检查脚本
gulp.task('lint', function() {
    console.log('lint开始');
    // 这里的路径是按照require之后文件的位置的相对路径
    return gulp.src(config.output + 'js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
