function order(){
alert("Спасибо! Мы скоро свяжемся с вами.");
}
document.getElementById("orderForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Спасибо! Ваша заявка отправлена. Мы скоро свяжемся с вами.");

});