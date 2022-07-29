import { productServices } from "./user-service.js";

const crearNuevaLinea = (imagen,nombre,precio,id) => {
    const linea = document.createElement("div")
    const contenido = `
        <ul class="products__store__list">
            <img class="icono__delete__st" src="./assets/icon__delete.png" alt="" id="${id}">
            <a href="./actualizar-producto.html?id=${id}"><img class="icono__pencil__st" src="./assets/icon__pencil.png" alt=""></a>
            <li class="products__store__item__img"><img src=${imagen.replace('C:\\fakepath\\', './assets/')} alt=""></li>
            <li class="products__store__item__title"><h3>${nombre}</h3></li>
            <li class="products__store__item__price"><h4>$${precio},00</h4></li>
            <a href="./one-product.html?id=${id}"><li class="products__store__item__link"><p>Ver producto</p></li></a>
        </ul>
            `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("img");
    btn.addEventListener("click", ()=>{
        const id = btn.id;
        productServices.eliminarProducto(id).then(respuesta => {

        }).catch(err => alert("Ocurrió un error"));
    })

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


