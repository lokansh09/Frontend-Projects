const mobileBtn = document.getElementById('mobile-btn');
const nav = document.getElementById('navbar');
const body = document.body;

mobileBtn.onclick = () => {
    mobileBtn.classList.toggle('active'); // Animates the Burger to Cross
    nav.classList.toggle('active');       // Slides the Menu in
    body.classList.toggle('blur-bg');    // Blurs the background
};