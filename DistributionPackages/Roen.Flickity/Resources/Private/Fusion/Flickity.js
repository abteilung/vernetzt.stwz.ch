import "flickity/dist/flickity.min.css";
import Flickity from 'flickity-as-nav-for';


// var hasSlider = document.getElementsByClassName('remoteSliders');
// if (hasSlider.length > 0) {

// 	var flktyA = new Flickity('.remoteSlider', {
//         cellSelector: '.slide',
//         contain: true,
//         groupCells: false,
//         pageDots: false,
//         prevNextButtons: false
// 	});

// 	var flktyB = new Flickity('.sliderRemote', {
//         cellSelector: '.slide',
//         groupCells: true,
//         pageDots: true,
// 	    asNavFor: '.remoteSlider',
//         prevNextButtons: false
// 	});

// }

// var hasFader = document.getElementsByClassName('fader');
// if (hasFader.length > 0) {

// 	var flkty = new Flickity('.fader', {
// 		// options...
// 		fade: true,
// 	});

// }


// var hasNeuImSortiment = document.getElementsByClassName('product-updates');
// if (hasNeuImSortiment.length > 0) {

// 	var flkty = new Flickity('.product-updates', {
// 		// options...
//         cellSelector: '.product',
//         groupCells: true,
//         cellAlign: 'left',
//         pageDots: true,
//         prevNextButtons: false
// 	});
// }


var hasHeaderSlider = document.getElementsByClassName('headerSlider');
if (hasHeaderSlider.length > 0) {

	const flickity = (() => {

		console.log('flickity for Header is here');

		// external js: flickity.pkgd.js
		var utils = window.fizzyUIUtils;

		var headerSlider = document.querySelector('.headerSlider');
		var flkty = new Flickity(headerSlider, {
			// sync: '.textBox',
			fade: false,
			pageDots: false,
			draggable: (document.querySelector('.neos-backend') ? false : true ),
			prevNextButtons: (document.querySelector('.neos-backend') ? true : false ),
			cellSelector: '.carousel-cell',
			autoPlay: 10000

		});

		// var textBox = document.querySelector('.textBox');
		// var flkty2 = new Flickity( textBox, {
		//     // sync: '.headerSlider',
		//     asNavFor: '.headerSlider',
		//     fade: false,
		//     contain: true,
		//     pageDots: false,
		//     prevNextButtons: false,
		//     cellSelector: '.carousel-cell'
		// });

		// elements
		var cellsButtonGroup = document.querySelector('.button-group--cells');
		var cellsButtons = cellsButtonGroup.querySelectorAll('.cellButton');

		// update buttons on select
		flkty.on('select', function () {
			var previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
			var selectedButton = cellsButtonGroup.children[flkty.selectedIndex];
			previousSelectedButton.classList.remove('is-selected');
			selectedButton.classList.add('is-selected');
		});

		// cell select
		for (const [i, cellsButton] of cellsButtons.entries()) {
			cellsButton.addEventListener('click', function (event) {
				flkty.select(i);
			})
		}


		// // previous
		// var previousButton = document.querySelector('.button--previous');
		// previousButton.addEventListener( 'click', function() {
		//     flkty.previous();
		// });
		// // next
		// var nextButton = document.querySelector('.button--next');
		// nextButton.addEventListener( 'click', function() {
		//     flkty.next();
		// });


		var carouselStatus = document.querySelector('.carousel-status');

		function updateStatus() {
			var slideNumber = flkty.selectedIndex + 1;
			carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
		}
		updateStatus();

		flkty.on('select', updateStatus);


	})();

}



// function carousel() {
//     return {
//         active: 0,
//         init() {
//             var flkty = new Flickity(this.$refs.carousel, {
//                 wrapAround: true
//             });
//             flkty.on('change', i => this.active = i);
//         }
//     }
// }
