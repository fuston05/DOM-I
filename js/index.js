const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav

//get html nav anchors into an array
let navAnchor= Array.from(document.querySelectorAll('nav a'));

//loop through navAnchors and nav data from siteContent
for( let i= 1; i <= 6; i++ ){
  //assign data to each a element in nav
  navAnchor[i-1].textContent= siteContent.nav[`nav-item-${i}`];
  navAnchor[i-1].style.color= 'green';
  navAnchor[i-1].style.fontWeight= 'bold';
}//end for

const navEle= document.querySelector('nav');

//new nav element 1
const newEle1= document.createElement('a');
newEle1.textContent= 'Link 1';

newEle1.style.color= 'green';
newEle1.style.fontWeight= 'bold';
navEle.prepend(newEle1);

//new nav element 2
const newEle2= document.createElement('a');
newEle2.textContent= 'Link 2';

newEle2.style.color= 'green';
newEle2.style.fontWeight= 'bold';
navEle.append(newEle2);

//get nav img
let navImg= document.querySelector('#logo-img');
// const image= siteContent.nav['img-src'];
navImg.setAttribute('src', siteContent["nav"]["img-src"]);

// h1
const mainHeading= document.querySelector('.cta-text h1');
mainHeading.textContent= siteContent.cta.h1;

//button
const button= document.querySelector('.cta-text button');
button.textContent= siteContent.cta.button;

// cta-img
const image1= document.querySelector('#cta-img');
image1.setAttribute('src', siteContent['cta']['img-src']);



//top-content h4
const topHeading= document.querySelector('.top-content h4');
topHeading.textContent= siteContent['main-content']['features-h4'];

const topHeading2= document.querySelector('.top-content div:last-child h4');
topHeading2.textContent= siteContent['main-content']['about-h4'];

//top-content p
const topPara= document.querySelector('.top-content p');
topPara.textContent= siteContent['main-content']['features-content'];

const topPara2= document.querySelector('.top-content div:last-child p');
topPara2.textContent= siteContent['main-content']['about-content'];

//middle-img
const midImg= document.querySelector('#middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom-content text-content h4
const btmHeading1= document.querySelector('.bottom-content div:first-child h4');
btmHeading1.textContent= siteContent['main-content']['services-h4'];

const btmHeading2= document.querySelector('.bottom-content div:nth-child(2) h4');
btmHeading2.textContent= siteContent['main-content']['product-h4'];

const btmHeading3= document.querySelector('.bottom-content div:last-child h4');
btmHeading3.textContent= siteContent['main-content']['vision-h4'];

//button-content text-content p
const btmContent1= document.querySelector('.bottom-content div:first-child p');
btmContent1.textContent= siteContent['main-content']['services-content'];

const btmContent2= document.querySelector('.bottom-content div:nth-child(2) p');
btmContent2.textContent= siteContent['main-content']['product-content'];

const btmContent3= document.querySelector('.bottom-content div:last-child p');
btmContent3.textContent= siteContent['main-content']['vision-content'];

//contact h4
const contactHeading= document.querySelector('.contact h4');
contactHeading.textContent= siteContent['contact']['contact-h4'];

//contact p
const contPara1= document.querySelector('.contact p:nth-child(2)');
contPara1.textContent= siteContent['contact']['address'];

const contPara2= document.querySelector('.contact p:nth-child(3)');
contPara2.textContent= siteContent['contact']['phone'];

const contPara3= document.querySelector('.contact p:nth-child(4)');
contPara3.textContent= siteContent['contact']['email'];


//footer p
const footerP= document.querySelector('footer p');
footerP.textContent= siteContent['footer']['copyright'];



// //////////////////////// styles (stretch) ////////////////////////

mainHeading.style.color= 'orange';

button.style.backgroundColor= 'green';

topHeading.style.color= 'orange';
topHeading.style.fontSize= '1.5rem';
topHeading2.style.color= 'orange';
topHeading2.style.fontSize= '1.5rem';

btmHeading1.style.color= 'orange';
btmHeading1.style.fontSize= '1.5rem';

btmHeading2.style.color= 'orange';
btmHeading2.style.fontSize= '1.5rem';

btmHeading3.style.color= 'orange';
btmHeading3.style.fontSize= '1.5rem';

contactHeading.style.color= 'orange';
contactHeading.style.fontSize= '1.5rem';

const footerEle= document.querySelector('footer');
footerEle.style.backgroundColor= 'green';
footerEle.style.padding= '25px 0';

const topContent= document.querySelector('.cta');
topContent.style.backgroundColor= '#eee';
topContent.style.padding= '20px';

document.querySelector('.main-content').style.borderTop= '1px solid #ddd';
document.querySelector('.main-content').style.borderBottom= '1px solid #ddd';

// ////////////// events (stretch)

button.addEventListener('click', (event) => {
  mainHeading.textContent= 'Events are GREAT!';
  mainHeading.style.color= 'dodgerblue';
} );