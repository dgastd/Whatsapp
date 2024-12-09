// Храним сообщения для каждого языка
const messages = {
  ru: "Здравствуйте! Можно узнать детали работы?",  // Сообщение на русском
  en: "Bună ziua! Îmi puteți oferi detalii despre post?",  // Сообщение на английском
  ro: "Bună ziua! Îmi puteți oferi detalii despre post?"  // Сообщение на румынском
};

// Текущий выбранный язык (по умолчанию румынский)
let currentLanguage = 'ro';

// Функция для редиректа в WhatsApp
function redirectToWhatsApp() {
  const phoneNumber = "37376982589"; // Укажите номер телефона
  const message = messages[currentLanguage]; // Выбираем сообщение в зависимости от языка
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Отправляем событие в Facebook Pixel, чтобы засчитать лид
  fbq('track', 'Lead', {
    content_name: 'WhatsApp Contact',
    content_category: 'Application'
  });
  
  // Показываем сообщение после нажатия на кнопку
  document.getElementById("thank-you-message").style.display = "block";
  document.getElementById("whatsapp-button").style.display = "none"; // Прячем кнопку после нажатия

  // Задержка перед переходом, чтобы пользователь увидел сообщение
  setTimeout(() => {
    window.location.href = url;
  }, 3000); // Задержка 3 секунды
}

// Обновляем текст кнопки
document.getElementById('whatsapp-button').innerHTML = 'Scrie în WhatsApp';
