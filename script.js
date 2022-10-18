let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    }else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}



let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvent = "none";
    body.style.overflowX = "hidden";
    scrollBtn.style.pointerEvents = "none"; 
}
cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvent = "auto";
    body.style.overflowX = "auto";
    scrollBtn.style.pointerEvents = "auto"; 
}

// sidebar close
let navLinks = document.querySelectorAll(".menu li a");
for(var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click" , function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvent = "auto";
    });
}

// ====navBar color change=====

function changebg(){
    let navbar = document.getElementById("navbar")
    let scrollValue = window.scrollY;
    if (scrollValue > 150){
        navbar.classList.add("bgcolor");

    }else{
        navbar.classList.remove("bgcolor");
    }
}
window.addEventListener("scroll", changebg);

