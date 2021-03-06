module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        watch: {
            files: 'src/*.ts',
            tasks: ['ts:devBackend', 'ts:devFrontend']
        },
        ts: {
            // use to override the default options, See: http://gruntjs.com/configuring-tasks#options
            // these are the default options to the typescript compiler for grunt-ts:
            // see `tsc --help` for a list of supported options.
            options: {
                compile: true,                 // perform compilation. [true (default) | false]
                comments: false,               // same as !removeComments. [true | false (default)]
                target: 'es5',                 // target javascript language. [es3 | es5 (grunt-ts default) | es6]
                module: false,                 // target javascript module style. [amd (default) | commonjs]
                sourceMap: true,               // generate a source map for every output js file. [true (default) | false]
                sourceRoot: '',                // where to locate TypeScript files. [(default) '' == source ts location]
                mapRoot: '',                   // where to locate .map.js files. [(default) '' == generated js location.]
                declaration: false,            // generate a declaration .d.ts file for every output js file. [true | false (default)]
                htmlModuleTemplate: 'My.Module.<%= filename %>',    // Template for module name for generated ts from html files [(default) '<%= filename %>']
                htmlVarTemplate: '<%= ext %>',                      // Template for variable name used in generated ts from html files [(default) '<%= ext %>]
                                                                    // Both html templates accept the ext and filename parameters.
                noImplicitAny: false,          // set to true to pass --noImplicitAny to the compiler. [true | false (default)]
                fast: 'watch',                 // see https://github.com/TypeStrong/grunt-ts/blob/master/docs/fast.md ['watch' (default) | 'always' | 'never']
                /* ,compiler: './node_modules/grunt-ts/customcompiler/tsc'  */ //will use the specified compiler.
            },
            // a particular target
            devBackend: {
                src: ['src/*.ts', 'src/lib/*.ts', '!src/content.ts'],          // The source typescript files, http://gruntjs.com/configuring-tasks#files
                // html: ['app/**/**.tpl.html'],  // The source html files, https://github.com/basarat/grunt-ts#html-2-typescript-support
                // reference: 'app/reference.ts', // If specified, generate this file that you can use for your reference management
                // outDir: 'js',
                out: 'js/viewer.js',             // If specified, generate an out.js file which is the merged js file
                // use to override the grunt-ts project options above for this target
                // options: { }
            },
            devFrontend: {
                src: ['src/bookmark.ts', 'src/content.ts'],
                out: 'js/content.js',
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.task.run(['ts:devBackend', 'ts:devFrontend']);
};
