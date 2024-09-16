document.addEventListener("DOMContentLoaded", function () {
  // Задаем номер телефона, на который нужно заменить
  const phoneNumber = "8 (939) 841-45-37";

  // Ищем все элементы ссылки с классом 'data-phone'
  const phoneLinks = document.querySelectorAll("a.data-phone");

  // Проходим по каждому найденному элементу
  phoneLinks.forEach(function (link) {
    // Заменяем атрибут href на номер телефона с форматом tel:
    link.setAttribute("href", "tel:" + phoneNumber);

    // Заменяем текстовое содержимое ссылки на номер телефона
    link.textContent = phoneNumber;
  });
});
