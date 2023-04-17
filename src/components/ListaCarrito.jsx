import React from 'react'
import ProductoCarrito from './ProductoCarrito'

const ListaCarrito = ({productos,setProductos, elementosCarrito,setElementosCarrito}) => {
  return (
    
    <div>
        <div>
            <h2>Shopping Cart</h2>
            <hr />
        </div>
        <div>
            {
              elementosCarrito.map(elementoCarrito => (
                  <ProductoCarrito
                    precio = {elementoCarrito.precio}
                    nombre = {elementoCarrito.nombre}
                    imagen = {elementoCarrito.imagen}
                    descripcion = {elementoCarrito.descripcion}
                    productos = {productos}
                    setProductos={setProductos}
                    elementosCarrito = {elementosCarrito}
                    setElementosCarrito = {setElementosCarrito}
                  />
              ))
            }

            
            <hr />
        </div>
      
    </div>
  )
}

export default ListaCarrito