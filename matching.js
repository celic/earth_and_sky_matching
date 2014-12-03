$(document).ready(function(){

	$box0 = $('#0');
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

	$match_counter = $('#matches');

	$picture = $('#picture');
	$description = $('#description');
	$long_description = $('#long_description');

	var clicked = 0;
	var matches = 0;
	var first_clicked = -1;
	var second_clicked = -1;

	var game_questions = [];
	var game_board = [];

	var content = [
					{"picture": "images/greenflash.png", "description": 110, "long_description": "A green flash occurs just before sunrise or after sunset, and will only last a couple seconds. These green rays of light are caused by the atmosphere's ability to separate the light of the sun into it's different components."},
					{"picture": "images/kuiperbelt.png", "description": 111, "long_description": "The Kuiper Belt is very similar to the astroid belt, but it is located beyond the orbit of Neptune. Objects in the Kuiper Belt are often icy masses of methane ammonia or water. Pluto is perhaps the most famous 'Kuiper Belt Object.'"},
					{"picture": "images/mooncreation.png", "description": 112, "long_description": "The image describes the most prominent theory of the moon's creation. Scientists believe that a Mars-sized object collided with the Earth creating massive amounts of debris. This debris collected in an orbit around the Earth eventually compacting enough to form the Moon."},
					{"picture": "images/moonreverse.png", "description": 113, "long_description": "The Moon has what is called 'synchronous rotation' with the Earth meaning that it orbits the Earth at the same rate it rotates around its own axis. Because of this from Earth, we only see one side of the moon. Depicted is the far side of the moon."},
					{"picture": "images/reflectingtelescope.png", "description": 114, "long_description": "Most astronomical telescopes nowadays are reflecting telescopes because of how compact yet effective they are compared to refracting telescopes. Reflectors use concave mirrors to act as a lens reflecting the image through the same tube, extending the focal length while using less material."},
					{"picture": "images/refractingtelescope.png", "description": 115, "long_description": "Refracting telescopes are what most people imagine a telescope to be. They are often long, skinny tubes with an objective lens on the wide end and an eyepeice on the opposite end. Because these telescopes are long and straight, they are very difficult to scale up to larger sizes."},
					{"picture": 6, "description": 116, "long_description": 6},
					{"picture": 7, "description": 117, "long_description": 7},
					{"picture": 8, "description": 118, "long_description": 8},
				  ];

	content = shuffle(content);

	assign_boxes();

	$(document).on('click', '.box', function (sel){

		// Get a tmp box
		var tmp_box = "#" + sel.target.id;
		$tmp_box = $(tmp_box);

		// Make sure the box clicked is not the same box and that the box is not already hidden
		if(first_clicked != sel.target.id && $tmp_box.css('opacity') != 0){

			var box_id = "#" + sel.target.id;
			$(box_id).fadeTo(500, 0, function() {

				// Fade in the hidden box
				$(box_id).src = game_board[sel.target.id];
				$(box_id).fadeTo(500, 1);

				// Is this the first box or the second box?
				if(clicked == 0){

					// Just let it sit until the next one is clicked
					first_clicked = sel.target.id;
					clicked = 1;
					
				}else{

					// Reset values and compare
					second_clicked = sel.target.id;
					clicked = 0;

					// Check match
					if(is_match(first_clicked, second_clicked)){

						// Keep faded

						// Update information panel for a more expanded look
						$long_description.text("hi");

						// Increment matches
						matches++;
						$match_counter.text(matches);

						if(matches == 8){

							alert("You Win!\nRefresh the page for a new game\nwith new questions!");
						}

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

	function is_match(first, second){

		// Store the clicked values to variables
		var content1 = game_board[first];
		var content2 = game_board[second];

		var matched = false;

		// Search for the picture and description at the same index in the game questions
		for(var i = 0; i < game_questions.length; i++){

			// If the picture has been found
			if(game_questions[i]["picture"] == content1 || 
			   game_questions[i]["picture"] == content2){

				// If the description has been found
				if(game_questions[i]["description"] == content1 || 
				   game_questions[i]["description"] == content2){

					matched = true;
					break;
				}
			}
		}

		return matched;
	}
});