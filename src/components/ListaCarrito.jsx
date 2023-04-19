import React from 'react'
import ProductoCarrito from './ProductoCarrito'

const ListaCarrito = ({products,productos,setProductos, elementosCarrito,setElementosCarrito}) => {

  return (
    
    <div>
      <div>
        <h2>Shopping Cart</h2>
        <hr />
      </div>
      <div>
        {
          elementosCarrito.map(elementoCarrito => elementoCarrito.cantidad>0?(
            <ProductoCarrito
              products = {products}
              key={elementoCarrito.id}
              precio = {productos.filter(p=>p.id === elementoCarrito.id).map(p=>p.precio)}
              nombre = {productos.filter(p=>p.id === elementoCarrito.id).map(p=>p.nombre)}
              imagen = {productos.filter(p=>p.id === elementoCarrito.id).map(p=>p.imagen)}
              descripcion = {productos.filter(p=>p.id === elementoCarrito.id).map(p=>p.descripcion)}
              productos = {productos}
              setProductos={setProductos}
              elementosCarrito = {elementosCarrito}
              setElementosCarrito = {setElementosCarrito}
              elementoCarrito={elementoCarrito}
            />
          ):null)
        }
        <hr />
      </div>
    </div>
  )
}

export default ListaCarrito