$(document).ready(function(){

	$box1 = $('#box1');
	$box2 = $('#box2');
	$box3 = $('#box3');
	$box4 = $('#box4');
	$box5 = $('#box5');
	$box6 = $('#box6');
	$box7 = $('#box7');
	$box8 = $('#box8');
	$box9 = $('#box9');
	$box10 = $('#box10');
	$box11 = $('#box11');
	$box12 = $('#box12');
	$box13 = $('#box13');
	$box14 = $('#box14');
	$box15 = $('#box15');
	$box16 = $('#box16');

	var clicked = 0;
	var matches = 0;

	$(document).on('click', '.box', function (sel){

		var box_id = "#" + sel.target.id;

		$(box_id).fadeTo(600, 0);

	});

});