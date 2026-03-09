/* ------------------ Модальное окно ------------------ */
const modal = document.getElementById('modal');
function openModal() {
  modal.style.display = 'block';
}
function closeModal() {
  modal.style.display = 'none';
}
window.onclick = function(event) {
  if(event.target === modal){
    closeModal();
  }
}

/* ------------------ Форма заказа ------------------ */
document.getElementById('orderForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  this.reset();
});
document.getElementById('modalForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Ваша заявка отправлена через модальное окно!");
  closeModal();
  this.reset();
});

/* ------------------ Плавная прокрутка ------------------ */
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* ------------------ Слайдер отзывов ------------------ */
const reviews = document.querySelectorAll('.review');
let currentReview = 0;

function showReview(index) {
  reviews.forEach((r, i) => {
    r.style.display = i === index ? 'block' : 'none';
  });
}

// Инициализация: показываем первый отзыв
if(reviews.length > 0){
  showReview(currentReview);
  setInterval(() => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
  }, 5000); // меняем отзыв каждые 5 секунд
}

/* ------------------ Интерактивная карта ------------------ */
// Если есть элемент с id="map", вставляем Google Maps
function initMap() {
  const mapContainer = document.getElementById('map');
  if(!mapContainer) return;

  // Координаты (пример: центр города)
  const coords = { lat: 55.751244, lng: 37.618423 };
  const map = new google.maps.Map(mapContainer, {
    center: coords,
    zoom: 12
  });

  // Маркер
  new google.maps.Marker({
    position: coords,
    map: map,
    title: "Наша служба дезинсекции"
  });
}

// Инициализация карты после загрузки
window.addEventListener('load', () => {
  initMap();
});