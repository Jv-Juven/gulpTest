// 引入 gulp
var gulp = require('gulp');
var gulpSquence = require('gulp-sequence');
// 引入组件

var sourcemaps = require('gulp-sourcemaps');
// 引入配置文件
var config = require('../config/config.js'); // 引入文件按照文件结构的位置

// 默认任务
// gulp.task('default', function(cb){
//     gulpSquence('clean', 'lint', 'less', 'scripts', 'html', 'watch', cb);
// });
gulp.task('default', gulpSquence('clean', 'lint', 'less', 'scripts', 'html', 'watch')); // 以上两种都可以，写法不一样
