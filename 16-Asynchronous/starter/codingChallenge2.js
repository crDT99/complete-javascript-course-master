///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   //create an image element
//   let nImage = document.createElement('img');
//   // add to the .src the incoming path
//   nImage.scr = imgPath;
//   // listen to the load event

//   nImage.addEventListener('load', function () {});
// };

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    //   //create an image element
    const nImage = document.createElement('img');
    //   // add to the .src the incoming path
    nImage.src = imgPath;

    // console.log('waiting to load...');
    nImage.addEventListener('load', function () {
      //append the image when the load event trigger
      imgContainer.append(nImage);
      // return the image for the resolve scenario
      resolve(nImage);
    });

    nImage.addEventListener('error', function () {
      // return the error for the reject scenario
      reject(new Error('Something is wrong with the image, check the path'));
    });
  });
};

let currImg;

createImage('img/img-1.jpg')
  .then(inc_img => {
    console.log('loaded image #1');
    currImg = inc_img;
    return wait(2);
  })
  .then(() => {
    currImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(inc_img => {
    console.log('loaded image #2');
    currImg = inc_img;
    return wait(2);
  })
  .then(() => {
    currImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .catch(err => console.error(`${err} 💥💥💥`));
