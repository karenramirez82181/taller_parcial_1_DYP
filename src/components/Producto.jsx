import React from 'react'
import BotonAñadir from './BotonAñadir'
import ImagenProducto from './ImagenProducto'


const Producto = ({precio,nombre,imagen,productos,setProductos,elementosCarrito,setElementosCarrito,producto}) => {
  return (
    <div>
        <ImagenProducto imagen={imagen}/>
        <p>{nombre}</p>
        <p>{precio}</p>
        <BotonAñadir
          productos={productos}
          setProductos={setProductos}
          setElementosCarrito={setElementosCarrito}
          elementosCarrito={elementosCarrito}
          producto={producto}
        />
    </div>
  )
}

export default Producto