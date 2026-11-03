

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");


// Open / close mobile menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu when a navigation link is clicked
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            "0 8px 25px rgba(90, 65, 80, 0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

});




const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Timsi Thukral. Built with curiosity & code. ✦`;

}



document.addEventListener("click", (event) => {

    const clickedInsideNavbar =
        navbar.contains(event.target);

    if (!clickedInsideNavbar) {
        navLinks.classList.remove("active");
    }

});