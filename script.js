// Botão de "Fale Conosco Agora"
const whatsappButton = document.querySelector('.cta-whatsapp');
whatsappButton.addEventListener('click', () => {
    window.open('https://wa.me/message/YB5IGKFLZ464F1', '_blank');
});




// Ajuste para botão tela menor
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-list");
  
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-list");

   
    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("show");
        }
    });
});

// Ativação dios links
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // Ajuste para header fixo
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// Feedback visual ao clicar em botões de produtos
const productButtons = document.querySelectorAll('.ver-todos');
productButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Funcionalidade em desenvolvimento! Em breve, mais informações.');
    });
});


// Adicionando evento aos botões "Ver Detalhes"
const btnDetalhes = document.querySelectorAll('.btn-detalhes');
btnDetalhes.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const produto = event.target.closest('.produto-descricao').querySelector('h4').innerText;
        window.open(`https://wa.me/message/YB5IGKFLZ464F1?text=Olá, quero informações sobre o ${produto}`, '_blank');
    });
});


