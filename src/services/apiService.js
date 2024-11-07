const BASE_URL = "https://670f00b53e71518616564ce1.mockapi.io/yesi/productos";

export const fetchProductos = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Error al obtener los productos");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createProducto = async (data) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Error al crear el producto");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProducto = async (id, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Error al actualizar el producto");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteProducto = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar el producto");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
