const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dotsContainer = document.getElementById('dots');

let current = 0;

// Dots үүсгэх
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

function updateDots(index) {
  const dots = dotsContainer.querySelectorAll('button');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('current', i === index);
  });
  updateDots(index);
  current = index;
}

function nextSlide() {
  let index = (current + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  let index = (current - 1 + slides.length) % slides.length;
  showSlide(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Автомат солилт
setInterval(nextSlide, 5000);
