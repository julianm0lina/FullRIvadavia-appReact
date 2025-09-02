export const productos = [

  {
    
    nombre: "Auriculares Gamers",
    descripcion: "Auriculares inalámbricos con cancelación de ruido",
    precio: 2000,
    stock: 10,
    categoria: "ofertas",
    img: "https://i.postimg.cc/bYFrk2Tt/20250716-182213.png",
  },
  {
    
    nombre: "Mouse Inalámbrico",
    descripcion: "Mouse gamer con iluminación RGB",
    precio: 1500,
    stock: 5,
    categoria: "mas vendidos",
    img: "https://i.postimg.cc/3R8NCXVg/20250524-195937.png",
  },
    {
  
    nombre: "Teclado Inalámbrico",
    descripcion: "Teclado replegable inalambrico",
    precio: 2000,
    stock: 5,
    categoria: "mas vendidos",
    img: "https://i.postimg.cc/1XTzQLtH/20250524-195926.png",
  },
    {
 
    nombre: "Auriculares Inlambricos",
    descripcion: "Auriculares bluetooth con sonido envolvente",
    precio: 3000,
    stock: 5,
    categoria: "mas vendidos",
    img: "https://i.postimg.cc/zBxBdLY4/20250524-191723.png",
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
