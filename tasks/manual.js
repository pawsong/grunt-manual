/*
 * grunt-contrib-clean
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Tim Branyen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    var TARGET_DESC_PADDING_LEN = 4;

    // Set column widths.
    var widths,
        col1len = 0;

    // Render an array in table form.
    function table (arr) {
        arr.forEach(function(item) {
            var targetProps;

            grunt.log.writetableln(widths, ['', grunt.util._.pad(item[0], col1len), '', item[1]]);

            if(item[2]) {
                grunt.log.writetableln(widths, ['', grunt.util._.pad("", col1len), '', item[2]]);
            }

            targetProps = Object.keys(item[3]);

            if(targetProps.length > 0) {
                grunt.log.writetableln(widths, ['', grunt.util._.pad('', col1len), '',
                    'Targets: [' + targetProps.join(', ') + ']' ]);

                targetProps.forEach(function(prop) {
                    var targetMsg;

                    if(item[3][prop]) {
                        targetMsg = prop + ": " + item[3][prop];

                        grunt.log.writetableln(widths,
                            ['', grunt.util._.pad("", col1len), '',
                                grunt.util._.pad("", TARGET_DESC_PADDING_LEN) + targetMsg]);
                    }
                });
            }
        });
    };

    grunt.registerTask ('manual', 'Print manual.', function() {

        var self = this,
            options = this.options({
                printAllTasks: true
            });

        var tasks = [];

        var packageJSON = grunt.file.readJSON('package.json');

        // Build object of tasks by info (where they were loaded from).
        Object.keys(grunt.task._tasks).forEach(function(name) {

            var task = grunt.task._tasks[name],
                config = grunt.config(name) || {};

            if(!options.printAllTasks) {

                if(!(config.options && config.options.includeToManual)) {
                    return;
                }

            }

            col1len = Math.max(col1len, name.length);
            tasks.push(task);
        });

        // Init withs
        widths = [1, col1len, 2, 76 - col1len];

        // Start print!
        grunt.log
            .subhead("=== " + packageJSON.name + " application grunt task manual ===")
            .writeln();

        table(tasks.map(function(task) {
            var info = task.info,
                targets = {},
                config = grunt.config(task.name) || {},
                moreInfo = "";

            if(config.options && config.options.manualText) {
                moreInfo = config.options.manualText;
            }

            if (task.multi) {
                info += ' *';

                Object.keys(config).forEach(function(target) {
                    if(target === 'options') {
                        return;
                    }

                    targets[target] = "";

                    if(config[target].options && config[target].options.manualText) {
                        targets[target] = config[target].options.manualText;
                    }
                });
            }

            return [task.name, info, moreInfo, targets];
        }));

    });

};
