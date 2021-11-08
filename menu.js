let button = document.querySelector('.btn');
let btn = document.querySelector('.nav_close');
let nav = document.querySelector('.nav');


button.onclick = function () {
    nav.classList.toggle('open');
    nav.classList.toggle('close');
};


btn.onclick = function () {
    nav.classList.toggle('close');
};