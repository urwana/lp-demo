//@ts-nocheck
import pkg from "gulp";
const { src, dest, series, parallel, watch } = pkg;
import imagemin from "gulp-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import ejs from "gulp-ejs";

const imageCompress = () => {
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
};

const compileEjs = () => {
  return src("./src/templates/*.ejs")
    .pipe(ejs())
    .pipe(dest("./dist/"));
};

export default series(imageCompress, compileEjs);
// parallel() 同時に処理を行う
