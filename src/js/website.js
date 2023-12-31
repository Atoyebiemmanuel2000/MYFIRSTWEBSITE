function show(){
    document.getElementById('sidebar').classList.toggle('active');    
}
var menubutton = document.getElementById("menu")
var cancelbutton = document.getElementById("cancel")

function showmenu(){
    cancelbutton.style.display = "block"
    menubutton.style.display = "none"
}
function hidemenu(){
    menubutton.style.display = "block"
    cancelbutton.style.display = "none"
}
$(document).ready(function(){
$(window).scroll(function(){
// sticky navbar on scroll script
if(this.scrollY > 20){
    $('.navbar').addClass("sticky");
}else{
    $('.navbar').removeClass("sticky");
}

// scroll-up button show/hide script
if(this.scrollY > 500){
    $('.scroll-up-btn').addClass("show");
}else{
    $('.scroll-up-btn').removeClass("show");
}
});



$('.navbar .menu li a').click(function(){
// applying again smooth scroll on menu items click
$('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
$('.navbar .menu').toggleClass("active");
$('.menu-btn i').toggleClass("active");
});

// typing text animation script
var typed = new Typed(".typing", {
strings: ["Web Dev.", "Designer"],
typeSpeed: 130,
backSpeed: 60,
loop: true
});
var typed = new Typed(".typing-3", {
strings: ["Connect with me on :)"],
typeSpeed: 100,
backSpeed: 60,
loop: true
});

var typed = new Typed(".typing-2", {
strings: ["Front end developer","Fresher" ,"Technician", "Blogger", "Designer", "Freelancer","Manager"],
typeSpeed: 100,
backSpeed: 60,
loop: true
});

// owl carousel script
$('.carousel').owlCarousel({
margin: 20,
loop: true,
autoplay: true,
autoplayTimeOut: 2000,
autoplayHoverPause: true,
responsive: {
    0:{
        items: 1,
        nav: false
    },
    600:{
        items: 2,
        nav: false
    },
    1000:{
        items: 3,
        nav: false
    }
}
});
});


