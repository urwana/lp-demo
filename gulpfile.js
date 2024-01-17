// gulpfile.js

// const gulp = require("gulp");
// const imagemin = require("gulp-imagemin");
// const mozjpeg = require("imagemin-mozjpeg");
// const pngquant = require("imagemin-pngquant");
import pkg from "gulp";
const { src, dest, series, parallel, watch } = pkg;
import imagemin from "gulp-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

function imageCompress() {
  return src("./src/image/*")
    .pipe(
      imagemin(
        [
          imageminMozjpeg({ quality: 80 }),
          imageminPngquant({ quality: [0.6, 0.7], speed: 1 }),
          imagemin.svgo(),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(dest("./dist/image/"));
}

export default series(imageCompress);
// parallel() 同時に処理を行う
