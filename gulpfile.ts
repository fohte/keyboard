import gulp = require('gulp')
import typescript = require('gulp-typescript')

const paths = {
  src: 'src/**/*.ts',
  dest: 'dest/',
}

const tsProject = typescript.createProject('tsconfig.json')

export const build = () =>
  gulp
    .src(paths.src)
    .pipe(tsProject())
    .pipe(gulp.dest(paths.dest))

export const watch = () => {
  gulp.watch(paths.src, build)
}

export default build
