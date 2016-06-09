# closure-test

This repository aims to show the use of `dependency_mode=STRICT` in google-closure-compiler's [gulp plugin](https://www.npmjs.com/package/google-closure-compiler#using-the-gulp-plugin).

The default gulp task tries to compile a simple script as `output.min.js`, but fails to do so when [line 15-16 in `Gulpfile.js`](Gulpfile.js#L15-L16) are commented in.

## Reproduction

Clone the repository:
```
git clone git@github.com:dashersw/closure-test.git
cd closure-test
npm install
```

Running `gulp` will produce the correct result.

Commenting in the dependency mode setting and running `gulp` again produces the error, `"ERROR - required entry point "src/index" never provided"`
