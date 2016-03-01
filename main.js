'use strict';

$(document).ready(init);
function init(){
	$('#click').click(clickButton);
}


function clickButton(){
	var title = createUrl();
	$.ajax('http://www.omdbapi.com/?s=' + title, {
		success: function (data){
			console.log(data)
			makeCard(data);

		}
	})
}

function makeCard(data) {
	var $results = $('<div>');
	for(var i = 0; i < data.Search.length; i++) {
		var $clone = $('.cardTemplate').clone();
		$clone.find('.title').text(data.Search[i].Title);
		$clone.find('.year').text(data.Search[i].Year);
		$clone.find('.img').attr('src', data.Search[i].Poster);
		// debugger;
		$results.append($clone);
	}
	// debugger;


	// $img.attr('src', data.Poster);
	$('#output').append($results);
	
	// var $card = makeCard(data);
	// $('#output').append($card);
}

function createUrl() {
	var valueOfMov = $('#searchMovie').val().toLowerCase().trim();
	return valueOfMov;
}

// createCard(movie) {

// }






