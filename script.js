$(".header").hide();

$(".light-switch").click(function() {
    $(".header").slideDown();
    $(".light-switch").slideUp();
});

$(".arrowO").hide();

$(".forme").hide();

$(".arrowT").click(function() {
    if( $(".vote").is(":visible") ) {
        $(".forme").slideToggle();
        $(".vote").slideToggle();
        $(".arrowO").slideToggle();
        $(".arrowT").slideToggle();
    }
});

$(".arrowO").click(function() {
    if( $(".forme").is(":visible") ) {
        $(".forme").slideToggle();
        $(".vote").slideToggle();
        $(".arrowO").slideToggle();
        $(".arrowT").slideToggle();
    }
});

$(".Don").hide();
$(".BUT").click(function() {
    if( $(".BUT").is(":visible") ) {
        $(".BUT").slideToggle();
        $(".Don").slideToggle();
    }
});













