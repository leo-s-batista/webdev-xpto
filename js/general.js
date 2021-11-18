function mobileMenuAction(e) {
    let menuOffsetRight = Number ($(".mobile-menu").css("right").replace("px", ""))
    if(menuOffsetRight == 0) closeMobileMenu()
    else openMobileMenu()
}

function openMobileMenu() {
    $(".mobile-menu").css('right', "0%")
    $(".navbar, body").addClass("menuOpen")
}
function closeMobileMenu() {
    $(".mobile-menu").css('right', "-100%")
    $(".navbar, body").removeClass("menuOpen")
}

$(document).ready(function(){
    $(".menu-trigger").click(mobileMenuAction)
})