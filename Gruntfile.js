/*
 * grunt-contrib-clean
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Tim Branyen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            },
        },

        // Configuration to be run (and then tested).
        manual: {
            options: {
                printAllTasks: true
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        },

        // Tasks used in testing.
        task1: {
            options: {
                includeToManual: true,
                manualText: 'This is task1 manual message'
            }
        },

        task3: {
            options: {
                includeToManual: true
            }
        },

        task4: {
            options: {
                includeToManual: true,
                manualText: 'This is task4 common manual message'
            },

            targetA : {
                options: {
                    manualText: 'This is task4 targetA manual message'
                }
            },

            targetB : {
            },

            targetC : {
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Setup test tasks.
    grunt.registerTask('task1', 'Sample task 1', function() {});
    grunt.registerTask('task2', 'Sample task 2', function() {});
    grunt.registerTask('task3', 'Sample task 3', function() {});
    grunt.registerMultiTask('task4', 'Sample task 4', function() {});
    grunt.registerMultiTask('task5', 'Sample task 5', function() {});
    grunt.registerMultiTask('task6', 'Sample task 6', function() {});

    // Whenever the 'test' task is run, first create some files to be cleaned,
    // then run this plugin's task(s), then test the result.
    grunt.registerTask('test', ['manual', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};
