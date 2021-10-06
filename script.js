let cardInfo = document.querySelector(".window");

let popToggle = document.querySelector('.open-window');
let popClose = document.querySelector('.close-button');


popToggle.onclick = function (){
    cardInfo.style.display="block";
};

popClose.onclick = function (){
    cardInfo.style.display="none";
};


let hamburgerMobileIcon = document.getElementById("hamburger-icon");

hamburgerMobileIcon.onclick = function () {

    let menuMobile = document.querySelector(".hamburger");

    if (menuMobile.style.display === "none") {
        hamburgerMobileIcon.style.backgroundImage = "url('Hamburger_icon_Closed.png')";
        menuMobile.style.display = "block";
    } else {
        hamburgerMobileIcon.style.backgroundImage = "url('Hamburger_icon.png')";
        menuMobile.style.display = "none";
    }
};