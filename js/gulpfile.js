const gulp = require('gulp');
const pug = require('gulp-pug');

function compilePug() {
    return gulp.src(['../layout/header.pug', '../layout/pages/singleEvent.pug', '../layout/pages/events.pug', '../layout/pages/index.pug', '../layout/pages/courses.pug', '../layout/pages/singleCourse.pug'])  // Path to your Pug files
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('../html'));  // Output directory

}

function watchFiles() {
    gulp.watch(['../layout/header.pug', '../layout/pages/singleEvent.pug', '../layout/pages/events.pug', '../layout/pages/index.pug', '../layout/pages/courses.pug', '../layout/pages/singleCourse.pug'], compilePug);
}
exports.default = gulp.series(compilePug, watchFiles);
