/*
 * grunt-buddha-percy
 * 
 *
 * Copyright (c) 2015 percy
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  //registerMultiTask一般在插件中使用，允许配置多份属性和参数
  grunt.registerMultiTask('buddha_percy', 'Buddha\'s grace illuminates code as sunshine', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({ //修改默认配置项，和Gruntfile.js中相应的部分对应
      who: 'buddha', 
      commentSymbol: '//' 
    });

    var testExistRegexMap = { //测试是否已经存在了要添加的内容的Reg
      'buddha': /o8888888o/,
      'alpaca': /---/
    }

    var who = options.who,
        commentSymbol = options.commentSymbol,
        commentFilepathMap = {
          'buddha': 'assets/buddha.txt',
          'alpaca': 'assets/alpaca.txt'
        },
        commentFilePath = path.join(__dirname,commentFilepathMap[who]),
        commentContent = grunt.file.read(commentFilePath),
        lineCommentArr = commentContent.split(grunt.util.normalizelf('\n')); //把文件内容按行分割成数组
        
    lineCommentArr.forEach(function(value, index, arr){
        arr[index] = commentSymbol + value; //在每一行前面添加注释符
    });

    commentContent = lineCommentArr.join(grunt.util.normalizelf('\n')); //normalizelf转化换行符

    //关于此处this属性参考http://www.gruntjs.net/api/inside-tasks
    // Iterate over all specified file groups.
    // Gruntfile.js中配置的都会转换成file array的形式
    this.files.forEach(function (file) {
        // Concat specified files.
        file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var originalFileContent = grunt.file.read(filepath),
            newFileContent = commentContent +　grunt.util.normalizelf('\n')
                             + originalFileContent; //添加内容
            if(testExistRegexMap[who].test(originalFileContent)){
              return;
            }
            grunt.file.write(filepath, newFileContent);
      }); 

      
      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
