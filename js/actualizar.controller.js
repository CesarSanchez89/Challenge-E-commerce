import { productServices } from "./user-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector("[data-url]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-name]");
    const precio = document.querySelector("[data-price]");
    const descripcion = document.querySelector("[data-descripcion]");

    productServices.detalleProducto(id).then((perfil) => {

        //imagen.value = perfil.imagen;
        categoria.value = perfil.categoria;
        nombre.value = perfil.nombre;
        precio.value = perfil.precio;
        descripcion.value = perfil.descripcion;

    });
};

obtenerInformacion();

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-price]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productServices.actualizarCliente(imagen,categoria,nombre,precio,descripcion,id).then(()=>{
        window.location.href = "productos.html";
    });
})