import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';

Alpine.plugin(persist)

window.Alpine = Alpine;
Alpine.start();


document.addEventListener("DOMContentLoaded", function(){
    let bar = document.querySelectorAll('[data-progressbar]') ;
    bar.forEach (function (elem) {
        elem.classList.remove('w-1');
        elem.classList.add('w-1/2');
    })
});
