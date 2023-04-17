import React from 'react'
import ImagenProducto from './ImagenProducto'
import ContadorProductos from './ContadorProductos'

const ProductoCarrito = ({precio,nombre,imagen,descripcion,productos,setProductos, elementosCarrito,setElementosCarrito}) => {
  return (
    <div>
        <ImagenProducto imagen={imagen}/>
        <p>{nombre}</p>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <ContadorProductos
          productos = {productos}
          setProductos={setProductos}
          elementosCarrito = {elementosCarrito}
          setElementosCarrito = {setElementosCarrito}
        />
    </div>
  )
}

export default ProductoCarrito