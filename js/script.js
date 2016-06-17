"use strict"
var sliderFirst = {
	slides:['release/img/slider1_img.jpg','release/img/slider2_img.jpg'],
	currentSlide: [0], // текущий кадр для отбражения - индекс картинки из массива
	set: function(image) { // установка нужного фона слайдеру
		document.getElementById("sliderFirst__img").style.backgroundImage = "url("+image+")";
	},
	start: function() { // запуск слайдера с картинкой с нулевым индексом
		this.set(this.slides[this.currentSlide]);
	},
	left: function() { // крутим на один кадр влево
		this.currentSlide--;
		if(this.currentSlide < [0]){
			this.currentSlide = this.slides.length-1;
		};
		this.set(this.slides[this.currentSlide]);
	},
	right: function() { // крутим на один кадр вправо
		this.currentSlide++;
		if(this.currentSlide == this.slides.length){
			this.currentSlide = [0];
		}
		this.set(this.slides[this.currentSlide]);		
	}
};


var sliderSecond = {
	slides:['release/img/slider2_img.jpg','release/img/slider3_img.jpg'],
	currentSlide: [0], // текущий кадр для отбражения - индекс картинки из массива
	set: function(image) { // установка нужного фона слайдеру
		document.getElementById("sliderSecond__img").style.backgroundImage = "url("+image+")";
	},
	start: function() { // запуск слайдера с картинкой с нулевым индексом
		this.set(this.slides[this.currentSlide]);
	},
	left: function() { // крутим на один кадр влево
		this.currentSlide--;
		if(this.currentSlide < [0]){
			this.currentSlide = this.slides.length-1;
		};
		this.set(this.slides[this.currentSlide]);
	},
	right: function() { // крутим на один кадр вправо
		this.currentSlide++;
		if(this.currentSlide == this.slides.length){
			this.currentSlide = [0];
		}
		this.set(this.slides[this.currentSlide]);		
	}
};

var sliderThird = {
	slides:['release/img/slider3_img.jpg','release/img/slider1_img.jpg'],
	currentSlide: [0], // текущий кадр для отбражения - индекс картинки из массива
	set: function(image) { // установка нужного фона слайдеру
		document.getElementById("sliderThird__img").style.backgroundImage = "url("+image+")";
	},
	start: function() { // запуск слайдера с картинкой с нулевым индексом
		this.set(this.slides[this.currentSlide]);
	},
	left: function() { // крутим на один кадр влево
		this.currentSlide--;
		if(this.currentSlide < [0]){
			this.currentSlide = this.slides.length-1;
		};
		this.set(this.slides[this.currentSlide]);
	},
	right: function() { // крутим на один кадр вправо
		this.currentSlide++;
		if(this.currentSlide == this.slides.length){
			this.currentSlide = [0];
		}
		this.set(this.slides[this.currentSlide]);		
	}
};
window.onload = function() { // запуск слайдера после загрузки документа
	sliderFirst.start();
	sliderSecond.start();
	sliderThird.start();
};




