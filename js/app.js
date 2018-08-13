$(document).ready(function(){

    //--- Category Filter on Portfolio Page ---//
    $(".dev-category").css({"background": "#7b7a7a"});

    // var category = ['dev', 'ux', 'ui']
    // var p = 0;

    // $.each(category, function(p, val) {

    //     $("." + category[p] + "-category").on("click", function() {

    //         for (j = 0; j < category.length; j++) {
    //             $("." + category[j] + "-category").css({"background": "rgba(123, 122, 122, 0.5)"});
    //             $("." + category[j]).hide();

    //             var selected = category[p];
            
    //             if (selected === category[p]) {
    //                 $("." + selected).show();
    //                 $("." + selected + "-category").css({"background": "#7b7a7a"});
    //             }

    //             var hovered = false;
            
    //             $("." + category[j] + "-category").hover(
    //                 function() {
    //                     if (hovered) {
    //                         $(this).animate({
    //                         backgroundColor: "#7b7a7a"
    //                         }, 1);
    //                     } else {
    //                         $(this).animate({
    //                         backgroundColor: "rgba(123, 122, 122, 0.5)"
    //                         }, 1 );
    //                     }
    //                     hovered = !hovered;
    //                 }
                    
    //             );

    //             $("." + selected + "-category").hover(
    //                 function() {
    //                     $(this).animate({
    //                         backgroundColor: "#7b7a7a"
    //                         }, 1);
    //                 }
    //             );
            
    //         }
            
    //     });

    // });

    $(".dev-category").click(function() {
        $(".dev-category").css({"background": "#7b7a7a"});
        $(".ux-category").css({"background": "rgba(123, 122, 122, 0.5)"});
        $(".ui-category").css({"background": "rgba(123, 122, 122, 0.5)"});
        $(".dev").show();
        $(".ux").hide();
        $(".ui").hide();
    });   

    $(".ux-category").click(function() {
        $(".ux-category").css({"background": "#7b7a7a"});
        $(".dev-category").css({"background": "rgba(123, 122, 122, 0.5)"});
        $(".ui-category").css({"background": "rgba(123, 122, 122, 0.5)"});
        $(".ux").show();
        $(".dev").hide();
        $(".ui").hide();
    });

    $(".ui-category").click(function() {
        $(".ui-category").css({"background": "#7b7a7a"});
        $(".ux-category").css({"background": "rgba(123, 122, 122, 0.5)"});
        $(".dev-category").css({"background": "rgba(123, 122, 122, 0.5)"});
        $(".ui").show();
        $(".dev").hide();
        $(".ux").hide();
    });


    //--- Reveal Langagues on Hover ---//

    // $(".languages-list").hide();
    // $(".ux .languages-list").hide();

    var galleryItems = $("#gallery li");
    var z = 0;

    galleryItems.each(function(z, val) { 

        var selected = galleryItems[z];

        const mq = window.matchMedia( "(min-width: 1300px)" );

        if (mq.matches) {
            $(selected).hover(
                function() {
                    $(selected).children(".dev .languages-list").toggle(300);
                    $(selected).children(".ui .languages-list").toggle(300);
                }
            );
        } 

    });


    //--- Animations on Contact Page ---//
    $( "#primary, #secondary" ).show( "bounce", 1500 );


    //--- Animations on About Page ---//
    $( "#about-me" ).show( "fold", 1000 );
    $( "#skills" ).delay( 1500 ).show( "drop", 1000 );

    $( "#skills" ).mouseover(function(){ 
        $( "#courses" ).show( "fold", 2000 );
    });

    $( "#courses" ).mouseover(function(){ 
        $( "#community" ).show( "drop", 3000 );
    });

        // for mobile
        document.body.addEventListener('touchmove', function(){
            $( "#courses" ).delay( 1000 ).show( "fold", 2000 );
            $( "#community" ).delay( 4000 ).show( "drop", 3000 );
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
