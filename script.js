document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    const pages = {
        home: `<div class="home">Welcome to my Personal Homepage</div>`,
        about: `<div class="about">This is the about us section</div>`,
        contact: `<div class="contact">In the future you can find the contact formular here</div>`
    };

    function loadPage(page) {
        content.innerHTML = pages[page] || '<h1 class="error">404</h1>'
    }

    loadPage('home');

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage(link.dataset.page);
        });
    });
});