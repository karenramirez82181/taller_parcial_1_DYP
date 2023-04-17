import React from 'react'
import ImagenProducto from './ImagenProducto'
import ContadorProductos from './ContadorProductos'

const ProductoCarrito = ({precio,nombre,imagen,descripcion}) => {
  return (
    <div>
        <ImagenProducto imagen={imagen}/>
        <p>{nombre}</p>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <ContadorProductos/>
    </div>
  )
}

export default ProductoCarrito