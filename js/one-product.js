import { productServices } from "./user-service.js";

const crearNuevaLinea = (imagen,nombre,precio,descripcion) => {

    const linea = document.createElement("div")
    const contenido = `
    <div class="product__store__img">
        <img src=${imagen.replace('C:\\fakepath\\', './assets/')} alt="">
    </div>
    <div class="product__store__data">
        <ul class="product__store__list">
            <li class="product__store__item__title"><h3>${nombre}</h3></li>
            <li class="product__store__item__price"><h4>$${precio},00</h4></li>
            <li class="product__store__item__descripcion"><h4>${descripcion}</h4></li> 
        </ul>
    </div>
            `;
    linea.innerHTML = contenido;

    const buscar = document.querySelector(".input__header");
    buscar.addEventListener("keyup", ()=>{
        const word = buscar.value;
        
        productServices.listaProductos().then((data)=>{
            if((nombre.indexOf(word)>=0)||(word=="")){
                linea.classList.remove("product--invalid");
            }else{
                linea.classList.add("product--invalid");
            };
        });
    }); 
    return linea
}

const crearSimilar = (imagen,nombre,precio,id) => {

    const linea = document.createElement("div")
    const contenido = `
    <ul class="products__store__list">
            <li class="products__store__item__img"><img src=${imagen.replace('C:\\fakepath\\', './assets/')} alt=""></li>
            <li class="products__store__item__title"><h3>${nombre}</h3></li>
            <li class="products__store__item__price"><h4>$${precio},00</h4></li>
            <a href="./one-product.html?id=${id}"><li class="products__store__item__link"><p>Ver producto</p></li></a> 
    </ul>
         `;
    linea.innerHTML = contenido; 
    return linea
}

const table = document.querySelector("[data-table]");
const same = document.querySelector("[data-same]");

const obtenerProducto = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    productServices.detalleProducto(id).then((perfil) => {

        const nuevaLinea = crearNuevaLinea(perfil.imagen,perfil.nombre,perfil.precio,perfil.descripcion,perfil.categoria);
        table.appendChild(nuevaLinea);
        productServices.listaProductos().then((data)=>{
            data.forEach(({imagen,nombre,precio,categoria,id}) => {
                if((categoria==perfil.categoria)&&(nombre!=perfil.nombre)){
                    const segundaLinea = crearSimilar(imagen,nombre,precio,id);
                    same.appendChild(segundaLinea);
                };
            });
        }).catch((error)=>alert("Ocurrió un error"));
    })   
};

obtenerProducto();


