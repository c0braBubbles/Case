// Dynamiske variabler hentet fra oppgaveteksten

let title = "Dette er H1";   // H1 og H2 kan være alt fra 3 ord til lang tekst
let pretitle = "Dette er H2";
let Imgurl = "https://www.newwork.no/CaS/NW_sandbox/testbilde.jpg";
let bordercolor = "#333333";
let textbox_bgcolor = "#666666";
let titletxtcolor = "#000000";
let pretitletxtcolor = "#000000";
let highlight_color = "#FFFF00";
let highlight_style = "normal"; // kan være "bold" og "italic"


// Henter DOM setter verdier og style fra de dynamiske variablene
var bilde = document.getElementById("bilde");
bilde.src = Imgurl;

var h1 = document.getElementById("h1");
h1.style.color = titletxtcolor;
h1.style.fontSize = "30px";
// h1.innerHTML = title;

var h2 = document.getElementById("h2");
h2.style.color = pretitletxtcolor;
// h2.innerHTML = pretitle;

var txtDiv = document.getElementById("txtDiv");
txtDiv.style.backgroundColor = textbox_bgcolor;

var dynamicDiv = document.getElementById("dynamicBanner");
let borderStyle = "2px solid " + bordercolor;
dynamicDiv.style.border = borderStyle;

var imgDiv = document.getElementById("imgDiv");


// Ønske om å sette farge og stil på ord i tekstene:
// funksjon som itererer gjennom setningene, splitter med " " og setter style
// kan kanskje bruke ``


var texts = [
    "Ikke gå i denne WiFi-fella når du er på jobbreise",
    "En bedre hverdag? Last ned e-guide for Microsoft Teams",

    "Høyteknologisk og intelligent",
    "Vi har brukt tid på å finne hvilke funksjoner som gjør hverdagen logisk og faktisk mye enklere",

    "Automatisert hverdag",
    "I denne leiligheten er det ingen lysbrytere",

    "Dårlig bildekvalitet?",
    "Dette gjør TV-ekspert Trond når han skal importere ny TV", 

    "",
    ""
];

let i = 0;
setInterval(function () {
    $("#h2").html(texts[i]);
    $("#h2").slideDown("slow");

    $("#h1").html(texts[i+1]);
    $("#h1").slideDown("slow");

    if (i == texts.length) {
        i = 0;
    }
    else {
        i+=2;
    }
}, 5000);


// test
$(document).ready(function () {
    $("#btn").click(function () {
        $("#testtxt").slideDown("slow");
    });
});