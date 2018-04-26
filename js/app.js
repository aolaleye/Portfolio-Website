$(document).ready(function(){
     
    //--- Animations on Contact Page ---//
    $( "#primary, #secondary" ).show( "bounce", 1500 );


    //--- Animations on About Page ---//
    $( "#about-me" ).show( "fold", 1000 );
    $( "#skills" ).delay( 1500 ).show( "drop", 1000 );

    $( "#skills" ).mouseover(function(){ 
        $( "#courses" ).show( "fold", 1500 );
    });

    $( "#courses" ).mouseover(function(){ 
        $( "#community" ).show( "drop", 2000 );
    });

        // for mobile
        document.body.addEventListener('touchmove', function(){
            $( "#courses" ).delay( 1000 ).show( "fold", 1500 );
            $( "#community" ).delay( 4000 ).show( "drop", 2000 );
        }, false);


    //--- Click Each Skill SVG to Reveal Corresponding Section ---//
    var skills = ['html', 'css', 'js', 'jquery', 'bootstrap', 'git', 'sass', 'less', 'heroku', 'mysql', 'csharp', 'php', 'illustrator', 'photoshop', 'dotnet', 'mongo', 'express', 'react', 'nodejs', 'google'];

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


    //--- Click 'Full Course List' Button to Reveal Full Course List ---//
    $("#full-list-button").click(function() {
        $(this).toggle();
        $(".short-course-list").toggle();
        $("#short-list-button").toggle();
        $(".full-course-list").toggle(600);
        $('html, body').animate({
            scrollTop: $("#courses").offset().top -140
        }, 600);
    });

    //--- Click 'Collapse' Button to Reveal Short Course List ---//
    $("#short-list-button").click(function() {
        $(this).toggle();
        $(".full-course-list").toggle();
        $("#full-list-button").toggle();
        $(".short-course-list").toggle(200);
        $('html, body').animate({
            scrollTop: $("#courses").offset().top -140
        }, 600);
    });

    //--- Click 'Back to Top' button to go to top of page
    $(".back-to-top").click(function(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
    });

}); //<---end document ready
