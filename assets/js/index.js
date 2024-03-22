document.addEventListener('DOMContentLoaded', function() {
  const firstLi = document.querySelector('nav li:first-child');
  const height = firstLi.offsetHeight;
  const liElements = document.querySelectorAll('nav li');
  liElements.forEach(function(li) {
    li.style.height = height + 'px';
  });
  initNavTabs();
  initCarousel();
});

function initCarousel(){
  var carousel = document.getElementById('carousel');
  var carouselItems = carousel.getElementsByClassName('carousel-item');
  var carouselControlPrev = carousel.getElementsByClassName('carousel-control-prev')[0];
  var carouselControlNext = carousel.getElementsByClassName('carousel-control-next')[0];
  var currentSlide = 0;

  function showSlide(slideIndex) {
    if (slideIndex < 0) {
      slideIndex = carouselItems.length - 1;
    } else if (slideIndex >= carouselItems.length) {
      slideIndex = 0;
    }

    for (var i = 0; i < carouselItems.length; i++) {
      carouselItems[i].classList.remove('active');
    }

    carouselItems[slideIndex].classList.add('active');
    currentSlide = slideIndex;
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  carouselControlPrev.addEventListener('click', showPreviousSlide);
  carouselControlNext.addEventListener('click', showNextSlide);

  showSlide(currentSlide);
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var whatsappLink = "https://api.whatsapp.com/send?l=pt&phone=551124127113&text=Nome:%20" + encodeURIComponent(name) + "%0AMensagem:%20" + encodeURIComponent(message);
  window.location.href = whatsappLink;
});

function initNavTabs() {
  // Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.nav-link');

// Adiciona um evento de clique a cada link de navegação
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Previne o comportamento padrão do link
    event.preventDefault();

    // Remove a classe 'active' de todos os links
    navLinks.forEach(link => link.classList.remove('active'));

    // Adiciona a classe 'active' ao link clicado
    this.classList.add('active');

    // Seleciona todo o conteúdo da aba
    const tabContent = document.querySelectorAll('.tab-pane');

    // Oculta todo o conteúdo da aba
    tabContent.forEach(content => content.classList.remove('show', 'active'));

    // Exibe o conteúdo da aba correspondente ao link clicado
    const selectedTabContent = document.querySelector(this.getAttribute('href'));
    selectedTabContent.classList.add('show', 'active');
  });
});
}