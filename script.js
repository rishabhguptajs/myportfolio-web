const copyright = document.getElementById('date-copyright');
const date = new Date();
const year = date.getFullYear();
copyright.textContent = year;

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
    }, 2000);
});
