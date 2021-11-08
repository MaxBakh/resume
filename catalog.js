let opener = document.querySelector('.sizeView');
let sizes = document.querySelector('.sizes');


opener.onclick = function () {
    sizes.classList.toggle('open');
    sizes.classList.toggle('close');
};
