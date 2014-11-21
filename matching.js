$(document).ready(function(){

	$box1 = $('#1');
	$box2 = $('#2');
	$box3 = $('#3');
	$box4 = $('#4');
	$box5 = $('#5');
	$box6 = $('#6');
	$box7 = $('#7');
	$box8 = $('#8');
	$box9 = $('#9');
	$box10 = $('#10');
	$box11 = $('#11');
	$box12 = $('#12');
	$box13 = $('#13');
	$box14 = $('#14');
	$box15 = $('#15');
	$box16 = $('#16');

	var clicked = 0;
	var matches = 0;
	var first_clicked = 0;
	var second_clicked = 0;

	var pictures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	var descriptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 12, 13, 14, 15];
	var long_descriptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ,13, ,14, 15];

	shuffle();

	$(document).on('click', '.box', function (sel){

		var box_id = "#" + sel.target.id;
		$(box_id).fadeTo(500, 0, function() {
			
			if(clicked == 0){

				// Just let it sit until the next one is clicked
				first_clicked = sel.target.id;
				clicked = 1;
				
			}else{

				second_clicked = sel.target.id;
				clicked = 0;

				// Check match

				// If match keep faded

				// If no match fade both back in
				var box_id1 = "#" + first_clicked;
				var box_id2 = "#" + second_clicked;

				$(box_id1).fadeTo(500, 1);
				$(box_id2).fadeTo(500, 1);
			}
		});
	});

	function shuffle(){

		// Randomize an array of 15 elements
		var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
		for(var i = 0; i < 15; i++){
		
			var index = Math.floor(Math.random() * 15);
		
			var tmp = arr[i];
			arr[i] = arr[index];
			arr[index] = tmp;
		}
	};
});