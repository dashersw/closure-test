var gulp = require('gulp');

var closureCompiler = require('google-closure-compiler').gulp();

gulp.task('default', function() {
    return gulp.
        src('./src/**/*.js').
        pipe(closureCompiler({
            compilation_level: 'ADVANCED_OPTIMIZATIONS',
            warning_level: 'VERBOSE',
            language_in: 'ECMASCRIPT6_STRICT',
            language_out: 'ECMASCRIPT5_STRICT',
            output_wrapper: '(function(){\n%output%\n}).call(this)',
            js_output_file: 'output.min.js',
            dependency_mode: 'STRICT',
            entry_point: './index'
        })).
        pipe(gulp.dest('./'));
});
