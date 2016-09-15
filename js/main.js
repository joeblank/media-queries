// Get the elements we are looking for
var open = document.querySelector('#ham'),
    slideout = document.querySelector('.slide-out-menu'),
    close = document.querySelector('#close'),
    curatin = document.querySelector('.curtain');


close.addEventListener('click', checkModalDisplay);
open.addEventListener('click', checkModalDisplay);


function  checkModalDisplay() {
    if(ham.dataset.menu  === 'hide') {
        ham.dataset.menu = 'show';
        slideout.classList.remove('hide');
        curatin.classList.remove('hide-curatin');
        console.log(slideout.classList)

    } else if(ham.dataset.menu  === 'show'){
        ham.dataset.menu = 'hide';
        slideout.classList.add('hide');
        curatin.classList.add('hide-curatin');
    }

}

