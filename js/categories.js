// ==================== FUNCIÓN PARA RENDERIZAR PRODUCTOS POR CATEGORÍA ====================
function renderCategoryProducts(categoryId, categoryName, categoryIcon) {
  // Verificar que products existe (viene de app.js)
  if (typeof products === 'undefined') {
    console.error("❌ Error: products no está definido. Asegúrate de cargar app.js antes que categories.js");
    return;
  }

  // Filtrar productos por categoría
  const filteredProducts = products.filter(p => p.category === categoryId);
  const container = document.getElementById("products");
  
  if (!container) {
    console.error("❌ Error: No se encontró el contenedor #products");
    return;
  }

  // Limpiar contenedor
  container.innerHTML = "";

  // Actualizar título y subtítulo de la página
  const titleElement = document.querySelector(".products-title");
  const subtitleElement = document.querySelector(".products-subtitle");
  
  if (titleElement) {
    titleElement.innerHTML = `${categoryIcon} ${categoryName}`;
  }

  // Mostrar productos o mensaje si no hay
  if (filteredProducts.length === 0) {
    container.innerHTML = `<p class="no-results">No hay productos disponibles en ${categoryName}</p>`;
    return;
  }

  // Renderizar cada producto
  filteredProducts.forEach(product => {
    if (typeof createCard === 'function') {
      const card = createCard(product);
      container.appendChild(card);
    } else {
      console.error("❌ Error: createCard no está definida. Asegúrate de cargar app.js antes");
    }
  });
}

// Detectar automáticamente qué página es según el nombre del archivo o un data attribute
document.addEventListener("DOMContentLoaded", () => {
  // Opción 1: Detectar por la URL
  const path = window.location.pathname;
  const pageName = path.split("/").pop().replace(".html", "");
  
  // Mapeo de nombres de archivo a categorías
  const categoryMap = {
    "pinturas": { id: "pinturas", name: "Pinturas", icon: "🎨" },
    "vitrificantes": { id: "vitrificantes", name: "Vitrificantes", icon: "✨" },
    "renovadores": { id: "renovadores", name: "Renovadores", icon: "🔄" },
    "sellantes": { id: "sellantes", name: "Sellantes", icon: "🛡️" },
    "ceras": { id: "ceras", name: "Ceras", icon: "🪙" },
    "brillos": { id: "brillos", name: "Brillos", icon: "✨" },
    "limpieza": { id: "limpieza", name: "Limpieza", icon: "🧼" }
  };
  
  if (categoryMap[pageName]) {
    const cat = categoryMap[pageName];
    renderCategoryProducts(cat.id, cat.name, cat.icon);
  }
});