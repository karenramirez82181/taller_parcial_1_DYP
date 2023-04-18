import React from 'react'
import Producto from './Producto'


const ListaProductos = ({productos,setProductos, elementosCarrito,setElementosCarrito}) => {
    
  return (
    <div>
      {
        productos.map(producto => (
          <div>
            <Producto 
              key={producto.id}
              precio={producto.precio}
              nombre={producto.nombre}
              imagen={producto.imagen}
              productos={productos}
              setProductos={setProductos}
              elementosCarrito={elementosCarrito}
              setElementosCarrito={setElementosCarrito}
              producto={producto}
            />
          </div>
        ))
      } 
    </div>
  )
}

export default ListaProductos