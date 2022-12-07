let button = document.querySelectorAll('button');
let block = document.querySelector('#block');

button[0].addEventListener(
    'click',
    () => {
        block.classList.toggle('toggle');
        block.classList.toggle('none');
        button[0].classList.toggle('none');
    }
)

button[1].addEventListener(
    'click',
    () => {
        block.classList.toggle('toggle');
        block.classList.toggle('none');
        button[0].classList.toggle('none');
    }
)