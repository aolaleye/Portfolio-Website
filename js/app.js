$(document).ready(function(){

    const mq = window.matchMedia( "(min-width: 1300px)" );

    //--- Category Filter on Portfolio Page ---//
    $(".dev-category").css({"background": "#189dac"});
    $(".dev-category").css({"color": "white"});

    var category = ['dev', 'ux', 'ui']
    var p = 0;

    $.each(category, function(p, val) {

        $("." + category[p] + "-category").on("click", function() {

            for (j = 0; j < category.length; j++) {
                $("." + category[j] + "-category").css({"background": "rgba(123, 122, 122, 0.4)"});
                $("." + category[j] + "-category").css({"color": "#444"});
                $("." + category[j]).hide();

                var selected = category[p];
            
                if (selected !== 'ui') {
                    $("." + selected).show();
                    $("." + selected + "-category").css({"background": "#189dac"});
                    $("." + selected + "-category").css({"color": "white"});
                }

                if (mq.matches) {

                    var hovered = false;
                
                    $("." + category[j] + "-category").hover(
                        function() {
                            if (hovered) {
                                $(this).animate({
                                backgroundColor: "#56b6c1",
                                color: 'white',
                                }, 1);
                            } else {
                                $(this).animate({
                                backgroundColor: "rgba(123, 122, 122, 0.4)",
                                color: '#444',
                                }, .1 );
                            }
                            hovered = !hovered;
                        }
                        
                    );

                    $("." + selected + "-category").hover(
                        function() {
                            $(this).animate({
                                backgroundColor: "#189dac",
                                color: 'white',
                                }, .1);
                        }
                    );
                }
            }
            
        });

        $(".client-access-button").click(function() {
            if ($( ".access-password" ).val() !== 'pasunchftrywps,&&&&sdfbva=0-3i50983y5') {
                $(".error-message").show();
            }
        });

    });


    //--- Reveal Langagues on Hover ---//

    // $(".languages-list").hide();
    // $(".ux .languages-list").hide();

    // var galleryItems = $("#gallery li");
    // var z = 0;

    // galleryItems.each(function(z, val) { 

    //     var selected = galleryItems[z];

    //     if (mq.matches) {
    //         $(selected).hover(
    //             function() {
    //                 $(selected).children(".dev .languages-list").toggle(300);
    //                 $(selected).children(".ui .languages-list").toggle(300);
    //             }
    //         );
    //     } 

    // });


    //--- Animations on Contact Page ---//
    $("#primary, #secondary").show("drop", 1000);


    //--- Animations on About Page ---//
    $("#about-me").show( "fold", 700 );
    $("#skills").delay( 1000 ).show("drop", 1000);

    $( "#skills" ).mouseover(function(){ 
        $( "#community" ).show( "drop", 2000 );
    });

    // $( "#skills" ).mouseover(function(){ 
    //     $( "#courses" ).show( "fold", 2000 );
    // });

    // $( "#courses" ).mouseover(function(){ 
    //     $( "#community" ).show( "drop", 3000 );
    // });

        // for mobile
        document.body.addEventListener('touchmove', function(){
            // $( "#courses" ).delay( 1000 ).show( "fold", 2000 );
            $( "#community" ).delay( 1000 ).show( "drop", 3000 );
        }, false);


    //--- Click Each Skill SVG to Reveal Corresponding Section ---//
    var skills = ['html', 'css', 'js', 'jquery', 'bootstrap', 'git', 'sass', 'less', 'heroku', 'mysql', 'csharp', 'php', 'illustrator', 'photoshop', 'dotnet', 'mongo', 'express', 'vue', 'react', 'nodejs', 'google'];

    // var i = 0;

    // $.each(skills, function(i, val) {

    //     $("#" + skills[i] + "-button").on("click", function() {

    //         $("#skills h5").css('animation', 'none');

    //         for (j = 0; j < skills.length; j++) {
    //             $("#" + skills[j] + "-button").fadeTo("slow", 0.30);
    //             $("#" + skills[j] + "-section").hide();
    //         }

    //         $("#skills button").hover(
    //             function() {
    //                 $(this).fadeTo("fast", 1);
    //             }, function() {
    //                 $(this).fadeTo(.1, 0.30);
    //             }
    //         );

    //         var selected = skills[i];
            
    //         if (selected === skills[i]) {
    //             $("#" + selected + "-section").fadeToggle(400);
    //             $("#" + selected + "-button").fadeTo("fast", 1);
    //         }
            
    //         $("#" + selected + "-button").hover(
    //             function() {
    //                 $(this).fadeTo(100, 1);
    //             }
    //         );

    //     });

    // });


    //--- Click 'Full Course List' Button to Reveal Full Course List ---//
    $("#full-list-button").click(function() {
        $(this).toggle();
        $(".short-course-list").toggle();
        $("#short-list-button").toggle();
        $(".full-course-list").toggle(600);
        $('html, body').animate({
            scrollTop: $("#courses").offset().top -150
        }, 600);
    });

    //--- Click 'Collapse' Button to Reveal Short Course List ---//
    $("#short-list-button").click(function() {
        $(this).toggle();
        $(".full-course-list").toggle();
        $("#full-list-button").toggle();
        $(".short-course-list").toggle(200);
        $('html, body').animate({
            scrollTop: $("#courses").offset().top -150
        }, 600);
    });

    //--- Click 'Back to Top' button to go to top of page
    $(".back-to-top").click(function(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
    });

}); //<---end document ready
