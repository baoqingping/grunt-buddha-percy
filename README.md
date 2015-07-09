# grunt-buddha-percy

> Buddha\'s grace illuminates code as sunshine

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-buddha-percy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buddha-percy');
```

## The "buddha_percy" task

### Overview
In your project's Gruntfile, add a section named `buddha_percy` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  buddha_percy: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.who
Type: `String`
Default value: `buddha`

默认的选项

#### options.commentSymbol
Type: `String`
Default value: `//`

使用的注释符

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  buddha_percy: {
    options: {
      who: 'buddha', 
      commentSymbol: '//' 
    },
    dist:['example/*.js']
  },
})
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
2015-07-09 &nbsp;&nbsp;&nbsp;&nbsp; v0.01&init

## License
Copyright (c) 2015 percy. Licensed under the MIT license.
