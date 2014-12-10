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

	var match_id = 0;

	var content = [
					{"picture": "images/greenflash.png", 			"description": "images/names/greenflash.png", 			"long_description": "A green flash occurs just before sunrise or after sunset, and will only last a couple seconds. These green rays of light are caused by the atmosphere's ability to separate the light of the sun into it's different components."},
					{"picture": "images/kuiperbelt.png", 			"description": "images/names/kuiperbelt.png", 			"long_description": "The Kuiper Belt is very similar to the astroid belt, but it is located beyond the orbit of Neptune. Objects in the Kuiper Belt are often icy masses of methane ammonia or water. Pluto is perhaps the most famous 'Kuiper Belt Object.'"},
					{"picture": "images/mooncreation.png", 			"description": "images/names/mooncreation.png", 		"long_description": "The image describes the most prominent theory of the moon's creation. Scientists believe that a Mars-sized object collided with the Earth creating massive amounts of debris. This debris collected in an orbit around the Earth eventually compacting enough to form the Moon."},
					{"picture": "images/moonreverse.png", 			"description": "images/names/moonreverse.png", 			"long_description": "The Moon has what is called 'synchronous rotation' with the Earth meaning that it orbits the Earth at the same rate it rotates around its own axis. Because of this from Earth, we only see one side of the moon. Depicted is the far side of the moon."},
					{"picture": "images/reflectingtelescope.png", 	"description": "images/names/reflectingtelescope.png", 	"long_description": "Most astronomical telescopes nowadays are reflecting telescopes because of how compact yet effective they are compared to refracting telescopes. Reflectors use concave mirrors to act as a lens reflecting the image through the same tube, extending the focal length while using less material."},
					{"picture": "images/refractingtelescope.png", 	"description": "images/names/refractingtelescope.png", 	"long_description": "Refracting telescopes are what most people imagine a telescope to be. They are often long, skinny tubes with an objective lens on the wide end and an eyepeice on the opposite end. Because these telescopes are long and straight, they are very difficult to scale up to larger sizes."},
					{"picture": "images/m82starforming.png", 		"description": "images/names/starforming.png", 			"long_description": "Shown is a starburst galaxy. Stars in these galaxies are created from cold gas that forms into large clouds. When this gas condenses a star is born."},
					{"picture": "images/andromedagalaxy.png", 		"description": "images/names/andromeda.png", 			"long_description": "The Andromeda galaxy is a classic spiral galaxy. In this ultraviolet image, the blue regions contain young massive stars."},
					{"picture": "images/hoagsobject.png", 			"description": "images/names/hoagsobject.png", 			"long_description": "The Hoag's Object is an example of a ring galaxy. Ring galaxies are thought to occur when a smaller galaxy passes through a larger spiral galaxy."}, 
				  ];

	content = shuffle(content);

	assign_boxes();

	$(document).on('click', '.box', function (sel){

		// Get a tmp box
		var tmp_box = "#" + sel.target.id;
		$tmp_box = $(tmp_box);

		// Make sure the box clicked is not the same box and that the box is not already hidden
		if(first_clicked != sel.target.id && $tmp_box.src != "images/question.png"){

			// Show the image
			$(tmp_box).attr('src', game_board[sel.target.id]);

			// Is this the first box or the second box?
			if(clicked == 0){

				// Just let it sit until the next one is clicked
				first_clicked = sel.target.id;
				clicked = 1;
				
			}else{

				// Reset values and compare
				second_clicked = sel.target.id;
				clicked = 0;
				
				// Get the two clicked boxes
				var box_id1 = "#" + first_clicked;
				var box_id2 = "#" + second_clicked;

				// Check match
				if(is_match(first_clicked, second_clicked)){

					// Remove from board
					$(box_id1).css({opacity: 0});
					$(box_id2).css({opacity: 0});

					// Update information panel for a more expanded look
					$picture.attr('src', game_questions[match_id]["picture"]);
					$description.attr('src', game_questions[match_id]["description"]);
					$long_description.text(game_questions[match_id]["long_description"]);

					// Increment matches
					matches++;
					$match_counter.text(matches);

					if(matches == 8){

						alert("You Win! Refresh the page for a new game with new questions!");
					}

				}else{
					
					// Wait 2 seconds then revert

					setTimeout(function(){

						$(box_id1).attr('src', "images/question.png");
						$(box_id2).attr('src', "images/question.png");
					},1500);
				}
			}
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

		// Gather 8 random elements for game_questions
		game_questions = content;
		game_questions = shuffle(game_questions);

		// Add pictures to the board
		for(var i = 0; i < 8; i++){
			game_board[i] = game_questions[i]["picture"];
		}

		// Add descriptions to the board
		for(var i = 8; i < 16; i++){
			game_board[i] = game_questions[i-8]["description"];
		}

		// Now we have 16 pictures, we need to mix them up
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

					match_id = i;
					matched = true;
					break;
				}
			}
		}

		return matched;
	}
});