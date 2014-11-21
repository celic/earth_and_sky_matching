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

	var game_questions = [];
	var game_board = [];

	var content = [
					{"picture": 0, "description": 0, "long_description": 0},
					{"picture": 1, "description": 1, "long_description": 1},
					{"picture": 2, "description": 2, "long_description": 2},
					{"picture": 3, "description": 3, "long_description": 3},
					{"picture": 4, "description": 4, "long_description": 4},
					{"picture": 5, "description": 5, "long_description": 5},
					{"picture": 6, "description": 6, "long_description": 6},
					{"picture": 7, "description": 7, "long_description": 7},
					{"picture": 8, "description": 8, "long_description": 8},
					{"picture": 9, "description": 9, "long_description": 9},
					{"picture": 10, "description": 10, "long_description": 10},
					{"picture": 11, "description": 11, "long_description": 11},
					{"picture": 12, "description": 12, "long_description": 12},
					{"picture": 13, "description": 13, "long_description": 13},
					{"picture": 14, "description": 14, "long_description": 14},
					{"picture": 15, "description": 15, "long_description": 15},
				  ];

	content = shuffle(content);

	assign_boxes();

	$(document).on('click', '.box', function (sel){

		// Get a tmp box
		var tmp_box = "#" + sel.target.id;
		$tmp_box = $(tmp_box);

		// Make sure the box clicked is not the same box and that the box is not hidden
		if(first_clicked != sel.target.id && $tmp_box.css('opacity') != 0){

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
					if(is_match()){

						// Keep faded

					}else{
						
						// Revert fade
						var box_id1 = "#" + first_clicked;
						var box_id2 = "#" + second_clicked;

						$(box_id1).fadeTo(500, 1);
						$(box_id2).fadeTo(500, 1);
						
					}


				}
			});
		}
	});

	function shuffle(array){

		// Randomize an array of elements
		for(var i = 0; i < array.length; i++){
		
			var index = Math.floor(Math.random() * array.length);
		
			var tmp =  array[i];
			array[i] = array[index];
			array[index] = tmp;
		}

		// Testing purposes
		//for(var i = 0; i < array.length; i++){
		//	console.log("------");
		//	console.log(array[i]);
		//}

		return array;
	};

	function assign_boxes(){

		// Pick first 8 elements to be on the grid (to mix up each game)
		for(var i = 0; i < 8; i++){

			game_questions[i] = content[i];
			game_board[i] = content[i]["picture"];
			game_board[i+8] = content[i]["description"];
		}

		// Now we have 16 boxes and 16 pictures, we need to mix them up
		game_board = shuffle(game_board);
	}

	function is_match(){

		if(Math.random() > .5){

			return true;
		}else{
			return false;
		}
	}
});