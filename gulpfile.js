'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');
const fractal = require('@frctl/fractal').create();
const open = require('opn');

fractal.set('project.title', 'VFF'); // title for the project
fractal.web.set('builder.dest', 'build'); // destination for the static export
fractal.web.set('static.path', __dirname + '/frontend/static');
fractal.docs.set('path', `${__dirname}/docs`); // location of the documentation directory.
fractal.components.set('path', `${__dirname}/frontend/src/components`); // location of the component directory.
fractal.components.set('ext', '.html') // using html files for component docs
fractal.components.set('default.preview', '@layout'); // layout for components

const logger = fractal.cli.console;

// Installation tasks
gulp.task('i', function() {
    gulp.start('front-i');
    gulp.start('back-i');
});

gulp.task('front-i', shell.task(['cd frontend && npm i']));
gulp.task('back-i', shell.task(['cd backend && npm i']));


// Development tasks
gulp.task('default', function() {
    gulp.start('front-dev');
    gulp.start('back-dev');
    gulp.start('docs-dev');
});

gulp.task('front-dev', shell.task(['cd frontend && npm run dev']));
gulp.task('back-dev', shell.task(['cd backend && npm run dev']));
gulp.task('docs-dev', function(){
    var proxyMiddleware = require('http-proxy-middleware');
    var proxyURL = 'http://localhost:4000';
    var apiProxy = proxyMiddleware('/api', {target: proxyURL});

    fractal.web.set('server.syncOptions', {
        middleware: [apiProxy]
    });
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        open('http://localhost:3000/');
    });
});


// Build tasks
gulp.task('build', function() {
    gulp.start('front-build');
    gulp.start('back-build');
    gulp.start('docs-build');
});

gulp.task('front-build', shell.task(['cd frontend && npm run build']));
gulp.task('back-build', shell.task(['cd backend && npm run build']));
gulp.task('docs-build', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});






