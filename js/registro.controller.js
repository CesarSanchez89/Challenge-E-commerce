import { productServices } from "./user-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const imagen = document.querySelector("[data-url]").value
    const categoria = document.querySelector("[data-categoria]").value
    const nombre = document.querySelector("[data-name]").value
    const precio = document.querySelector("[data-price]").value
    const descripcion = document.querySelector("[data-descripcion]").value

    productServices.crearProducto(imagen,categoria,nombre,precio,descripcion).then( () => {
        window.location.href = "productos.html";
    }).catch(err => console.log(err))

})