// Your code goes here

// 1st type 
let images = document.querySelectorAll('img');
images.forEach(img => img.addEventListener('mouseenter', (event) => {
    console.log('your entering an img');
    event.target.style.opacity = '0.65';
}));

// 2nd type 
images.forEach(img => img.addEventListener('mouseleave', (event) => {
    console.log('your leaving an img');
    event.target.removeAttribute('style')
}));

//3rd type
let navs = document.querySelectorAll('.nav a');
navs.forEach(nav => nav.addEventListener('mouseover', (event) => {
    console.log('your entering a nav');
    event.target.style.color = '#17A2B8';

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
}, false));

//4th type
let btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', (event) => {
    alert('Unfortunately, we are not taking signups at the moment. Please check back later for more info');
}));


