document.addEventListener("DOMContentLoaded", () => {

  const phoneNumber = "5692999340";

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

    if (modalBtn) modalBtn.href = `https://wa.me/${phoneNumber}?text=${message}`;
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

  // ==================== INICIALIZAR ====================
  initFromURL();

});