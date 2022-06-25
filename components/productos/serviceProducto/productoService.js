const { array } = require("yargs");
const faker = require("../../faker")

class Producto{
    static ban = 0;
     static productos = [];
     
        async list(){
            return this.productos
        }
     
      async faker(){
        faker.test()
        .then((array)=> {
            for (const i of array) {
                Producto.productos.push(i)
            }
            })
        .catch((error)=> console.log(error))
     } 

     async readProductos(){
        try {
            if(Producto.ban == 0){
                this.faker();
                Producto.ban = 1;
            }
            let response = await Producto.productos;
            return response
        } catch (error) {
            console.log(error);
        }      
    }

    async returnProducto(id){
        let producto = "";
        for(let i = 0; i< Producto.productos.length; i++){
            if(Producto.productos[i].id == id){
                producto = Producto.productos[i]
            }  
    }
    if(producto != ""){
        return producto
    }else{
        return "No hay productos con ese id"
    }
}

    async createProducto(data){
        try {
            Producto.productos.push(data);
            return(this.readProductos());
        } catch (error) {
            console.log(error)
        }
    }

    async modificarProducto(id,data){
        let datos ={
            id,
            ...data
        }
        let element = "";
        try {
            for(let i = 0; i< Producto.productos.length; i++){
                if(Producto.productos[i].id == id){
                    Producto.productos.splice(i,1,datos)
                    element = Producto.productos[i];
        }
    }
        return element;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id){
        try {
            let element = "";
            for(let i = 0; i< Producto.productos.length; i++){
                if(Producto.productos[i].id == id){
                    element = Producto.productos[i];
                    Producto.productos.splice(i,1)
                }
            }
            return element;
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new Producto

