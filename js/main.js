 // ========== HAMBURGER TOGGLE TO NAV ============= 

$( ".hamburger-toggle svg" ).click(function() {
  $( ".nav-border, .toggled-nav ul" ).toggle( "slow", function() {
    // Animation complete.
  });
 });

/* ========== STARRY JAZZINESS and GOOD THINGS ==============*/

// $('.starry-awesomeness').starscroll(16,3,50,5,5,[255,255,255],true,true);

/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */


$(document).ready(init);
//init();
function init() {
//	alert("hi")

	$.fn.scrollPath("getPath")
		// Move to 'name-intro' element
		.moveTo(400, 50, {name: ""})
		.lineTo(400, 800, {name: "description"})
		//Line to 'copy-movement-analogy' element
		.lineTo(400, 800, {name: "description"})
		.arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
		
		.lineTo(600, 1600)
		.lineTo(2300,1600)
		.lineTo(2550, 1600)
		// Arc up while rotating
		.arc(1800, 1000, 600, Math.PI/2, 0, true, {rotate: Math.PI/2 })
		//Line to 'copy-movement-analogy' element
		.lineTo(2400, 750)
		// Rotate in place
		// .rotate(3*Math.PI/2, {
			// name: "rotations-rotated"
		// })

		.lineTo(1300,400)
	
		// Continue upwards to 'source'
		.lineTo(2400, -700) 
			// name: "source"

		// Small arc downwards
		.arc(2250, -700, 600, 0, -Math.PI/2, true)

		//Line to 'follow'
		.lineTo(1350, -850)
			// name: "follow"
		// })
		// Arc and rotate back to the beginning.
		// .arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

		.lineTo(1350, -2000)
		// .arc( 400, 500, 400, Math.PI/2, -Math.PI/2)
		// Line to 'syntax' element
	
		
		// Arc down and line to 'syntax'
		// .arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
		.lineTo(300, -1600)
		.lineTo(300, -2200)
		.lineTo(900, -2600)
		.lineTo (1200,-2900)
		.moveTo(-800, 50, {name: "start"})
		.lineTo(-800, 800, {name: "description"})
		.lineTo(-1200,1000)
		.moveTo(-1250,700)
		.lineTo (-1000,2900)
		// .arc(-1300, 2700, 600, 0, -Math.PI/2, true
		.lineTo (-300,1700)
		// want arc here

		// Arc and rotate back to the beginning.
		//.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});






	


		// Arc up while rotating
		// .arc(1800, 1000, 600, Math.PI/2, 0, true, {rotate: Math.PI/2 })
		// // Line to 'rotations'
		// .lineTo(2400, 750, {
		// 	name: "rotations"
		// })
		// // Rotate in place
		// .rotate(3*Math.PI/2, {
		// 	name: "rotations-rotated"
		// })
		// Continue upwards to 'source'
		// .lineTo(2400, -700, {
		// 	name: "source"
		// })
		// Small arc downwards
		// .arc(2250, -700, 150, 0, -Math.PI/2, true)

		//Line to 'follow'
		// .lineTo(1350, -850, {
		// 	name: "follow"
		// })
		// Arc and rotate back to the beginning.
		//.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	 // ========== CALLING THE SCROLLPATH PLUGIN==============*//
	$(".wrapper").scrollPath({drawPath: true, wrapAround: false});

//	$(".wrapper").scrollPath({drawPath: true, wrapAround: false});
}

//DELETE
/* ===================================================================== */
/*

	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});
*/
//DELETE
	/* ===================================================================== */


	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

	$(".tweet").click(function(e) {
		open(this.href, "", "width=550, height=450");
		e.preventDefault();
	});

	$.getJSON("http://cdn.api.twitter.com/1/urls/count.json?callback=?&url=http%3A%2F%2Fjoelb.me%2Fscrollpath",
			function(data) {
				if(data && data.count !== undefined) {
					$(".follow .count").html("the " + ordinal(data.count + 1) + " kind person to");
				}
			});
	// }

//DELETE
/* ===================================================================== */
/*
function highlight(element) {
	if(!element.hasClass("highlight")) {
		element.addClass("highlight");
		setTimeout(function() { element.removeClass("highlight"); }, 2000);
	}
}
function ordinal(num) {
	return num + (
		(num % 10 == 1 && num % 100 != 11) ? 'st' :
		(num % 10 == 2 && num % 100 != 12) ? 'nd' :
		(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
	);
}
*/
/* ========== DEFINING THE FORM VALIDATION ============= */
/*
$('form').submit (
	function() {
		console.log('clicked');
		var name = $('first-name-input').val();

		var isChecked = $('input: checked').length;

		var isValid = 1; 

		if (name != "" && email != "") alert ('validated')

		if (name == " ") isValid = 0; 
	    else if (email == "") isValid =0; 


		var email = $('last-name-input').val();
		console.log($('email-input').val());
		return false; 
		// way to prevent the default behavior from happening; 
		// delays submission
	});
*/
