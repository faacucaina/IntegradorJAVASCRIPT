
import { renderCategories } from "./src/services/categories";
import { hadleSearchProductByName } from "./src/services/search";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStorage } from "./src/views/store";


//=======APLICACION=====

handleGetProductsToStorage();
renderCategories();

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let productosActivo = null;

export const setProductoActivo = (productoIn) => {
    productosActivo = productoIn;
};


//=====HEADER======
const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener('click', () => {
    openModal();
    });

//===BUTTONSEARCH====
const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener('click', () => {
    hadleSearchProductByName();
    });





