// 当 gulp 执行的时候，会自动寻找这个文件 gulpfile.js

// src() 表示创建一个读取文件系统的流，dest() 表示创建一个写入到文件系统的流
const { src, dest } = require('gulp');

/**
 * 实现复制
 */
const copy = () => {
  return src('src/*').pipe(dest('dist/'));
};

exports.default = copy;
