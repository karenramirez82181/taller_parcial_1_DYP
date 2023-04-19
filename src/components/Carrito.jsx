import React from 'react'
import ListaCarrito from './ListaCarrito'
import Resumen from './Resumen'

const Carrito = ({products,productos,setProductos, elementosCarrito,setElementosCarrito}) => {

  return (
    <div>
        <div>
          <ListaCarrito
            products = {products}
            productos = {productos}
            setProductos={setProductos}
            elementosCarrito = {elementosCarrito}
            setElementosCarrito = {setElementosCarrito}
          />
        </div>
        <div>
          <Resumen
            productos = {productos}
            elementosCarrito = {elementosCarrito}
          />
        </div>
    </div>
  )
}

export default Carrito