# grunt-manual

> Print grunt task infomation.



## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-manual --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-manual');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-clean/tree/grunt-0.3-stable).*



## Manual task
_Run this task with the `grunt manual` command._

### Options

#### printAllTasks
Type: `Boolean`  
Default: true

if this options sets to false, tasks will be printed when task's options.includeToManual is true.

#### includeToManual
Type: `Boolean`

Note that this option can be added to any task.

#### manualText
Type: `String`

Note that this option can be added to any task and it's target option.


### Usage Examples

Refer to Gruntfile.js
