// Dynamiske variabler hentet fra oppgaveteksten
let title = "Dette gjør TV-ekspert Trond når han skal importere ny TV";   // H1 og H2 kan være alt fra 3 ord til lang tekst
let pretitle = "Dårlig bildekvalitet?";
let Imgurl = "https://www.newwork.no/CaS/NW_sandbox/testbilde.jpg";
let bordercolor = "#333333";
let textbox_bgcolor = "#666666";
let titletxtcolor = "#000000";
let pretitletxtcolor = "#000000";
let highlight_color = "#FFFF00";
let highlight_style = "italic"; // kan være "bold" og "italic"
let highlight_style2 = "bold"; // kan være "bold" og "italic"

// ordene som vi vil sette stil på (dynamiske)
let highLighteWords = ["jobbreise", "Microsoft Teams"];


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
// h2.style.fontStyle = highlight_style;
h2.innerHTML = pretitle;    // disse skal kommenteres ut når du er ferdig

var txtDiv = document.getElementById("txtDiv");
txtDiv.style.backgroundColor = textbox_bgcolor;

var dynamicDiv = document.getElementById("dynamicBanner");
let borderStyle = "2px solid " + bordercolor;
dynamicDiv.style.border = borderStyle;

var imgDiv = document.getElementById("imgDiv");


var texts = [
    "Ikke gå i denne WiFi-fella når du er på jobbreise",
    "En bedre hverdag? Last ned e-guide for Microsoft Teams",

    "Høyteknologisk og intelligent",
    "Vi har brukt tid på å finne hvilke funksjoner som gjør hverdagen logisk og faktisk mye enklere",

    "Automatisert hverdag",
    "I denne leiligheten er det ingen lysbrytere",

    "",
    "", 
    
    "Dårlig bildekvalitet?", 
    "Dette gjør TV-ekspert Trond når han skal importere ny TV"
];
let i = 0;

// if(h2.innerHTML.includes(highLighteWords[0])) {
//     var element = document.querySelector(".testing");
//     h2.innerHTML = h2.innerHTML.replace(highLighteWords[0], `<span style="color: ${highlight_color}; font-style: ${highlight_style2}">${highLighteWords[0]}</span>`);
// }
// if(h1.innerHTML.includes(highLighteWords[1])) {
//     var element = document.querySelector(".testing");
//     h1.innerHTML = h1.innerHTML.replace(highLighteWords[1], `<span style="color: ${highlight_color}; font-style: ${highlight_style2}">${highLighteWords[1]}</span>`);
// }

setInterval(function () {
    // h2.innerHTML = texts[i]; 
    // h1.innerHTML = texts[i + 1]; 
    $("#h2").html(texts[i]);
    $("#h1").html(texts[i + 1]);
    fitText();

    if(h2.innerHTML.includes(highLighteWords[0])) {
        var element = document.querySelector(".testing");
        h2.innerHTML = h2.innerHTML.replace(highLighteWords[0], `<span style="color: ${highlight_color}; font-style: ${highlight_style2}">${highLighteWords[0]}</span>`);
    }
    if(h1.innerHTML.includes(highLighteWords[1])) {
        var element = document.querySelector(".testing");
        h1.innerHTML = h1.innerHTML.replace(highLighteWords[1], `<span style="color: ${highlight_color}; font-style: ${highlight_style2}">${highLighteWords[1]}</span>`);
    }

    if (i == texts.length) {
        i = 0;
    }
    else {
        i += 2;
    }
}, 5000);


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
                }
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
                } 
            }
        }
    });
}
