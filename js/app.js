document.addEventListener("DOMContentLoaded", () => {

  const phoneNumber = "56992999340";

  // ==================== PRODUCTOS REORGANIZADOS EN 8 CATEGORÍAS ====================
  const products = [
  // ========== 1. PINTURAS ==========
  { name: "Pintura Muro", price: 21000, category: "pinturas", img: "https://picsum.photos/200?random=1" },
  { name: "Pintura 5L", price: 18000, category: "pinturas", img: "https://picsum.photos/200?random=2" },
  { name: "Pintura 2L", price: 9500, category: "pinturas", img: "https://picsum.photos/200?random=3" },

  // ========== 2. VITRIFICANTES ==========
  { name: "Vitrificante 5L", price: 38000, category: "vitrificantes", img: "https://picsum.photos/200?random=4" },
  { name: "Vitrificante 2L", price: 16000, category: "vitrificantes", img: "https://picsum.photos/200?random=5" },
  { name: "Vitrificante 1L", price: 8500, category: "vitrificantes", img: "https://picsum.photos/200?random=6" },

  // ========== 3. RENOVADORES ==========
  { name: "Renovador 5L", price: 38000, category: "renovadores", img: "https://picsum.photos/200?random=7" },
  { name: "Renovador 2L", price: 16000, category: "renovadores", img: "https://picsum.photos/200?random=8" },
  { name: "Renovador 1L", price: 8500, category: "renovadores", img: "https://picsum.photos/200?random=9" },

  // ========== 4. SELLANTES ==========
  { name: "Sellante de pintura 5L", price: 19000, category: "sellantes", img: "https://picsum.photos/200?random=10" },
  { name: "Sellante de pintura 2L", price: 9500, category: "sellantes", img: "https://picsum.photos/200?random=11" },

  // ========== 5. CERAS ==========
  { name: "Cera Roja 5L", price: 9500, category: "ceras", img: "https://picsum.photos/200?random=12" },
  { name: "Cera Roja 2L", price: 5500, category: "ceras", img: "https://picsum.photos/200?random=13" },
  { name: "Cera Colores 5L", price: 14000, category: "ceras", img: "https://picsum.photos/200?random=14" },
  { name: "Cera Colores 2L", price: 8000, category: "ceras", img: "https://picsum.photos/200?random=15" },

  // ========== 6. BRILLOS (incluye Abrillantador) ==========
  { name: "Brillo Premium incoloro 5L", price: 13500, category: "brillos", img: "https://picsum.photos/200?random=16" },
  { name: "Brillo Premium incoloro 2L", price: 9500, category: "brillos", img: "https://picsum.photos/200?random=17" },
  { name: "Brillo Aromático Cerámica Lisa", price: 7500, category: "brillos", img: "https://picsum.photos/200?random=18" },
  { name: "Abrillantador piso flotante 2L", price: 8500, category: "brillos", img: "https://picsum.photos/200?random=19" },
  { name: "Abrillantador piso flotante 1L", price: 16000, category: "brillos", img: "https://picsum.photos/200?random=20" },

  // ========== 7. LIMPIEZA ==========
  { name: "Lavalosa 5L", price: 9000, category: "limpieza", img: "https://picsum.photos/200?random=21" },
  { name: "Desencrustante 5L", price: 18000, category: "limpieza", img: "https://picsum.photos/200?random=22" },
  { name: "Decapador 5L", price: 18000, category: "limpieza", img: "https://picsum.photos/200?random=23" },
  { name: "Desencrustante lavadora 900cc", price: 4500, category: "limpieza", img: "https://picsum.photos/200?random=24" },
  { name: "Eliminador olores de mascota 900cc", price: 4500, category: "limpieza", img: "https://picsum.photos/200?random=25" },
  { name: "Eliminador de grasa 1L", price: 4500, category: "limpieza", img: "https://picsum.photos/200?random=26" },
  { name: "Eliminador de grasa 5L", price: 18000, category: "limpieza", img: "https://picsum.photos/200?random=27" }
];

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
      `Hola, quisiera más información: ${product.name} - $${product.price.toLocaleString("es-CL")}`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
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

  // ==================== CREAR CARDS ====================
  function createCard(p) {
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

    return card;
  }

  // ==================== RENDER CATEGORÍAS ====================
  function renderCategories(filteredProducts = null) {
    // Obtener productos por categoría
    let pinturas = [];
    let vitrificantes = [];
    let renovadores = [];
    let sellantes = [];
    let ceras = [];
    let brillos = [];
    let abrillantador = [];
    let limpieza = [];

    if (filteredProducts) {
      // Filtrar por categoría
      pinturas = filteredProducts.filter(p => p.category === "pinturas");
      vitrificantes = filteredProducts.filter(p => p.category === "vitrificantes");
      renovadores = filteredProducts.filter(p => p.category === "renovadores");
      sellantes = filteredProducts.filter(p => p.category === "sellantes");
      ceras = filteredProducts.filter(p => p.category === "ceras");
      brillos = filteredProducts.filter(p => p.category === "brillos");
      abrillantador = filteredProducts.filter(p => p.category === "abrillantador");
      limpieza = filteredProducts.filter(p => p.category === "limpieza");
    } else {
      // Mostrar todos
      pinturas = products.filter(p => p.category === "pinturas");
      vitrificantes = products.filter(p => p.category === "vitrificantes");
      renovadores = products.filter(p => p.category === "renovadores");
      sellantes = products.filter(p => p.category === "sellantes");
      ceras = products.filter(p => p.category === "ceras");
      brillos = products.filter(p => p.category === "brillos");
      abrillantador = products.filter(p => p.category === "abrillantador");
      limpieza = products.filter(p => p.category === "limpieza");
    }

    // Renderizar cada grid
    renderGrid("products-pinturas", pinturas);
    renderGrid("products-vitrificantes", vitrificantes);
    renderGrid("products-renovadores", renovadores);
    renderGrid("products-sellantes", sellantes);
    renderGrid("products-ceras", ceras);
    renderGrid("products-brillos", brillos);
    renderGrid("products-abrillantador", abrillantador);
    renderGrid("products-limpieza", limpieza);

    // Mostrar/ocultar categorías según si tienen productos
    toggleCategory("category-pinturas", pinturas.length > 0);
    toggleCategory("category-vitrificantes", vitrificantes.length > 0);
    toggleCategory("category-renovadores", renovadores.length > 0);
    toggleCategory("category-sellantes", sellantes.length > 0);
    toggleCategory("category-ceras", ceras.length > 0);
    toggleCategory("category-brillos", brillos.length > 0);
    toggleCategory("category-abrillantador", abrillantador.length > 0);
    toggleCategory("category-limpieza", limpieza.length > 0);
  }

  function renderGrid(containerId, productsArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = "";
    
    if (productsArray.length === 0) {
      container.innerHTML = "<p class='no-results'>No hay productos en esta categoría</p>";
      return;
    }
    
    productsArray.forEach(product => {
      const card = createCard(product);
      container.appendChild(card);
    });
  }

  function toggleCategory(sectionId, show) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = show ? "block" : "none";
    }
  }

  // ==================== FUNCIÓN PARA HACER SCROLL A PRODUCTOS ====================
  function scrollToProducts() {
    const primeraCategoria = document.getElementById("category-pinturas");
    if (primeraCategoria) {
      const sectionPosition = primeraCategoria.getBoundingClientRect().top + window.pageYOffset;
      const offset = 80;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth"
      });
    }
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
      // Mostrar todas las categorías completas
      renderCategories();
      if (carousel) carousel.style.display = "block";
      // Mostrar secciones informativas
      const infoSection = document.querySelector(".info-section");
      const valuesSection = document.querySelector(".values-section");
      if (infoSection) infoSection.style.display = "flex";
      if (valuesSection) valuesSection.style.display = "block";
    } else {
      // Filtrar productos por búsqueda
      const filtered = products.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
      if (carousel) carousel.style.display = "none";
      renderCategories(filtered);
      
      // Ocultar secciones informativas durante búsqueda
      const infoSection = document.querySelector(".info-section");
      const valuesSection = document.querySelector(".values-section");
      if (infoSection) infoSection.style.display = "none";
      if (valuesSection) valuesSection.style.display = "none";
      
      if (filtered.length === 0) {
        // Mostrar mensaje en todas las categorías
        const containers = ["products-pinturas", "products-vitrificantes", "products-renovadores", "products-sellantes", "products-ceras", "products-brillos", "products-abrillantador", "products-limpieza"];
        containers.forEach(containerId => {
          const container = document.getElementById(containerId);
          if (container && container.innerHTML.trim() === "") {
            container.innerHTML = "<p class='no-results'>No se encontraron productos</p>";
          }
        });
      }
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
    
    if (searchTerm) {
      if (carousel) carousel.style.display = "none";
      const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
      renderCategories(filtered);
      // Ocultar secciones informativas
      const infoSection = document.querySelector(".info-section");
      const valuesSection = document.querySelector(".values-section");
      if (infoSection) infoSection.style.display = "none";
      if (valuesSection) valuesSection.style.display = "none";
      if (searchInput) searchInput.value = searchTerm;
    } else {
      renderCategories();
      if (carousel) carousel.style.display = "block";
      // Mostrar secciones informativas
      const infoSection = document.querySelector(".info-section");
      const valuesSection = document.querySelector(".values-section");
      if (infoSection) infoSection.style.display = "flex";
      if (valuesSection) valuesSection.style.display = "block";
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
    }
  };

// ==================== BOTÓN PRODUCTOS (scroll a categorías) ====================
const productosBtn = document.getElementById("productosBtn");
if (productosBtn) {
  productosBtn.addEventListener("click", () => {
    const categoriasSection = document.getElementById("categoriasContainer");
    if (categoriasSection) {
      const sectionPosition = categoriasSection.getBoundingClientRect().top + window.pageYOffset;
      const offset = 80;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth"
      });
    }
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

  // ==================== BOTONES DEL CARRUSEL PRINCIPAL ====================
  function setupCarouselButtons() {
    const scrollBtns = document.querySelectorAll('.scroll-products-btn');
    scrollBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        scrollToProducts();
      });
    });

    const shippingBtn = document.querySelector('.shipping-btn');
    if (shippingBtn) {
      shippingBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('pages/envios.html', '_blank');
      });
    }
  }
  
  setupCarouselButtons();

  // ==================== CARRUSEL DE PRODUCTOS DESTACADOS ====================
  let featuredIndex = 0;
  let featuredInterval;
  let slidesPerView = 3;

  function renderFeaturedCarousel() {
    const container = document.getElementById('featuredSlides');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 1; i <= 19; i++) {
      const slide = document.createElement('div');
      slide.className = 'featured-slide-item';
      
      slide.innerHTML = `
        <img src="" alt="Producto ${i}" data-slot="${i}">
        <div class="featured-slide-content">
          <button class="featured-whatsapp-btn" data-producto="Producto ${i}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.1-41.4-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </button>
        </div>
      `;
      
      container.appendChild(slide);
    }
    
    setupFeaturedWhatsAppButtons();
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
    const carouselFeatured = document.getElementById('featuredCarousel');
    
    if (!slidesContainer || !carouselFeatured) return;
    
    const totalProducts = slidesContainer.children.length;
    let maxIndex = Math.max(0, totalProducts - slidesPerView);
    let direction = 1;
    
    function showFeaturedSlide() {
      if (featuredIndex > maxIndex) featuredIndex = maxIndex;
      if (featuredIndex < 0) featuredIndex = 0;
      
      const translateValue = -(featuredIndex * (100 / slidesPerView));
      slidesContainer.style.transform = `translateX(${translateValue}%)`;
    }
    
    const nextBtn = document.querySelector('.featured-next');
    const prevBtn = document.querySelector('.featured-prev');
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        direction = 1;
        if (featuredIndex < maxIndex) {
          featuredIndex++;
          showFeaturedSlide();
          resetAutoSlideFeatured();
        }
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        direction = -1;
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
          direction = -1;
          newIndex = maxIndex - 1;
        } else if (newIndex < 0) {
          direction = 1;
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
    
    carouselFeatured.addEventListener('mouseenter', stopAutoSlideFeatured);
    carouselFeatured.addEventListener('mouseleave', startAutoSlideFeatured);
    
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

  function setProductImages() {
    const slides = document.querySelectorAll('.featured-slide-item');
    
    const images = [
      './img/image1.png', './img/image2.png', './img/image3.png',
      './img/image4.png', './img/image5.png', './img/image6.png',
      './img/image7.png', './img/image8.png', './img/image9.png',
      './img/image10.png', './img/image11.png', './img/image12.png',
      './img/image13.png', './img/image14.png', './img/image15.png',
      './img/image16.png', './img/image17.png', './img/image18.png',
      './img/image19.png'
    ];
    
    slides.forEach((slide, idx) => {
      const img = slide.querySelector('img');
      if (img && images[idx]) {
        img.src = images[idx];
      }
    });
  }

  function setProductNames() {
    const buttons = document.querySelectorAll('.featured-whatsapp-btn');
    
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
  }

  // ==================== INICIALIZAR TODO ====================
  initFromURL();
  renderFeaturedCarousel();
  initFeaturedCarousel();
  setProductImages();
  setTimeout(() => {
    setProductNames();
  }, 100);

// ==================== SCROLL AUTOMÁTICO PARA HASH LINKS ====================
document.addEventListener("DOMContentLoaded", function() {
  if (window.location.hash) {
    const hash = window.location.hash;
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(function() {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: targetPosition - offset,
          behavior: "smooth"
        });
      }, 500);
    }
  }
});
  
});