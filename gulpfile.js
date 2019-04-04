const gulp = require('gulp')
const path = require('path')
const ts = require('gulp-typescript')
const replace = require('gulp-replace')
const sourcemaps = require('gulp-sourcemaps')
const clean = require('gulp-clean')
const merge2 = require('merge2')

const version = require('./package.json').version

function postProcess() {
  return gulp
    .src(
      [
        path.resolve(__dirname, 'dist/**/*.js'),
        path.resolve(__dirname, 'bundles/*.js'),
      ],
      { base: '.' }
    )
    .pipe(replace('${SDK_VERSION}', version))
    .pipe(gulp.dest('.'))
}

function postCleanup() {
  return gulp
    .src([
      path.resolve(__dirname, 'dist/**/__tests__'),
      path.resolve(__dirname, 'dist/**/?(*.)+(spec|test).ts?(x)'),
    ])
    .pipe(clean())
}

const buildModule = gulp.series(
  gulp.parallel([
    function buildCjs() {
      const tsProject = ts.createProject(
        path.resolve(__dirname, 'tsconfig.json'),
        {
          module: 'commonjs',
        }
      )
      const tsResult = tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())

      const jsPipe = tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/cjs'))
      const dtsPipe = tsResult.dts.pipe(gulp.dest('dist/cjs'))
      const copyGrpc = gulp
        .src(path.resolve(__dirname, 'src/services/client/grpc/**/*'))
        .pipe(
          gulp.dest(path.resolve(__dirname, 'dist/cjs/services/client/grpc/'))
        )

      return merge2([jsPipe, dtsPipe, copyGrpc])
    },
    function buildEsm() {
      const tsProject = ts.createProject(
        path.resolve(__dirname, 'tsconfig.json')
      )
      const tsResult = tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())

      const jsPipe = tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/esm'))
      const dtsPipe = tsResult.dts.pipe(gulp.dest('dist/esm'))
      const copyGrpc = gulp
        .src(path.resolve(__dirname, 'src/services/client/grpc/**/*'))
        .pipe(
          gulp.dest(path.resolve(__dirname, 'dist/esm/services/client/grpc/'))
        )

      return merge2([jsPipe, dtsPipe, copyGrpc])
    },
  ]),
  postProcess,
  postCleanup
)

gulp.task('build', buildModule)

const watcher = () => {
  gulp.watch(['src/**/*', '*.ts'], buildModule)
}

gulp.task('dev', gulp.parallel(watcher))
