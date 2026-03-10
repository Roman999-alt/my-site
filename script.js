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

/* ------------------ Форма заказа (отправка в Telegram) ------------------ */

const TOKEN = "8440870990:AAGV0EoF0rgUAmIoP-IOBiOJeq0Sw-6InxU";
const CHAT_ID = "5058136349";
const TELEGRAM_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

function sendToTelegram(name, phone, service, comment){
  const message = `Новая заявка с сайта!\n\nИмя: ${name}\nТелефон: ${phone}\nУслуга: ${service}\nКомментарий: ${comment}`;

  fetch(TELEGRAM_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  }).then(()=>{
    alert("Заявка отправлена! Мы скоро с вами свяжемся.");
  });
}

const orderForm = document.getElementById('orderForm');
if(orderForm){
  orderForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const serviceSelect = this.querySelector('select');
    const service = serviceSelect ? serviceSelect.value : "Не указано";
    const commentField = this.querySelector('textarea');
    const comment = commentField ? commentField.value : "";

    sendToTelegram(name, phone, service, comment);
    this.reset();
  });
}

const modalForm = document.getElementById('modalForm');
if(modalForm){
  modalForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const commentField = this.querySelector('textarea');
    const comment = commentField ? commentField.value : "";

    sendToTelegram(name, phone, "Заявка из модального окна", comment);
    closeModal();
    this.reset();
  });
}

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