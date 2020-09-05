$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

var slider = tns({
    container: '.slide-wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: true,
    nav: true,
    mouseDrag: true,
});
$(document).ready(function () {
    $('.venobox').venobox({
        // closeColor: "#f4f4f4",
        // spinColor: "f4f4f4",
        // closeBackground: "#17191D",
        // overlayColor: "rgba(23,25,29,0.8)",
        titleBackground: "rgba(0,0,0,0.3)",
    });
});
function continueReading(x) {
    var dots = document.getElementById("dots" + x);
    var moreText = document.getElementById("read-more" + x);
    var btnText = document.getElementById("read-more-button" + x);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "continue reading";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "read less";
        moreText.style.display = "inline";
    }
}