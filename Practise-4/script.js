const mobileBtn = document.getElementById('mobile-btn');
const nav = document.getElementById('navbar');
const body = document.body;
const boxes = document.querySelectorAll('.box-b1, .box-b2');

mobileBtn.onclick = () => {
    mobileBtn.classList.toggle('active'); // Animates the Burger to Cross
    nav.classList.toggle('active');       // Slides the Menu in
    body.classList.toggle('blur-bg');    // Blurs the background
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2
});

boxes.forEach(box => observer.observe(box));