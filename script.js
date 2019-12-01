/* eslint-env browser */
/*  js kood lehelt https://www.w3schools.com/howto/howto_js_collapsible.asp */
window.addEventListener("click", function(e) {
if (e.target.classList.contains("tab-button")) {
var href = e.target.getAttribute("href");
var hash = href.substring(1, href.length);
document.getElementById(hash).classList.toggle("is-active");
e.preventDefault();
    } else{
        var parentClass = e.target.parentNode.classList;
        if (!parentClass.contains("image-info") && !parentClass.contains("image-info-container")) {
            var imageInfoBoxes = document.getElementsByClassName("image-info");
            for (var i = 0; i < imageInfoBoxes.length; i++) {
                imageInfoBoxes[i].classList.remove("is-active");
            }
        }
    }
});