document.addEventListener("DOMContentLoaded", function () {
  // Задаем номер телефона, на который нужно заменить
  const phoneNumber = "8 (977) 707-90-90";

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
