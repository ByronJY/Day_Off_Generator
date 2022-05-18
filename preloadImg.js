// 來源 https://www.demo2s.com/javascript/javascript-canvas-for-loops-and-drawimage-working-together.html

var images,
  nameList = document.getElementById('log'), // just a div to display the stuff you were writing out to document. write.
  
  // this function returns a Promise which will resolve once all of the
  // images are done loading
  preloadImages = function (src) {
    var imagePromises,
      sources = src;


    // if we have already loaded and cached the images,
    // return them right away wrapped in a resolved Promise
    // if (images) {
    //   nameList.innerHTML += 'Using cached images.<br>';
    //   return Promise.resolve(images);
    // }


    // otherwise we use .map to iterate over the items in sources and
    // create a new array of promises and store them in imagePromises
    imagePromises = sources.map(function (src) {
        // console.log(src);
      // each of the promises that are created by this function
      // are stored in imagePromises and will resolve when the image
      // it represents fires its load event
      return new Promise(function (resolve, reject) {
          var img = new Image();
          // once the image has loaded, resolve its Promise
          img.onload = function () {
            resolve(img);
          };
          // if there is an error reject this image's Promise
          img.onerror = function () {
            reject(src + ' failed to load.');
          };
          img.src = src;
      });
    });
    // Promise.all will create a Promise that will resolve when all of the
    // images are loaded (because all of the Promises representing those
    // images will have resolved). If there is an error loading any of the
    // images it will be rejected, which we can handle later.
    return Promise.all(imagePromises)
      // after Promise.all returns a resolved Promise, we create a new Promise
      // using .then, which is what actually gets returned by preloadImages.
      .then(function (loadedImages) {
        // cache the loaded images in case we need them later
        images = loadedImages;
        // return the images so that anything chained off of this Promise
        // has access to them.
        return loadedImages;
      });
  },
  displayImages = function (src_in) {
    //   console.log(src_in);
      let src_in_temp = [];
    var c = document.getElementById("canvas"),
      ctx = c.getContext("2d");

    for (let scr_in_index = 0 ; scr_in_index < src_in.length ; scr_in_index++){
        src_in_temp.push(src_in[scr_in_index]["src"]);
        // console.log(src_in[scr_in_index]["src"]);
    }
    console.log(src_in_temp);

    // preloadImages will return a Promise that will resolve once all of the
    // images have been loaded. The .then chained off of that Promise receives
    // the list of images via the images parameter
    preloadImages(src_in_temp).then(function (images) {
        // console.log(images);
      var i,
        img;
      for(i = 0; i < images.length; /* no increment expression, see below */) {
          img = images[i];
        //   console.log(img);
        let bX = src_in[i]['x'];
        let bY = src_in[i]['y'];
        let bW = src_in[i]['w'];
        let bH = src_in[i]['h'];
          // nameList.innerHTML += img.src + "<br>";
          ctx.drawImage(img, bX, bY, bW, bH); // you need to make sure to
                                                // use your offset here
          // incrementing here instead of in the increment expression of
          // for statement makes this part work correctly
          i += 1;
      }
    }).catch(function (msg) {
      // if there was an error loading any of the images, this .catch
      // will display an error
      nameList.innerHTML += msg + '<br>';
    });
};

// displayImages();

// document.getElementById('redraw').addEventListener('click', function () {
//   var c = document.getElementById("canvas"),
//     ctx = c.getContext("2d");
//   ctx.clearRect(0, 0, 500, 500);
//   nameList.innerHTML = '';
//   setTimeout(displayImages, 1000);
// });