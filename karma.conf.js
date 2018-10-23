module.exports = function (config) {
    config.set({

        basePath: './app',

        frameworks: ['jasmine'],


        files: [
            '../node_modules/jquery/dist/jquery.js',
            '../node_modules/angular/angular.js',
            '../node_modules/angular-mocks/angular-mocks.js',
            '../node_modules/ui-router-0.4.3/release/angular-ui-router.js',
            '**/*.html',
            'app-module.js',
            'components/todo/todo.module.js',
            '**/*.js',
            '**/*.template.html'
        ],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],

        exclude: [],

        preprocessors: {
            '**/*.html': ['ng-html2js']
        },

        reporters: ['progress'],


        port: 9876,


        colors: true,


        logLevel: config.LOG_INFO,


        autoWatch: true,


        browsers: ['Chrome'],


        singleRun: false,


        concurrency: Infinity,

        ngHtml2JsPreprocessor: {
            moduleName: 'foo'
        }
    });
};
