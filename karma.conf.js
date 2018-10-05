// Karma configuration
// Generated on Thu Sep 27 2018 10:55:00 GMT+0300 (Финляндия (лето))

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './app',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            '../node_modules/jquery/dist/jquery.js',
            '../node_modules/angular/angular.js',
            '../node_modules/angular-mocks/angular-mocks.js',
         /*   './app.js',
            './components/c-dropdown/c-dropdown.module.js',
            './!**!/!*.js',
            '**!/!*.template.html',
            './styles.css'*/
            './components/form-add-fields/app.js',
            './components/form-add-fields/form.spec.js',
            './components/form-add-fields/form-add-field.template.html',
            './components/form-add-fields/index.html',
            './components/form-add-fields/styles.css',
            '**/*.html',
            '**!/!*.template.html',
            './!**!/!*.js'
        ],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],

        // list of files / patterns to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.html': ['ng-html2js']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        ngHtml2JsPreprocessor: {
            moduleName: 'foo'
        }
    });
};
