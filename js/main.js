"use strict"
$(function(){
	let $grid = $('.grid');
	let vacType = ['Sport', 'Holiday', 'Games', 'Culture', 'Relaxation', 'Travelling'];
	let query = [];
	let amount = 8;
	function create(){
		$grid.html('');
		for (let i = 0; i < 3; i++)
			for (let i = 0; i < 3; i++){
				let rand = Math.random();
				let str = '<div'
				if (rand > 0.7 && i < 2){
					str += ' class="grid__fat"';
					i++;
				}
				str += '>';
				$grid.append(str);
			}
	}
	create();
	let $div = $('.grid div');
	
		let rand = Math.random() * vacType.length >> 0;
		$.getJSON('http://pixabay.com/api/?key=2737229-d77c828bc96e9964645663545&q='+vacType[rand]+'&image_type=photo&per_page='+$div.length, function(r){
			console.log(r);
			console.log($div.length);
			console.log(vacType[rand]);
			for (let i = 0; i < $div.length; i++){
			$div.eq(i).css('background-image', 'url('+r.hits[i].webformatURL+')')
					  .html(r.hits[i].tags);
			};
	});
	$('form').on('submit', function(e){
		e.preventDefault();
		e.stopPropagation();
		let word = $('.search__input').val() || '';
		create();
		let $div = $('.grid div');
		$.getJSON('http://pixabay.com/api/?key=2737229-d77c828bc96e9964645663545&q='+word+'&image_type=photo&per_page'+$div.length,function(r){
			console.log(r);
			for(let i = 0; i < $div.length; i++)
				$div.eq(i).css('background-image', 'url('+r.hits[i].webformatURL+')')
				.html(r.hits[i].tags);
		});
	});	
});