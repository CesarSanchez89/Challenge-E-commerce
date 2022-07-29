import { productServices } from "./user-service.js";

const crearNuevaLinea = (imagen,nombre,precio,id) => {
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

    const buscar = document.querySelector(".input__header");
    buscar.addEventListener("keyup", ()=>{
        const word = buscar.value;
        
        productServices.listaProductos().then((data)=>{
            console.log(nombre)
            if((nombre.indexOf(word)>=0)||(word=="")){
                linea.classList.remove("product--invalid");
            }else{
                linea.classList.add("product--invalid");
            }
        })
    })
    
    return linea
}

const table = document.querySelector("[data-table]");

productServices.listaProductos().then((data)=>{
    data.forEach(({imagen,nombre,precio,id}) => {
        const nuevaLinea = crearNuevaLinea(imagen,nombre,precio,id);
        table.appendChild(nuevaLinea);
    })
}).catch((error)=>alert("Ocurrió un error"));