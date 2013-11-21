 // ========== HAMBURGER TOGGLE TO NAV ============= 

$( ".hamburger-toggle svg" ).click(function() {
  $( ".nav-border, .toggled-nav ul" ).toggle( "slow", function() {
    // Animation complete.
  });
 });

/* ========== STARRY JAZZINESS and GOOD THINGS ==============*/

$('.starry-awesomeness').starscroll(16,3,50,5,5,[255,255,255],true,true);

/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */


$(document).ready(init);
//init();
function init() {
//	alert("hi")

	$.fn.scrollPath("getPath")
		// Move to 'name-intro' element
		.moveTo(400, 50, {name: "name-intro"})

		//Line to 'copy-movement-analogy' element
		.lineTo(400, 800, {name: "description"})
		.arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)

		// Line to 'thesis-amherst'
		.lineTo(600, 1600)
		.lineTo(2300,1600)

		// Line to 'transition-hedge-fund'
		.lineTo(2550, 1600)
		// Arc up while rotating
		.arc(1800, 1000, 600, Math.PI/2, 0, true, {rotate: Math.PI/2 })
		// Rotate in place
		// .rotate(3*Math.PI/2, {
			// name: "rotations-rotated"
		// })

        //Line to 'lawschool-finance' element
		.lineTo(2400, 750)
		.lineTo(1300,400)
	
		// Line to 'waning-excitement' element
		.lineTo(2400, -700) 

		// Small arc downwards
		.arc(2250, -700, 600, 0, -Math.PI/2, true)

		//Line to 'side-project-lesson' element
		.lineTo(1350, -850)

		//Line to 'tap-farm-description' element
		.lineTo(1350, -2000)
		// .arc( 400, 500, 400, Math.PI/2, -Math.PI/2)
		// Line to 'syntax' element
		// Arc down and line to 'syntax'
		// .arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
		.lineTo(300, -1600)
		.lineTo(300, -2200)
		.lineTo(900, -2600)
		.lineTo (1200,-2900)
		.lineTo (1600,-3100)

		// Move to 'fast-forward-text' element
		.moveTo(400, 50)
		.lineTo(-800, 1100)
		// ****************I WANT A ROTATE & ARC HERE*******************

		// Line to 'spoutlets-description'
		.lineTo(-1200,1900)
		.lineTo(-1700,900)
		.lineTo(-2100,300)
		.lineTo(-2100,-600)
		.lineTo(-2100,-900)

		// .arc(-1700, 900, 300, -Math.PI/2, Math.PI/2, true)

		// Line to 'ws-description'
		.lineTo(-2300, -1900)
		// Line to 'conclusion'
		.lineTo(-2300, -2200)
		// Line to 'epilogue'
		.lineTo(-2300,-2500)
		// Arc and rotate back to the beginning.
		.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	 // ========== CALLING THE SCROLLPATH PLUGIN==============*//
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

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

/*
	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

*/
	$(".tweet").click(function(e) {
		open(this.href, "", "width=550, height=450");
		e.preventDefault();
	});

	$.getJSON("http://cdn.api.twitter.com/1/urls/count.json?callback=?&url=http%3A%2F%2Fjoelb.me%2Fscrollpath",
			function(data) {
				if(data && data.count !== undefined) {
					// $(".follow .count").html("the " + ordinal(data.count + 1) + " kind person to");
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

function validateForm() {
	var formBody = $('.contact-form-body');

	if ( formBody.length == 0 ) return;

	$('.form-horizontal').submit( function() {
		var name = $( this ).find('.first-name-input').val();
		var lastname = $( this ).find('.last-name-input').val();
		var email = $( this ).find( '.email-input' ).val();

		var numerrors = 0;
		if ( name == "" ) {
			// error condition
			alert('no name!');
			numerrors++;
		}
		if ( lastname == "" ) {
			alert('no last name')
			numerrors++;
		} 
		if ( email == "" ) {
			alert('no email!');
			numerrors++;
		}

		if ( numerrors == 0 ) {
			// SEND AJAX request
			alert('valid!')
		}


		return false;
	});
}

validateForm();
