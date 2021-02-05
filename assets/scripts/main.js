// main.js

// TODO
var num = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");
var image = document.getElementById("volume-image");

var horn = document.getElementById("horn-sound");

var air = document.getElementById("radio-air-horn-container");
var car = document.getElementById("radio-car-horn-container");
var party = document.getElementById("radio-party-horn-container");

var btn = document.getElementById("honk-btn");

slider.oninput = function() {
    num.value = slider.value;
    horn.volume = num.value / 100;

    if(num.value == 0) {
        image.src = "./assets/media/icons/volume-level-0.svg";
    }
    else if((num.value >= 1 && num.value <= 33)) {
        image.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if((num.value >= 34 && num.value <= 66)) {
        image.src = "./assets/media/icons/volume-level-2.svg";
    }
    else {
        image.src = "./assets/media/icons/volume-level-3.svg";
    }
}

num.oninput = function() {
    slider.value = num.value;
    horn.volume = slider.value / 100;

    if(slider.value == 0) {
        image.src = "./assets/media/icons/volume-level-0.svg";
    }
    else if((slider.value >= 1 && slider.value <= 33)) {
        image.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if((slider.value >= 34 && slider.value <= 66)) {
        image.src = "./assets/media/icons/volume-level-2.svg";
    }
    else {
        image.src = "./assets/media/icons/volume-level-3.svg";
    }
}

air.oninput = function() {
    horn.src = "./assets/media/audio/air-horn.mp3";
}

car.oninput = function() {
    horn.src = "./assets/media/audio/car-horn.mp3";
}

party.oninput = function() {
    horn.src = "./assets/media/audio/party-horn.mp3";
}

btn.onclick = function() {
    document.getElementById("horn-sound").play();
}