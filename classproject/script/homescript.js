// Runs as soon as the web page is loaded minus external content.
document.addEventListener("DOMContentLoaded", function () {
    // Selects the inner progress bar element.
    const progressBarInner = document.querySelector(".progressBarInner");

    // A function which listens for when the user scrolls on the page.
    window.addEventListener("scroll", function (){
        // The document element is assigned as a variable.
        let h = document.documentElement;

        // Represents distance scrolled from the top of the page.
        let st = h.scrollTop || document.body.scrollTop;
        // Represents the height of the page.
        let sh = h.scrollHeight || document.body.scrollHeight;

        // Calculates the percent of the web page user has scrolled through.
        let percent = st/(sh-h.clientHeight)*100;
        // Rounds the percentage to a whole number.
        let roundedPercent = Math.round(percent);

        // The width of the inner progress bar is assigned to the percentage scrolled.
        progressBarInner.style.width = `${percent}%`;
        // The text of the progress bar is assigned to the rounded percent.
        progressBarInner.innerText = `${roundedPercent}%`;
    });
});