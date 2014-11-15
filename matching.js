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

	$(document).on('click', '.box', function (sel){

		var box_id = "#" + sel.target.id;
		$(box_id).fadeTo(500, 0, function() {
			if(clicked == 0){

			// Just let it sit until the next one is clicked
			first_clicked = sel.target.id;
			clicked = 1;
			
			}else{

				// Delay
				//sleep(2000);

				second_clicked = sel.target.id;
				clicked = 0;

				// Check match

				// If no match fade both back in
				var box_id1 = "#" + first_clicked;
				var box_id2 = "#" + second_clicked;

				$(box_id1).fadeTo(500, 1);
				$(box_id2).fadeTo(500, 1);
			}
		});
	});

	function sleep(milliseconds){
	 	var start = new Date().getTime();
		for(var i = 0; i < 1e7; i++){
	    	if((new Date().getTime() - start) > milliseconds){
	      		break;
	    	}
	  	}
	}
});