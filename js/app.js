
//--- Click Each Skill to Reveal Corresponding Section ---//
$(document).ready(function(){
    
var skills = ['html', 'css', 'js', 'jquery', 'bootstrap', 'git', 'sass', 'less', 'heroku', 'mysql', 'csharp', 'php', 'dotnet', 'mongo', 'express', 'react', 'nodejs', 'google'];

var i = 0;

$.each(skills, function(i, val) {

    $("#" + skills[i] + "-button").on("click", function() {

        $("#skills h5").css('animation', 'none');

        for (j = 0; j < skills.length; j++) {
            $("#" + skills[j] + "-button").fadeTo("slow", 0.30);
            $("#" + skills[j] + "-section").hide();
        }

        $("#skills button").hover(
            function() {
                $(this).fadeTo("fast", 1);
            }, function() {
                $(this).fadeTo(.1, 0.30);
            }
        );

        var selected = skills[i];
        
        if (selected === skills[i]) {
            $("#" + selected + "-section").fadeToggle(400);
            $("#" + selected + "-button").fadeTo("fast", 1);
        }
        
        $("#" + selected + "-button").hover(
            function() {
                $(this).fadeTo(100, 1);
            }
        );

    });

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

  $(".back-to-top").click(function(){
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 1000);
  });

}); //<---end document ready
