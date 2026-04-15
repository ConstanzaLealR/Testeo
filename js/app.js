document.addEventListener("DOMContentLoaded", () => {

  const phoneNumber = "56992999340";

  const products = [
    // ========== PINTURAS ==========
    { name: "Pintura Muro", price: 21000, category: "pinturas", img: "https://picsum.photos/200?random=1" },
    { name: "Pintura 5L", price: 18000, category: "pinturas", img: "https://picsum.photos/200?random=2" },
    { name: "Pintura 2L", price: 9500, category: "pinturas", img: "https://picsum.photos/200?random=3" },
    { name: "Vitrificante 5L", price: 38000, category: "pinturas", img: "https://picsum.photos/200?random=4" },
    { name: "Vitrificante 2L", price: 16000, category: "pinturas", img: "https://picsum.photos/200?random=5" },
    { name: "Vitrificante 1L", price: 8500, category: "pinturas", img: "https://picsum.photos/200?random=6" },
    { name: "Renovador 5L", price: 38000, category: "pinturas", img: "https://picsum.photos/200?random=7" },
    { name: "Renovador 2L", price: 16000, category: "pinturas", img: "https://picsum.photos/200?random=8" },
    { name: "Renovador 1L", price: 8500, category: "pinturas", img: "https://picsum.photos/200?random=9" },
    { name: "Sellante de pintura 5L", price: 19000, category: "pinturas", img: "https://picsum.photos/200?random=10" },
    { name: "Sellante de pintura 2L", price: 9500, category: "pinturas", img: "https://picsum.photos/200?random=11" },

    // ========== CERAS ==========
    { name: "Cera Roja 5L", price: 9500, category: "ceras", img: "https://picsum.photos/200?random=12" },
    { name: "Cera Roja 2L", price: 5500, category: "ceras", img: "https://picsum.photos/200?random=13" },
    { name: "Cera Colores 5L", price: 14000, category: "ceras", img: "https://picsum.photos/200?random=14" },
    { name: "Cera Colores 2L", price: 8000, category: "ceras", img: "https://picsum.photos/200?random=15" },
    { name: "Brillo Premium incoloro 5L", price: 13500, category: "ceras", img: "https://picsum.photos/200?random=16" },
    { name: "Brillo Premium incoloro 2L", price: 9500, category: "ceras", img: "https://picsum.photos/200?random=17" },
    { name: "Brillo Aromático Cerámica Lisa", price: 7500, category: "ceras", img: "https://picsum.photos/200?random=18" },
    { name: "Abrillantador piso flotante 2L", price: 8500, category: "ceras", img: "https://picsum.photos/200?random=19" },
    { name: "Abrillantador piso flotante 1L", price: 16000, category: "ceras", img: "https://picsum.photos/200?random=20" },

    // ========== LIMPIEZA ==========
    { name: "Lavalosa 5L", price: 9000, category: "limpieza", img: "https://picsum.photos/200?random=21" },
    { name: "Desencrustante 5L", price: 18000, category: "limpieza", img: "https://picsum.photos/200?random=22" },
    { name: "Decapador 5L", price: 18000, category: "limpieza", img: "https://picsum.photos/200?random=23" },
    { name: "Desencrustante lavadora 900cc", price: 4500, category: "limpieza", img: "https://picsum.photos/200?random=24" },
    { name: "Eliminador olores de mascota 900cc", price: 4500, category: "limpieza", img: "https://picsum.photos/200?random=25" },
    { name: "Eliminador de grasa 1L", price: 4500, category: "limpieza", img: "https://picsum.photos/200?random=26" },
    { name: "Eliminador de grasa 5L", price: 18000, category: "limpieza", img: "https://picsum.photos/200?random=27" }
  ];

  // ==================== FUNCIÓN PARA OBTENER BADGE DE CATEGORÍA ====================
  function getCategoryBadge(category) {
    const badges = {
      "pinturas": { text: "🎨 Pintura", class: "badge-pintura" },
      "ceras": { text: "🪙 Cera", class: "badge-cera" },
      "limpieza": { text: "🧼 Limpieza", class: "badge-limpieza" }
    };
    return badges[category] || { text: "📦 Producto", class: "" };
  }

  // ==================== MODAL PRODUCTOS ====================
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  function openModal(product) {
    if (!modal || !modalImg) return;

    modal.style.display = "flex";
    modal.classList.add("active");

    modalImg.src = product.img;
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const modalBtn = document.getElementById("modalBtn");
    
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalPrice) modalPrice.textContent = "$" + product.price.toLocaleString("es-CL");

    const message = encodeURIComponent(
      `Hola, quisiera más información: ${product.name} - $${product.price}`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    console.log("URL de WhatsApp generada:", whatsappUrl);
    
    if (modalBtn) modalBtn.href = whatsappUrl;
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      setTimeout(() => { modal.style.display = "none"; }, 200);
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        setTimeout(() => { modal.style.display = "none"; }, 200);
      }
    });
  }

  // ==================== FUNCIÓN PARA OCULTAR/MOSTRAR SECCIONES ====================
  function toggleSections(show) {
    const infoSection = document.querySelector(".info-section");
    const valuesSection = document.querySelector(".values-section");
    
    if (show) {
      if (infoSection) infoSection.style.display = "flex";
      if (valuesSection) valuesSection.style.display = "block";
    } else {
      if (infoSection) infoSection.style.display = "none";
      if (valuesSection) valuesSection.style.display = "none";
    }
  }

  // ==================== FUNCIÓN PARA HACER SCROLL A PRODUCTOS ====================
  function scrollToProducts() {
    const productsSection = document.querySelector(".products-section");
    const productsTitle = document.querySelector(".products-title");
    
    if (productsSection) {
      const sectionPosition = productsSection.getBoundingClientRect().top + window.pageYOffset;
      const offset = 80;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth"
      });
    } else if (productsTitle) {
      const titlePosition = productsTitle.getBoundingClientRect().top + window.pageYOffset;
      const offset = 100;
      window.scrollTo({
        top: titlePosition - offset,
        behavior: "smooth"
      });
    } else {
      const productGrid = document.getElementById("products");
      if (productGrid) {
        const gridPosition = productGrid.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: gridPosition - offset,
          behavior: "smooth"
        });
      }
    }
  }

  // ==================== CREAR CARDS (SIN BOTÓN WHATSAPP EN CARDS) ====================
  function createCard(p, container) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-image">
        <img src="${p.img}" loading="lazy" alt="${p.name}"/>
      </div>
      <div class="card-content">
        <h3>${p.name}</h3>
        <div class="price">$${p.price.toLocaleString("es-CL")}</div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      openModal(p);
    });

    container.appendChild(card);
  }

  // ==================== RENDER PRODUCTOS ====================
  function renderProducts(filter = "all", searchTerm = null) {
    const container = document.getElementById("products");
    if (!container) return;
    
    container.innerHTML = "";

    let filtered = [];
    
    if (searchTerm && searchTerm.trim() !== "") {
      filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
      if (filtered.length === 0) {
        container.innerHTML = "<p class='no-results'>No se encontraron productos</p>";
        return;
      }
    } else {
      filtered = filter === "all" ? products : products.filter(p => p.category === filter);
    }

    filtered.forEach(p => createCard(p, container));
  }

  // ==================== BÚSQUEDA ====================
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.querySelector(".search-btn");
  const carousel = document.getElementById("carousel");
  
  let searchTimeout;

  function liveSearch() {
    if (!searchInput) return;
    const value = searchInput.value.trim();
    
    if (value === "") {
      renderProducts("all");
      if (carousel) carousel.style.display = "block";
      toggleSections(true);
    } else {
      if (carousel) carousel.style.display = "none";
      renderProducts("all", value);
      toggleSections(true);
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(liveSearch, 300);
    });
  }

  function redirectWithSearch() {
    if (!searchInput) return;
    const value = searchInput.value.trim();
    if (value === "") {
      window.location.href = window.location.pathname;
    } else {
      window.location.href = `?s=${encodeURIComponent(value)}`;
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", redirectWithSearch);
  }
  
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") redirectWithSearch();
    });
  }

  // ==================== INICIALIZAR DESDE URL ====================
  function initFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get("s");
    const category = urlParams.get("categoria");
    
    if (searchTerm) {
      if (carousel) carousel.style.display = "none";
      renderProducts("all", searchTerm);
      toggleSections(false);
      if (searchInput) searchInput.value = searchTerm;
    } else if (category) {
      if (carousel) carousel.style.display = "block";
      renderProducts(category);
      toggleSections(false);
      if (searchInput) searchInput.value = "";
      setTimeout(scrollToProducts, 100);
    } else {
      renderProducts("all");
      if (carousel) carousel.style.display = "block";
      toggleSections(true);
      if (searchInput) searchInput.value = "";
    }
  }

  // ==================== LOGO CLICK ====================
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = window.location.pathname;
    });
  }

  // ==================== CARRUSEL PRINCIPAL ====================
  if (carousel && !window.location.search) {
    const slides = document.getElementById("slides");
    if (slides && slides.children.length > 0) {
      let index = 0;
      const totalSlides = slides.children.length;
      let interval;

      function showSlide(i) {
        index = (i + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${index * 100}%)`;
      }

      const nextBtn = document.querySelector(".next");
      const prevBtn = document.querySelector(".prev");
      
      if (nextBtn) nextBtn.addEventListener("click", () => showSlide(index + 1));
      if (prevBtn) prevBtn.addEventListener("click", () => showSlide(index - 1));

      function startAutoSlide() { interval = setInterval(() => showSlide(index + 1), 3000); }
      function stopAutoSlide() { clearInterval(interval); }

      carousel.addEventListener("mouseenter", stopAutoSlide);
      carousel.addEventListener("mouseleave", startAutoSlide);
      startAutoSlide();
    }
  }

  // ==================== FILTRAR PRODUCTOS ====================
  window.filterProducts = function(category) {
    if (category === "all") {
      window.location.href = window.location.pathname;
    } else {
      window.location.href = `?categoria=${category}`;
    }
  };

  // ==================== BOTÓN PRODUCTOS ====================
  const productosBtn = document.getElementById("productosBtn");
  if (productosBtn) {
    productosBtn.addEventListener("click", () => {
      scrollToProducts();
    });
  }

  // ==================== BOTÓN CONTACTO ====================
  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      const footer = document.querySelector(".footer");
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top + window.pageYOffset;
        const offset = 20;
        window.scrollTo({
          top: footerPosition - offset,
          behavior: "smooth"
        });
      }
    });
  }


  // ==================== BOTÓN CATÁLOGO ====================
const catalogoBtn = document.getElementById("catalogoBtn");
if (catalogoBtn) {
  catalogoBtn.addEventListener("click", () => {
    const catalogoTitle = document.querySelector(".featured-carousel-title");
    if (catalogoTitle) {
      const titlePosition = catalogoTitle.getBoundingClientRect().top + window.pageYOffset;
      const offset = 80;
      window.scrollTo({
        top: titlePosition - offset,
        behavior: "smooth"
      });
    }
  });
}

  // ==================== MODAL TÉRMINOS ====================
  const termsModal = document.getElementById("termsModal");
  const closeTerms = document.querySelector(".close-terms");

  window.openTerms = function() {
    if (termsModal) termsModal.style.display = "flex";
  };

  if (closeTerms && termsModal) {
    closeTerms.addEventListener("click", () => { 
      termsModal.style.display = "none"; 
    });
  }

  if (termsModal) {
    termsModal.addEventListener("click", (e) => { 
      if (e.target === termsModal) termsModal.style.display = "none"; 
    });
  }

  // ==================== BOTÓN VOLVER ARRIBA ====================
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ==================== BOTONES DEL CARRUSEL ====================
  function setupCarouselButtons() {
    // Botones "Ver más" (scroll a productos)
    const scrollBtns = document.querySelectorAll('.scroll-products-btn');
    scrollBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        scrollToProducts();
      });
    });

    // Botón "Ver envíos" (abre envios.html en nueva pestaña)
    const shippingBtn = document.querySelector('.shipping-btn');
    if (shippingBtn) {
      shippingBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('pages/envios.html', '_blank');
      });
    }
  }
  
  setupCarouselButtons();

  // ==================== INICIALIZAR ====================
  initFromURL();

// ==================== CARRUSEL DE PRODUCTOS DESTACADOS (19 SLIDES) ====================
// ==================== CARRUSEL DE PRODUCTOS DESTACADOS (3 VISIBLES) ====================
let featuredIndex = 0;
let featuredInterval;
let slidesPerView = 3;

function renderFeaturedCarousel() {
  const container = document.getElementById('featuredSlides');
  
  if (!container) {
    console.error("❌ ERROR: No se encontró el elemento 'featuredSlides'");
    return;
  }
  
  const phoneNumber = "56992999340";
  
  // Generar 19 productos
  container.innerHTML = '';
  
  for (let i = 1; i <= 19; i++) {
    const slide = document.createElement('div');
    slide.className = 'featured-slide-item';
    
    slide.innerHTML = `
      <img src="" alt="Producto ${i}" data-slot="${i}">
      <div class="featured-slide-content">
        <button class="featured-whatsapp-btn" data-producto="Producto ${i}">
          Lo quiero
        </button>
      </div>
    `;
    
    container.appendChild(slide);
  }
  
  // Configurar eventos de WhatsApp
  setupFeaturedWhatsAppButtons();
  
  // Ajustar slides por visibilidad según tamaño de pantalla
  updateSlidesPerView();
  window.addEventListener('resize', () => {
    updateSlidesPerView();
    resetFeaturedCarousel();
  });
}

function updateSlidesPerView() {
  if (window.innerWidth <= 600) {
    slidesPerView = 1;
  } else if (window.innerWidth <= 900) {
    slidesPerView = 2;
  } else {
    slidesPerView = 3;
  }
}

function setupFeaturedWhatsAppButtons() {
  const phoneNumber = "56992999340";
  const buttons = document.querySelectorAll('.featured-whatsapp-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productName = btn.getAttribute('data-producto') || 'este producto';
      const message = encodeURIComponent(`Hola, quiero comprar ${productName}`);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    });
  });
}

function initFeaturedCarousel() {
  const slidesContainer = document.getElementById('featuredSlides');
  const carousel = document.getElementById('featuredCarousel');
  
  if (!slidesContainer || !carousel) return;
  
  const totalProducts = slidesContainer.children.length;
  let maxIndex = Math.max(0, totalProducts - slidesPerView);
  let direction = 1; // 1 = adelante, -1 = atrás
  
  function showFeaturedSlide() {
    if (featuredIndex > maxIndex) featuredIndex = maxIndex;
    if (featuredIndex < 0) featuredIndex = 0;
    
    if (featuredIndex === maxIndex && maxIndex > 0) {
      const slideItems = slidesContainer.querySelectorAll('.featured-slide-item');
      if (slideItems.length > 0) {
        const slideWidth = slideItems[0].offsetWidth;
        const gap = 20;
        const exactTranslate = -(maxIndex * (slideWidth + gap));
        slidesContainer.style.transform = `translateX(${exactTranslate}px)`;
        return;
      }
    }
    
    const translateValue = -(featuredIndex * (100 / slidesPerView));
    slidesContainer.style.transform = `translateX(${translateValue}%)`;
  }
  
  const nextBtn = document.querySelector('.featured-next');
  const prevBtn = document.querySelector('.featured-prev');
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      direction = 1; // Reinicia dirección al usar botón siguiente
      if (featuredIndex < maxIndex) {
        featuredIndex++;
        showFeaturedSlide();
        resetAutoSlideFeatured();
      }
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      direction = -1; // Reinicia dirección al usar botón anterior
      if (featuredIndex > 0) {
        featuredIndex--;
        showFeaturedSlide();
        resetAutoSlideFeatured();
      }
    });
  }
  
  function startAutoSlideFeatured() {
    if (featuredInterval) clearInterval(featuredInterval);
    featuredInterval = setInterval(() => {
      let newIndex = featuredIndex + direction;
      
      if (newIndex > maxIndex) {
        direction = -1; // Cambia dirección hacia atrás
        newIndex = maxIndex - 1;
      } else if (newIndex < 0) {
        direction = 1; // Cambia dirección hacia adelante
        newIndex = 1;
      }
      
      featuredIndex = newIndex;
      showFeaturedSlide();
    }, 3000);
  }
  
  function stopAutoSlideFeatured() {
    clearInterval(featuredInterval);
  }
  
  function resetAutoSlideFeatured() {
    stopAutoSlideFeatured();
    startAutoSlideFeatured();
  }
  
  carousel.addEventListener('mouseenter', stopAutoSlideFeatured);
  carousel.addEventListener('mouseleave', startAutoSlideFeatured);
  
  // INICIAR AUTOPLAY
  showFeaturedSlide();
  startAutoSlideFeatured();
}

function resetFeaturedCarousel() {
  const slidesContainer = document.getElementById('featuredSlides');
  if (!slidesContainer) return;
  
  const totalProducts = slidesContainer.children.length;
  const maxIndex = Math.max(0, totalProducts - slidesPerView);
  
  if (featuredIndex > maxIndex) featuredIndex = maxIndex;
  if (featuredIndex < 0) featuredIndex = 0;
  
  const translateValue = -(featuredIndex * (100 / slidesPerView));
  slidesContainer.style.transform = `translateX(${translateValue}%)`;
}

// Asignar tus imágenes reales aquí
function setProductImages() {
  const slides = document.querySelectorAll('.featured-slide-item');
  
  // Asigna cada imagen manualmente:
  if(slides[0]) slides[0].querySelector('img').src = 'img/image1.png';
  if(slides[1]) slides[1].querySelector('img').src = 'img/image2.png';
  if(slides[2]) slides[2].querySelector('img').src = 'img/image3.png';
  if(slides[3]) slides[3].querySelector('img').src = 'img/image4.png';
  if(slides[4]) slides[4].querySelector('img').src = 'img/image5.png';
  if(slides[5]) slides[5].querySelector('img').src = 'img/image6.png';
  if(slides[6]) slides[6].querySelector('img').src = 'img/image7.png';
  if(slides[7]) slides[7].querySelector('img').src = 'img/image8.png';
  if(slides[8]) slides[8].querySelector('img').src = 'img/image9.png';
  if(slides[9]) slides[9].querySelector('img').src = 'img/image10.png';
  if(slides[10]) slides[10].querySelector('img').src = 'img/image11.png';
  if(slides[11]) slides[11].querySelector('img').src = 'img/image12.png';
  if(slides[12]) slides[12].querySelector('img').src = 'img/image13.png';
  if(slides[13]) slides[13].querySelector('img').src = 'img/image14.png';
  if(slides[14]) slides[14].querySelector('img').src = 'img/image15.png';
  if(slides[15]) slides[15].querySelector('img').src = 'img/image16.png';
  if(slides[16]) slides[16].querySelector('img').src = 'img/image17.png';
  if(slides[17]) slides[17].querySelector('img').src = 'img/image18.png';
  if(slides[18]) slides[18].querySelector('img').src = 'img/image19.png';
}

function setProductNames() {
  const buttons = document.querySelectorAll('.featured-whatsapp-btn');
  
  // Lista de tus 19 productos en orden
  const nombres = [
    "ABRILLANTADOR CERAMICO PISOS LISOS",
    "ABRILLANTADOR CERAMICO POROSO 1 LTS",
    "ABRILLANTADOR CERAMICO POROSO 2 LTS",
    "ABRILLANTADOR PISO FLOTANTE",
    "ANTIGRASA",
    "CERA ACRILICA ROJA 2 LTS",
    "CERA ACRILICA",
    "CERA COLORES 2 LTS",
    "CERA COLORES 5 LTS",
    "DECAPADOR",
    "DESENCRUSTANTE",
    "ELIMINADOR OLORES",
    "LAVALOZAS",
    "PINTURA ACRILICA 2 LTS",
    "PINTURA BLANCA MURO",
    "PINTURA PARA MURO",
    "PINTURA",
    "SELLANTE",
    "VITRIFICANTE"
  ];
  
  buttons.forEach((btn, idx) => {
    if (nombres[idx]) {
      btn.setAttribute('data-producto', nombres[idx]);
    }
  });
  
  console.log("✅ Nombres de productos asignados correctamente");
}

// INICIALIZAR TODO
renderFeaturedCarousel();
initFeaturedCarousel();
setProductImages();

// Llamar a setProductNames() después de que el carrusel esté listo
setTimeout(() => {
  setProductNames();
}, 100);
});

