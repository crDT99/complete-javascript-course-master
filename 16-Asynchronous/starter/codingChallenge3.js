///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

'use strict';
const imgContainer = document.querySelector('.images');

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

//----------------------------------------------------
// USING .then() to consume promises

// createImage('img/img-1.jpg')
//   .then(inc_img => {
//     console.log('loaded image #1');
//     currImg = inc_img;
//     return wait(2);
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(inc_img => {
//     console.log('loaded image #2');
//     currImg = inc_img;
//     return wait(2);
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .catch(err => console.error(`${err} 💥💥💥`));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// p1: Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await

// USING ASYNC-AWAIT
const loadNPause = async function () {
  try {
    // carga la imagen #1
    const img1 = await createImage('img/img-1.jpg');
    console.log('loaded image #1'); // this will wait until img1 returns
    await wait(2);
    img1.style.display = 'none'; // this will wait until wait(2) returns

    // carga la imagen #2
    const img2 = await createImage('img/img-2.jpg');
    console.log('loaded image #2'); // this will wait until img2 returns
    await wait(2);
    img2.style.display = 'none'; // this will wait until wait(2) returns

    // carga la imagen #3
    const img3 = await createImage('img/img-3.jpg');
    console.log('loaded image #3'); // this will wait until img3 returns
    await wait(2);
  } catch (error) {
    console.error(`${error} 💥💥💥`);
  }
};

//calling the function
// loadNPause();

/*
PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).
*/

async function loadAll(imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs); //[Promise, Promise, Promise];

    const dataImages = await Promise.all(imgs);
    console.log(dataImages);

    dataImages.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(`${err} 💥💥💥`);
  }
}

const imPathsTest1 = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
loadAll(imPathsTest1);
