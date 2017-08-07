
//--- Click Each Skill to Reveal Corresponding Section ---//
$(document).ready(function(){
    $("#html-button").click(function(){
        $("#html-section").fadeToggle(400);
        $("#css-section").hide();
        $("#js-section").hide();
        $("#jquery-section").hide();
        $("#bootstrap-section").hide();
        $("#git-section").hide();
    });

    $("#css-button").click(function(){
        $("#css-section").fadeToggle(400);
        $("#html-section").hide();
        $("#js-section").hide();
        $("#jquery-section").hide();
        $("#bootstrap-section").hide();
        $("#git-section").hide();
    });

    $("#js-button").click(function(){
        $("#js-section").fadeToggle(400);
        $("#css-section").hide();
        $("#html-section").hide();
        $("#jquery-section").hide();
        $("#bootstrap-section").hide();
        $("#git-section").hide();
    });

    $("#jquery-button").click(function(){
        $("#jquery-section").fadeToggle(400);
        $("#css-section").hide();
        $("#js-section").hide();
        $("#html-section").hide();
        $("#bootstrap-section").hide();
        $("#git-section").hide();
    });

    $("#bootstrap-button").click(function(){
        $("#bootstrap-section").fadeToggle(400);
        $("#css-section").hide();
        $("#js-section").hide();
        $("#jquery-section").hide();
        $("#html-section").hide();
        $("#git-section").hide();
    });

    $("#git-button").click(function(){
        $("#git-section").fadeToggle(400);
        $("#css-section").hide();
        $("#js-section").hide();
        $("#jquery-section").hide();
        $("#html-section").hide();
        $("#bootstrap-section").hide();
    });

  //--- Fade Other Skills while Not Selected ---//
$(".selected-button").click(function(){
  $(".nonselected-button").fadeTo("slow", 0.10);
  // $("#html-button").fadeTo("slow", 0.10);
  // $("#css-button").fadeTo("slow", 0.10);
  // $("#js-button").fadeTo("slow", 0.10);
  // $("#jquery-button").fadeTo("slow", 0.10);
  // $("#bootstrap-button").fadeTo("slow", 0.10);
  // $("#git-button").fadeTo("slow", 0.10);
});


  //--- Click Button to Reveal Full Course List ---//
  $("#full-list-button").click(function() {
    $(this).toggle();
    $(".short-course-list").toggle();
    $("#short-list-button").toggle();
    $(".full-course-list").toggle(600);
  });

  //--- Click Button to Reveal Short Course List ---//
  $("#short-list-button").click(function() {
    $(this).toggle();
    $(".full-course-list").toggle();
    $("#full-list-button").toggle();
    $(".short-course-list").toggle(200);
  });

}); //<---end document ready
