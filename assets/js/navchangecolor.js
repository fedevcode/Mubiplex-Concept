// --- NAVBAR CHANGE COLORS ---
const navContainer = document.querySelector('.nav__navbar-container');
const nav = document.querySelector('#nav');

const mobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
window.onscroll = function() {
    navFunction();
};

function navFunction() {
    if (document.body.scrollTop < 10 || document.documentElement.scrollTop < 10) {
        nav.style.backgroundColor = "rgb(9, 12, 16)";
        nav.style.transition = "all .1s ease";
    };
    if (document.body.scrollTop > 540 || document.documentElement.scrollTop > 540) {
        nav.style.backgroundColor = "#101922";
    };
    if (document.body.scrollTop > 1860 || document.documentElement.scrollTop > 1860) {
        nav.style.backgroundColor = "#0F141C";
    };
    if (document.body.scrollTop > 2370 || document.documentElement.scrollTop > 2370) {
        nav.style.backgroundColor = "#101922";
    };
};
// --- / NAVBAR CHANGE COLORS ---