document.addEventListener('DOMContentLoaded', () => {
    // 1. Alternador de Modo Claro / Escuro
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        
        if (currentTheme === 'light') {
            document.body.removeAttribute('data-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    // 2. Menu Responsivo Mobile
    const menuToggleBtn = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggleBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // 3. Botão "Voltar ao Topo"
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});