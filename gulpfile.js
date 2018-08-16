const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

const path = {
    html: {
        src: '*.html',
        dest: 'build'
    },
    styles: {
        src: 'css/*.css',
        dest: 'build/css'
    },
    scripts: {
        src: 'js/*.js',
        dest: 'build/js'
    },
    sw: {
        src: '*sw.js',
        dest: 'build'
    },
    images: {
        src: 'img/*.{jpg,jpeg,png,gif,ico,svg}',
        dest: 'build/img'
    },
    data: {
        src: 'data/*.json',
        dest: 'build/data'
    }
};

gulp.task('html', async () => {
	return gulp.src(path.html.src)
		.pipe(gulp.dest(path.html.dest));
});

gulp.task('styles', async () => {
	return gulp.src(path.styles.src)
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest(path.styles.dest));
});

gulp.task('scripts', async () => {
	return gulp.src(path.scripts.src)
		.pipe(gulp.dest(path.scripts.dest))
})

gulp.task('sw', async () => {
	return gulp.src(path.sw.src)
		.pipe(gulp.dest(path.sw.dest))
})

gulp.task('images', async () => {
    return gulp.src(path.images.src)
		.pipe(gulp.dest(path.images.dest));
});

gulp.task('data', () => {
    return gulp.src(path.data.src)
        .pipe(gulp.dest(path.data.dest));
})

gulp.task('watch', gulp.parallel(() => {
	gulp.watch(path.html.src, gulp.parallel('html'));
	gulp.watch(path.styles.src, gulp.parallel('styles'));
	gulp.watch(path.images.src, gulp.parallel('images'));
	gulp.watch(path.scripts.src, gulp.parallel('scripts'));
	gulp.watch(path.sw.src, gulp.parallel('sw'));
}));

gulp.task('default', gulp.parallel('html', 'styles', 'sw', 'images', 'scripts', 'data', 'watch'));
