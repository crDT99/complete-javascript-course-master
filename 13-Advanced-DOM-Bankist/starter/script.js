'use strict';
///////////////////////////////////////
// SELECTORS
///////////////////////////////////////

const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// BUtton Scrolling
buttonScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect(); //get the coordinates of section1
  console.log(s1Coords);
  //DOMRect {x: 0, y: 665, width: 1202, height: 1391.875, top: 665, …}

  console.log(e.target.getBoundingClientRect()); //get the coordinates of the element just clicked

  console.log('current Scroll (X/Y', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //  OLD SCHOOL WAY OF SCROLLING

  // Instant Scrolling
  // window.scrollTo(
  //  s1Coords.left + window.pagexOffset,
  //  s1Coords.top + window.pageYOffset
  // );

  // Smooth Scrolling
  //window.scrollTo({
  //left: s1Coords.left + window.pagexOffset,
  // top: s1Coords.top + window.pageYOffset,
  //  behavior: 'smooth',
  //});

  //  NEW SCHOOL WAY OF SCROLLING

  // Just work in Modern Browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////////////////////////////////////
//Page Navigation

// this works but its NOT OPTIMAL
/*
document.querySelectorAll('.nav__link').forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.preventDefault();

    const id = this.getAttribute('href');
    console.log(id); //#section--1  //#section--2 //#section--3

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                              event Delegation
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// used to make optimized solutions

// we use Event Delegation to Delegate the events to a higher parent of all the elemets with THE SAME EVENT

// 1. Add Event listener to common parent element

//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  // Matching Strategy -> check for something in common to locate the elements
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                              Tabbed Component
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// commonly it has tabs, that chanche the content below if clicked

//  EVENT DELEGATION -->
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return; // guard clause  (statemet that return a function if something specific happens)

  // Activate Buttons
  // 1. Remove the active classes

  //1.1 remove the active class of all the tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  // 1.2 remove the active class of all the tabsContents
  tabsContent.forEach(tabCont =>
    tabCont.classList.remove('operations__content--active')
  );

  // 2. add the active class to the clicked button
  clicked.classList.add('operations__tab--active');

  // add the active class to the content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu Fade Animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this; // "this" is the result of the param binded
      }
      logo.style.opacity = this; // normally the this keyword is the clicked element itself
    });
  }
};

// ******************** passing an "argument" into handler ********************

//the bind function replaces the "this" keyword with anything that we specify, this time the opacity value
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
/*  //classic  -> this method uses scroll and scrollY, whitch is not optimal



const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function (e) {
  console.log(this.window.scrollY);

  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});



// Sticky navigation: intersection Observer API
 // practice
const obsCallback = function (entries, observer) {
  // this is called every time that the observed (target) element is intersecting the root element at the defined threshold
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null, // the element intersected
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); // IntersectionObserver.observe(target)
*/
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal Sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

// hide sections
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

// Lazy-loading IMAGES
const imgTargets = document.querySelectorAll('img[data-src]');

const loadIMG = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  console.log(entry);
  //replace the src with data-src
  entry.target.src = entry.target.dataset.src;
  // loading the real size images can take some time, if we remove the filter as soon as the image starts loading, it would be possible to see the lazy-loading image during the time that takes the new image to load, so thats why we wait for the load event trigger. to know when he new image is done loading:
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadIMG, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// SLIDER

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let curSlide = 0;
  const dotContainer = document.querySelector('.dots');
  const maxSlide = slides.length;

  // FUNCTIONS

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // GOING TO THE NEXT SLIDE
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // GOING TO THE PREVIOUS SLIDE
  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;

    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const init = function () {
    //determines the initial state
    goToSlide(0);

    createDots();
    activateDot(0);
  };

  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  // CLICK ON ONE OF THE DOTS
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset; //destructuring
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// LECTURES ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/*
// all the html --> BUT NOT THE REAL DOM ELEMENT
console.log(document.documentElement);

//general parts
console.log(document.head); //<head> ... </head>
console.log(document.body); //<body> ... </body>

//~~~~~~~~~  Moderns ~~~~~~~~~~~~~

// QUERY SELECTOR : return the first element that matches

//const name = document.querySelectorA('.class' / "id");
const header = document.querySelector('header');

// QUERY SELECTORALL : return all the elements that matches

//const name = document.querySelectorAll('.class');
const allSections = document.querySelectorAll('.section');

console.log(allSections); // creates a NodeList
// the NodeList does not update automatically

// GET ELEMENT BY ID: return the element with specific ID

// ~~~~~~~~ classic ~~~~~~~~~~~

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // creates a HTML collection
// the HTML collection updates automatically if something is updated or deleted

console.log(document.getElementsByClassName('btn')); // creates a HTML collection
// the HTML collection updates automatically if something is updated or deleted

// Creating and Inserting ELEMENTS
// .insertAdjacentHTML

// create an element (without inserting it into the DOM ...(yet))
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  ' We use cookies for improved functionality and analytics. =)';
message.innerHTML =
  ' We use cookies for improved functionality and analytics. :) <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message); // first Child
header.append(message); // last Child  --> dont create another, just move the existing

// insert multiple copies of an element
//header.append(message.cloneNode(true));

//header.before(message); // before the header
//header.after(message); // After the header

// ---- Delete elements ----
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // or document.querySelector('.cookie-message').remove()

    //clasic way
    //message.parentElement.removeChild(message);
  });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                  Styles, Atributes and Classes
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~ Styles

//inline Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // " "  --> only works with inline-Styles
console.log(message.style.backgroundColor); //rgb(55, 56, 61)

// to check computed styles (from style-sheet) (already processed)
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); //50px

//set new height using computed style

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//root
document.documentElement.style.setProperty('--color-primary', 'orangered');

//~~~~~~~~ Atributes

const logo = document.querySelector('.nav__logo');

//default atributes
console.log(logo.alt); //Bankist logo
console.log(logo.src); //http://127.0.0.1:8080/img/logo.png  --> absolute UrL
// the css version of the url is the relative url (relative to the folder)
console.log(logo.className); //nav__logo

// Non-Standard
console.log(logo.designer); //undefined -> this doesnt work oncustom properties

// the way of reading Non-Standard atributes:
console.log(logo.getAttribute('designer')); //Jonas

// set Atributes
logo.alt = 'Beautiful minimalist Logo';

logo.setAttribute('company', 'Bankist');

//relative and absolute URL

//ABSOUTE VERSION
console.log(logo.src); //http://127.0.0.1:8080/img/logo.png

// AS HTML/CSS VERSION
console.log(logo.getAttribute('src')); //img/logo.png

//~~~ Links

const link = document.querySelector('.btn--show-modal');
//ABSOUTE VERSION
console.log(link.href); //http://127.0.0.1:8080/#

// AS HTML/CSS VERSION
console.log(link.getAttribute('href')); //#

// Data Atributes --> atributes that starts with the word "data-"

console.log(logo.dataset.versionNumber); //3.0
// convert the name to cammelCase but whithout data

//~~~~~~~~~  Classes

logo.classList.add('test');
logo.classList.remove('test');
logo.classList.toggle('test');
logo.classList.contains('test'); // not includes

//set a class
logo.className = 'Jonas'; // --> this is bad because overwrite the existing clases

*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                              event handlers
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  // mouse enter is like a hover
  alert(' addEventListenr: "Great!! You are reading the heading :D"');
  // as this function is used in addEventListener, any the evenet canbe removed
  //h1.removeEventListener('mouseenter', alertH1);
};
// the add addEventListener is the modern solution because it can be used to multiple events AND any event can be removed if needed
h1.addEventListener('mouseenter', alertH1);

//remove the event after 3 seconds
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// old school way
// the variable can only handle 1 event at a time (  if we define another, it overwrites)

//h1.onmouseenter = function (e) {
// alert('onmouseenter: "Great!! You are reading the heading :D"');
//};

*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                              event Propagation
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);

  // STOP PROPAGATION
  //e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  false // the third paramether of addEventListener defines if the event is listened during bubling or capture phase in event propagation, false (default) => bubling fase
);

*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                              Dom Traversing
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
// used to make optimized solutions

const h1 = document.querySelector('h1');

// going DownWards : child
//queryselector can select child elements down the dom tree (JUST ELEMENTS)
console.log(h1.querySelectorAll('.highlight'));
//NodeList(2) [span.highlight, span.highlight]

// direct children
console.log(h1.childNodes);
//NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]

console.log(h1.children); // returns a html live collection
//HTMLCollection(3) [span.highlight, br, span.highlight]

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white';

// Goin Upwards  (Selectig Parents)

console.log(h1.parentNode); //body > header > <div class="header__title">...</div>
console.log(h1.parentElement); //body > header > <div class="header__title">...</div>

//if we need the parent element whithout matter how deep in the dom tree its located, we can use .closest(), to find the closest parent

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// QUERYSELECTOR FIND CHILDREN NO MATTER HOW DEEP IN THE DOM TREE THEY ARE
// CLOSEST FIND PARENT NO MATTER HOW DEEP IN THE DOM TREE THEY ARE
// COMMONLY USED IN

// Going sideWays : Sibblings
console.log(h1.previousElementSibling); // null
console.log(h1.nextElementSibling); //<h4>A simpler banking experience for a simpler life.</h4>

// or move to the direct parent and get all the children

console.log(h1.parentElement.children); //HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]

// example
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});

*/

// assoon as the dom content is parsed, the DOMContentLoaded gets triggered (only HTML & JS ) -> no images
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree build!!', e);
});

//loaded event => triggered when all the things in the page has been loaded (images and css)
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// event trigered just before leaving the site (when X button is pressed)
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = ''; // no matter what we write here
});
