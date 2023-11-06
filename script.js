// let name = prompt("Enter your name (up to 10 letters)");
// while (name === null || name === "" || name.length > 10) {
//     if (name === null || name === "") {
//         alert("Please enter your name.");
//     } else {
//         alert("Please enter your name with up to 10 letters.");
//     }
//     name = prompt("Enter your name (up to 10 letters)");
// }

// name = name.toUpperCase();
// alert('Welcome to UVCE ISE, ' + name);
// document.getElementById('userName').innerHTML = 'HELLO, ' + name;

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const homeLink = document.getElementById("homeLink");
const home = document.getElementById("home");
const famLink = document.getElementById("famLink");
const fam = document.getElementById("fam");
const galleryLink = document.getElementById("galleryLink");
const gallery = document.getElementById("gallery");
const abtUvceLink = document.getElementById("abtUvceLink");
const abtUvce = document.getElementById("abtUvce");
const updatesLink = document.getElementById("updatesLink");
const updates = document.getElementById("updates");
const achievementsLink = document.getElementById("achievementsLink");
const achievements = document.getElementById("achievements");
const contactUsLink = document.getElementById("contactUsLink");
const contactUs = document.getElementById("contactUs");
const setting = document.querySelector(".setting");

hamburger.onclick = function () {
    hamburger.classList.toggle('close');
    menu.classList.toggle('open');
    home.classList.toggle('goDown');
}

const menuLink = [homeLink, famLink, galleryLink, abtUvceLink, updatesLink, achievementsLink, contactUsLink];
const menuList = [home, fam, gallery, abtUvce, updates, achievements, contactUs];

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('mouseover', function () {
        
        // Hide all menu items first
        for (let j = 0; j < menuList.length; j++) {
            menuList[j].style.display = "none";
        }

        // Display the corresponding menu item
        menuList[i].style.display = "flex";
        setting.style.display = "none";

    });

    menuLink[i].addEventListener('mouseout', function () {
        setting.style.display = "flex";
    });
}


const elts = {
    text1: document.getElementById("text1"), text2: document.getElementById("text2")
};
const texts = ["Hello", name, "Welcome to UVCE ISE 26", "A", "Non-Profit", "Organisation", ":)", "Made by P=V^2/R"];
const morphTime = 1;
const cooldownTime = 0.25;
let textIndex = texts.length - 1;
let time = new Date(); let morph = 0;
let cooldown = cooldownTime;
elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown; cooldown = 0;
    let fraction = morph / morphTime;
    if (fraction > 1) {
        cooldown = cooldownTime; fraction = 1;
    }
    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    fraction = 1 - fraction; elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0; elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";
    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);
    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000; time = newTime;
    cooldown -= dt;
    if (cooldown <= 0) {
        if (shouldIncrementIndex) { textIndex++; } doMorph();
    }
    else {
        doCooldown();
    }
} animate();
