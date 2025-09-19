$(function(){

    $(".carousel").slick({

        infinate:true,
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false
    });

    $(".accordion-collapse").on('show.bs.collapse', function () {
        var target = $(this).parent().parent().parent().parent();
        
       // var target = $(this).attr("data-holder");
        $(".accordion-item-active").each(function(index){

            $(this).removeClass("accordion-item-active");
        })
        .promise().done( function(){ 
            $(target).addClass("accordion-item-active"); 
        });
    });




    
    $(".accordion-collapse").on('hide.bs.collapse', function () {
        var target = $(this).parent().parent().parent().parent();
        $(target).removeClass("accordion-item-active");
    });


    const exampleText = [
        "‘I’m not a tech person!’", 
        "‘I don’t have time to make presentations look nice.’", 
        "‘I can never find the fonts on my machine.’",
        "‘I’m not very creative’",
        "‘How can I make things compliant, when they’re so inconsistent?’", 
        "‘Every presentation we do, feels like it’s from a different business’",
        "‘I’m not a designer, of course my presentations look boring’"];


    const exampleTyping = new AutoTyping('.auto-type-content', exampleText, {
        typeSpeed: 50,
        deleteSpeed: 10,
        waitBeforeDelete: 2500,
        waitBetweenWords: 500,
    });
    exampleTyping.start()

    
})
