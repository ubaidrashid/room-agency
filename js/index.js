// firstslider
ubaidOne = document.querySelector('.ubaid1')
ubaidNne = document.querySelector('#ubaid1')
ubaidTwo = document .querySelector('.ubaid2');
ubaidWwo = document .querySelector('#ubaid2');


// secondslider
ubaidThree = document.querySelector('.ubaid3');
ubaidWhree = document.querySelector('#ubaid3');
ubaidFour = document.querySelector('.ubaid4');
ubaidWour = document.querySelector('#ubaid4');


// thirdslider
ubaidFive = document.querySelector('.ubaid5');
ubaidWive = document.querySelector('#ubaid5');
ubaidSix = document.querySelector('.ubaid6');
ubaidWix = document.querySelector('#ubaid6');


oneSlide = document.querySelector('.one-slide')
secondSlide = document.querySelector('.second-slide')
thirdSlide = document.querySelector('.third-slide')
none3 = document.querySelector('.none3')
menu = document.querySelector('.menu')
none2 = document.querySelector('.none2')
ul = document.querySelector('.ul')
closeMenu = document.querySelector('.list-item0');


// menu
menu.addEventListener('click',()=>{
    ul.classList.toggle('none2')
})

//close menu
closeMenu.addEventListener('click',()=>{
    ul.classList.add('none2')
    
})






// firstslider
ubaidNne.addEventListener('click', () => {
    oneSlide.classList.add('none3');
    thirdSlide.classList.toggle('none3');
    // secondSlide.classList.toggle('none3');
});
ubaidOne.addEventListener('click', () => {
    oneSlide.classList.add('none3');
    thirdSlide.classList.toggle('none3');
    // secondSlide.classList.toggle('none3');
});
ubaidTwo.addEventListener('click', () => {
    oneSlide.classList.add('none3');
    // thirdSlide.classList.toggle('none3');
    secondSlide.classList.toggle('none3');
});
ubaidWwo.addEventListener('click', () => {
    oneSlide.classList.add('none3');
    // thirdSlide.classList.toggle('none3');
    secondSlide.classList.toggle('none3');
});




// secondslider
ubaidThree.addEventListener('click', () => {
    oneSlide.classList.toggle('none3');
    // thirdSlide.classList.add('none3');
    secondSlide.classList.add('none3');
});
ubaidWhree.addEventListener('click', () => {
    oneSlide.classList.toggle('none3');
    // thirdSlide.classList.add('none3');
    secondSlide.classList.add('none3');
});
ubaidWour.addEventListener('click', () => {
    thirdSlide.classList.toggle('none3');
    // oneSlide.classList.add('none3');
    secondSlide.classList.add('none3');
});
ubaidFour.addEventListener('click', () => {
    thirdSlide.classList.toggle('none3');
    // oneSlide.classList.add('none3');
    secondSlide.classList.add('none3');
});



// thirdslider
ubaidWive.addEventListener('click', () => {
    secondSlide.classList.toggle('none3');
    // oneSlide.classList.add('none3');
    thirdSlide.classList.add('none3');
});
ubaidFive.addEventListener('click', () => {
    secondSlide.classList.toggle('none3');
    // oneSlide.classList.add('none3');
    thirdSlide.classList.add('none3');
});
ubaidWix.addEventListener('click', () => {
    thirdSlide.classList.add('none3');
    // secondSlide.classList.toggle('none3');
    oneSlide.classList.toggle('none3');
});
ubaidSix.addEventListener('click', () => {
    thirdSlide.classList.add('none3');
    // secondSlide.classList.toggle('none3');
    oneSlide.classList.toggle('none3');
});