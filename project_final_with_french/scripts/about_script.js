// JavaScript source code about.html

"use strict";

function cardHighlight(x) {
    x.style.WebkitTransform = "scale(1.05,1.05)";
    x.style.transform = "scale(1.05,1.05)";
    x.style.border = "1px solid #0094ff";
}

function cardUnHighlight(x) {
    x.style.WebkitTransform = "scale(1,1)";
    x.style.transform = "scale(1,1)";
    x.style.border = "1px solid rgba(0, 0, 0, 0.125";
}