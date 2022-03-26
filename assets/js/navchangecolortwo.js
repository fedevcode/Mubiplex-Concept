// --- NAVBAR CHANGE COLORS ---
const navContainer = document.querySelector('.nav__navbar-container');
const nav = document.querySelector('#nav');

const mobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
window.onscroll = function() {
    navFunction();
};

function navFunction() {
    if (document.body.scrollTop < 5 || document.documentElement.scrollTop < 5) {
        nav.style.backgroundColor = "transparent";
        nav.style.transition = "all .1s ease";
    };
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        nav.style.backgroundColor = "#101922";
    };
    if (document.body.scrollTop > 290 || document.documentElement.scrollTop > 290) {
        nav.style.backgroundColor = "#161E29";
    };
};
// --- / NAVBAR CHANGE COLORS ---