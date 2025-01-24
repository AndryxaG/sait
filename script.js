// Скрипт для базовой интерактивности

// Обработка отправки формы в секции "Контакты"
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Спасибо, ${name}! Мы получили ваше сообщение и скоро свяжемся с вами.`);
            contactForm.reset(); // Очистить форму
        } else {
            alert('Пожалуйста, заполните все поля формы.');
        }
    });
}

// Скролл к секциям при клике на меню
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Эффект нажатия кнопок "Купить"
const buyButtons = document.querySelectorAll('.product .btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Товар добавлен в корзину!');
    });
});

