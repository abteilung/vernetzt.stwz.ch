import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';

Alpine.plugin(persist)

window.Alpine = Alpine;
Alpine.start();


document.addEventListener("DOMContentLoaded", function(){
    let bar = document.querySelectorAll('[data-progressbar]') ;
    bar.forEach(function (elem) {
        setTimeout(function() {
            elem.classList.remove('w-1');
            elem.classList.add('w-full');
        }, 2000);

    })
});
