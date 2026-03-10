document.addEventListener("DOMContentLoaded", function() {

  // Функция для обработки формы
  function handleForm(form) {
    if(!form) return;

    form.addEventListener("submit", function(e){
      e.preventDefault(); // предотвращаем стандартную отправку

      const formData = new FormData(form);

      fetch("send.php", {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        if(data.trim() === "ok") {
          alert("Заявка отправлена!");
          form.reset();
          // Закрываем модальное окно, если это modalForm
          if(form.id === "modalForm") {
            closeModal();
          }
        } else {
          alert("Ошибка при отправке заявки.");
        }
      })
      .catch(() => {
        alert("Ошибка при отправке заявки.");
      });
    });
  }

  // Подключаем обе формы
  handleForm(document.getElementById("orderForm"));
  handleForm(document.getElementById("modalForm"));

  // Модальное окно
  function openModal() {
    document.getElementById("modal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  // Делаем функции глобальными
  window.openModal = openModal;
  window.closeModal = closeModal;

});