import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";


class Animation {
	// todo: optimize the no of elements according to the screen size
	cols = 11;
	rows = 6;

	lineWidth = 40;
	spacingHorizontal = 80;
	spacingVertical = 80;
	strokeColor = getComputedStyle(document.documentElement).getPropertyValue('--lines');
	strokeWidth = 2.35;

	svgMargin = 40;
	svgHeight = 0;
	svgWidth = 0;

	lines = [];
	screen = {
		width: window.innerWidth,
		height: window.innerHeight
	};
	mouse = {
		x: window.innerWidth / 2,
		y: window.innerHeight / 2
	};
	mouseStored = Object.assign({}, this.mouse);

	constructor(selector) {
		this.svg = document.querySelector(selector);

		this.svgWidth = this.cols * this.lineWidth + 2 * this.svgMargin + (this.cols - 1) * this.spacingHorizontal;
		this.svgHeight = this.rows + 2 * this.svgMargin + (this.rows - 1) * this.spacingVertical;

		this.svg.setAttribute("viewBox", `0 0 ${this.svgWidth} ${this.svgHeight}`);
		this.svg.setAttribute("stroke-linecap", "square");

		this.addEventListeners();

		// Draw all the lines
		this.draw();
		// And animate them if the user is fine with it
		window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? this.animate() : null;
	}

	addEventListeners() {
		let self = this;
		// Don't redraw everything, only recalculate the centers of all arrows
		window.addEventListener("resize", function() {
			self.screen.width = window.innerWidth;
			self.screen.height = window.innerHeight;
			self.setLineCenters();
		});
	}

	getPercentage(partial, total) {
		return (partial * 100) / total;
	}

	draw() {
		for(var i = 0; i < this.rows; i++) {
			for(var j = 0; j < this.cols; j++) {
				// We're drawing the initial lines horizontally
				let c = new Line(
					this.svgMargin + j*this.lineWidth + j*this.spacingHorizontal,
					this.svgMargin + (j+1)*this.lineWidth + j*this.spacingHorizontal,
					this.svgMargin + i*this.spacingVertical,
					this.svgMargin + i*this.spacingVertical,
					this.strokeColor,
					this.strokeWidth
				);

				// Set a transform origin and add the HTML element to the SVG
				const cElement = c.getElement();
				gsap.set(cElement, {transformOrigin: "50% 50%"});
				this.svg.appendChild(cElement);

				this.lines.push(cElement);
			}
		}

		this.setLineCenters();
	}

	setMouseCoords(event) {
		this.mouse.x = event.clientX;
		this.mouse.y = event.clientY;
	}

	setLineCenters() {
		this.lines.forEach(line => {
			// Get the center of the line
			// Instead of mapping svg coords to the screen position, get the position on the actual screen using boundingRect
			const boundingRect = line.getBoundingClientRect();
			line.center = {
				x: boundingRect.x + boundingRect.width / 2,
				y: boundingRect.y + boundingRect.height / 2
			};
		})
	}

	animate() {
		// Listen for the mouse movements
		window.addEventListener("mousemove", this.setMouseCoords.bind(this));
		// And use the ticker to update the rotation accordingly
		gsap.ticker.add(this.setLineRotation.bind(this));
	}

	setLineRotation() {
		// Don't do anything if the cursor's position is the same as in the previous tick
		if (this.mouseStored.x === this.mouse.x && this.mouseStored.y === this.mouse.y) return;

		this.lines.forEach(line => {
			// Calculate the rotation, convert it to deg, and offset it to account for the lines' initial direction
			let angle = Math.atan2(this.mouse.x - line.center.x, -(this.mouse.y - line.center.y) ) * (180 / Math.PI) - 90;
			let distance = Math.sqrt(Math.pow((line.center.x - this.mouse.x) / this.screen.width, 2) + Math.pow((line.center.y - this.mouse.y) / this.screen.height, 2));

			gsap.to(
				line, 
				{
					// Use the shortest way to get to the destination angle
					rotation: angle + "_short",
					scaleX: 1.5 - distance,
					scaleY: this.strokeWidth - 1.55 * distance
				}
			);
		});

		// Store the mouse position for the next tick
		this.mouseStored.x = this.mouse.x;
		this.mouseStored.y = this.mouse.y;
	}
}

class Line {
	x1;
	x2;
	y1;
	y2;
	strokeColor;
	strokeWidth;
	element;

	constructor(x1, x2, y1, y2, strokeColor, strokeWidth) {
		this.x1 = x1;
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;
		this.strokeColor = strokeColor;
		this.strokeWidth = strokeWidth;
		this.element = document.createElementNS("http://www.w3.org/2000/svg", 'line');

		this.setElement();
	}

	getElement() {
		return this.element;
	}

	setElement(x1, x2, y1, y2, strokeColor, strokeWidth) {
		this.element.setAttribute("x1", x1 ? x1 : this.x1);
		this.element.setAttribute("x2", x2 ? x2 : this.x2);
		this.element.setAttribute("y1", y1 ? y1 : this.y1);
		this.element.setAttribute("y2", y2 ? y2 : this.y2);
		this.element.style.stroke = strokeColor ? strokeColor : this.strokeColor;
		this.element.style.strokeWidth = strokeWidth ? strokeWidth : this.strokeWidth;
	}
}

const animation = new Animation("#animation");