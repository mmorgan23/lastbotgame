var lastbot;
var clones;
var cloneboss;
var Score = 0;


//var lastbot = document.getElementById('lastbot');
//lastbot.style.position = "absolute";
//lastbot.style.left = x_pos+'600px';
//lastbot.style.top = y_pos+'100px';


//function startGame() {
   // lastbot = new component(30, 100, "../LastBot-trans", 10, 120, "image");
    //myGameArea.start();
//}


$(document).ready(function() {
	    
		$(".levelone").fadeOut(5000);

	    // Keyboard Left
        $(document).keyup(function(e) {
          switch (e.which) {
            case 37:
              $(".lb").animate({ left: "-=70px" }, "normal"); 
          }
        });

        // Keyboard Right
        $(document).keyup(function(e) {
          switch (e.which) {
            case 39:
              $(".lb").animate({ left: "+=70px" }, "normal"); 
              $(".text").replaceWith("<h3>WATCH OUT FOR THE CLONES</h3>");
              console.log("Game has begun");
          }
        });


        $(document).keyup(function(e) {
          switch (e.which) {
            case 32:
              $(".lb").animate({ left: "+=70px" }, "normal"); }
              //show function for the slime
              //you want slime to go straignt

        });


	});

