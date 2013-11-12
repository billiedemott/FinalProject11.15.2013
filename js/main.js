$( ".hamburger-toggle svg" ).click(function() {
  $( ".nav-border, .toggled-nav ul" ).toggle( "slow", function() {
    // Animation complete.
  });
});