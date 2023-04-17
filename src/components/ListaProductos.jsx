import React from 'react'
import Producto from './Producto'


const ListaProductos = ({productos}) => {
    
  return (
    <div>
      {
        productos.map(producto => (
          <Producto 
            key={producto.id}
            precio={producto.precio}
            nombre={producto.nombre}
            imagen={producto.imagen}
          />
        ))
      } 
    </div>
  )
}

export default ListaProductos