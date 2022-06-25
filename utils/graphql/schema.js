let {buildSchema} = require("graphql");
const schema = buildSchema(`
    type Producto{
        id: ID!
        titulo: String
        precio: String
        url: String
    }
    input ProductoInput{
        titulo: String
        precio: String
        url: String
    }
    type Query{
        getProducto(id:ID!): Producto
        getProductos:[Producto]
    }
    type Mutation{
        crearProducto(datos:ProductoInput):Producto
        actualizarProducto(id:ID!,datos:ProductoInput): Producto
        eliminarProducto(id:ID!): Producto
    }
`)

module.exports = {schema}