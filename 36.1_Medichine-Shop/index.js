$(function () {
    $(".dropbtn").click(function(){
        $(".dropdown_content").stop().toggle("slow");
    })
});


$(function () {
    const ChangeNavOnScroll = () => {
        $('nav').toggleClass('nav_bg',$(this).scrollTop()>80);
    };
    
    $(function () {
        $(window).scroll(ChangeNavOnScroll) // run on scroll
        ChangeNavOnScroll(); // run when index.js is loaded
    });

});
























