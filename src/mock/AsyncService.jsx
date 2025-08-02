const productos = [
  {
    id: "01",
    nombre: "Parlante",
    descripcion: "Parlante bluetooth con sonido envolvente",
    precio: 1000,
    stock: 15,
    categoria: "Nuevos",
    img: "https://example.com/parlante.jpg",
  },
  {
    id: "02",
    nombre: "Auriculares",
    descripcion: "Auriculares inalámbricos con cancelación de ruido",
    precio: 2000,
    stock: 10,
    categoria: "Ofertas",
    img: "https://example.com/auriculares.jpg",
  },
  {
    id: "03",
    nombre: "Mouse Gamer",
    descripcion: "Mouse gamer con iluminación RGB",
    precio: 1500,
    stock: 5,
    categoria: "Accesorios",
    img: "https://example.com/mouse.jpg",
  },
];

// Devuelve todos los productos
export const getProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 1500);
  });
};

// Devuelve productos filtrados por categoría
export const getProductosPorCategoria = (categoriaId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter(
        (p) => p.categoria === categoriaId
      );
      if (productosFiltrados.length > 0) {
        resolve(productosFiltrados);
      } else {
        reject(new Error("No se encontraron productos para esta categoría"));
      }
    }, 1500);
  });
};

// Devuelve un producto por su ID
export const getProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find((p) => p.id === id);
      if (producto) {
        resolve(producto);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 1500);
  });
};
