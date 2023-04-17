import React from 'react'
import BotonAñadir from './BotonAñadir'
import ImagenProducto from './ImagenProducto'


const Producto = ({precio,nombre,imagen}) => {
  return (
    <div>
        <ImagenProducto imagen={imagen}/>
        <p>{nombre}</p>
        <p>{precio}</p>
        <BotonAñadir/>
    </div>
  )
}

export default Producto