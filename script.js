// Храним сообщения для каждого языка
const messages = {
  ru: "Здравствуйте! Можно узнать детали работы?",  // Сообщение на русском
  en: "Bună ziua! Îmi puteți oferi detalii despre post?",  // Сообщение на английском
  ro: "Bună ziua! Îmi puteți oferi detalii despre post?"  // Сообщение на румынском
};

// Текущий выбранный язык (по умолчанию английский)
let currentLanguage = 'en';

// Функция для редиректа в WhatsApp
function redirectToWhatsApp() {
  const phoneNumber = "37376982589"; // Укажите номер телефона
  const message = messages[currentLanguage]; // Выбираем сообщение в зависимости от языка
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  // Задержка перед переходом, чтобы URL успел правильно сформироваться
  setTimeout(() => {
    window.location.href = url;
  }, 100); // Задержка 100 миллисекунд
}

// Обновляем текст кнопки
document.getElementById('whatsapp-button').innerHTML = 'Scrie în WhatsApp';
