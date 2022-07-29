
const listaProductos = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearProducto = (imagen,categoria,nombre,precio,descripcion) => {
    return fetch("http://localhost:3000/perfil",{
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen,categoria,nombre,precio,descripcion, id: uuid.v4()})
    })
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "DELETE",  
    })
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json())
}

const actualizarCliente = (imagen,categoria,nombre,precio,descripcion,id) => {
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "PUT", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen,categoria,nombre,precio,descripcion,id})
    }).then((respuesta) => respuesta).catch((err)=>console.log(err));
}

export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarCliente,
}



