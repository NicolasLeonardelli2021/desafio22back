let {schema} = require("./schema")
let crypto = require("crypto");
const serviceProd = require("../../components/productos/serviceProducto/productoService")

class Producto{
    constructor(id, {titulo,precio,url}){
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.url = url;
    }
}

let productoArray = [{id:1, titulo:"mouse",precio:"50",url:"dfsdfsdfs"},
                     {id:2,titulo:"mouse",precio:"20",url:"fdsfdsf"}];
let funciones = {};

funciones.getProducto = ({id})=>{
    return serviceProd.returnProducto(id)
}

funciones.getProductos = ()=>{
    return serviceProd.readProductos();
}

funciones.crearProducto = ({datos})=>{
    
    console.log("------------->",datos);
    const id = crypto.randomBytes(10).toString("hex");
    let newProd = new Producto(id,datos);
    serviceProd.createProducto(newProd)
    return newProd;
}

funciones.actualizarProducto = ({id,datos})=>{
    return serviceProd.modificarProducto(id,datos)
}

funciones.eliminarProducto = (id)=>{
    return serviceProd.delete(id.id) 
}

module.exports = [schema,funciones]
