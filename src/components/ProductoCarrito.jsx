import React from 'react'
import ImagenProducto from './ImagenProducto'
import ContadorProductos from './ContadorProductos'

const ProductoCarrito = ({products,precio,nombre,imagen,descripcion,productos,setProductos, elementosCarrito,setElementosCarrito,elementoCarrito, inputCantidad, setInputCantidad}) => {
  return (
    <div>
        <ImagenProducto imagen={imagen}/>
        <p>{nombre}</p>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <ContadorProductos
          products = {products}
          productos = {productos}
          setProductos={setProductos}
          elementosCarrito = {elementosCarrito}
          setElementosCarrito = {setElementosCarrito}
          elementoCarrito={elementoCarrito}
          inputCantidad = {inputCantidad}
          setInputCantidad = {setInputCantidad}
        />
    </div>
  )
}

export default ProductoCarrito