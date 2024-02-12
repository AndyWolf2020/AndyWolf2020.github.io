const gallery = document.querySelectorAll('img');

for (let index = 0; index < gallery.length; index++) {
    const element = gallery[index];
    element.addEventListener('click', expand);
    element.addEventListener('click', show);
}

function expand(event) {
    const smallImage = event.currentTarget;
    const bigImage = document.querySelector(".big");
    smallImage.classList.remove('small');
    smallImage.classList.add('big');
    bigImage.classList.remove('big');
    bigImage.classList.add('small');
}

function show(event) {
    const hiddenAside = document.getElementById('aside#' + event.currentTarget);
    const shownAside = document.querySelector(".shown");
    hiddenAside.classList.add('shown');
    hiddenAside.classList.remove('hide');
    shownAside.classList.remove('shown');
    shownAside.classList.add('hide');
}