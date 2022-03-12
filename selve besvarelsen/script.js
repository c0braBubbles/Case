// Dynamiske variabler hentet fra oppgaveteksten
let title = "En bedre hverdag? Last ned e-guide for Microsoft Teams";   // H1 og H2 kan være alt fra 3 ord til lang tekst
let pretitle = "Ikke gå i denne WiFi-fella når du er på jobbreise";
let Imgurl = "https://www.newwork.no/CaS/NW_sandbox/testbilde.jpg";
let bordercolor = "#333333";
let textbox_bgcolor = "#666666";
let titletxtcolor = "#000000";
let pretitletxtcolor = "#000000";
let highlight_color = "#FFFF00";
let highlight_style = "italic"; // kan være "bold" og "italic"


// Henter DOM setter verdier og style fra de dynamiske variablene
var bilde = document.getElementById("bilde");
bilde.src = Imgurl;

var h1 = document.getElementById("h1");
h1.style.color = titletxtcolor;
h1.style.fontSize = "30px";
h1.innerHTML = title;       // disse skal kommenteres ut når du er ferdig

var h2 = document.getElementById("h2");
h2.style.color = pretitletxtcolor;
h2.style.fontSize = "25px";
h2.style.fontStyle = highlight_style;
h2.innerHTML = pretitle;    // disse skal kommenteres ut når du er ferdig

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
        fitText();
    }
    else {
        i+=2;
        fitText();
    }
}, 5000);


// test
$(document).ready(function () {
    $("#btn").click(function () {
        $("#testtxt").slideDown("slow");
    });
});



function fitText() {
    $('#h2').each(function (index, element) {
        var current = $(this);
        var text = current.text();
        var words = text.split(' ');

        current.text(words[0]);
        var height = current.height();

        for (var i = 0; i < words.length; i++) {
            if (i == 0) {
                current.text(words[0]);
            } else {
                if (current.text(current.text() + ' ' + words[i]).height() > height) {
                    let fontSize = parseInt(h2.style.fontSize);
                    h2.style.fontSize = `${fontSize - 1}px`;
                    fitText();
                } else {}
            }
        }
    });

    $('#h1').each(function (index, element) {
        var current = $(this);
        var text = current.text();
        var words = text.split(' ');

        current.text(words[0]);
        var height = current.height();

        for (var i = 0; i < words.length; i++) {
            if (i == 0) {
                current.text(words[0]);
            } else {
                if (current.text(current.text() + ' ' + words[i]).height() > height * 2) {
                    let h2Fontsize = parseInt(h2.style.fontSize);
                    let fontSize = parseInt(h1.style.fontSize);

                    h1.style.fontSize = `${fontSize - 1}px`;
                    h2.style.fontSize = `${fontSize - 5}px`;
                    fitText();
                } else {}
            }
        }
    });
}
fitText();
