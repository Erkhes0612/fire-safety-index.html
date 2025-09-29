const totalPages = 12; // нийт нүүр
let currentPage = 1;

const img = document.getElementById('comic-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Автомат зурагны нэр үүсгэх
function getComicSrc(page) {
  return `assets/comic/page${page}.jpg`; // Хэрэв зураг өөр нэртэй бол өөрчил
}

function updateComic() {
  img.src = getComicSrc(currentPage);
  img.alt = `Комик ${currentPage}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) currentPage--;
  updateComic();
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) currentPage++;
  updateComic();
});

// Нүүрний анхны тохиргоо
updateComic();
