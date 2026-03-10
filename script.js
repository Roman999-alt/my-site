const TOKEN = "8440870990:AAGV0EoF0rgUAmIoP-IOBiOJeq0Sw-6InxU";
const CHAT_ID = "5058136349";

function sendForm(form) {

form.addEventListener("submit", function(e) {

e.preventDefault();

const name = form.querySelector('input[name="name"]').value;
const phone = form.querySelector('input[name="phone"]').value;
const service = form.querySelector('select[name="service"]').value;
const comment = form.querySelector('textarea[name="comment"]').value;

const text = `
🔥 Новая заявка с сайта

👤 Имя: ${name}
📞 Телефон: ${phone}
🐜 Проблема: ${service}
📍 Адрес: ${comment}
`;

fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
chat_id:CHAT_ID,
text:text
})
})
.then(() => {
alert("Заявка отправлена!");
form.reset();
})
.catch(() => {
alert("Ошибка отправки");
});

});
}

sendForm(document.getElementById("orderForm"));
sendForm(document.getElementById("modalForm"));

function openModal(){
document.getElementById("modal").style.display="flex";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}