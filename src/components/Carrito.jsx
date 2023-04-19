import React from 'react'
import ListaCarrito from './ListaCarrito'
import Resumen from './Resumen'
import './container.css'

const Carrito = ({products,productos,setProductos, elementosCarrito,setElementosCarrito}) => {

  return (
    <div class="container">
      <div class="box">
          <ListaCarrito
            products = {products}
            productos = {productos}
            setProductos={setProductos}
            elementosCarrito = {elementosCarrito}
            setElementosCarrito = {setElementosCarrito}
          />
        </div>
      <div class="box2">
          <Resumen
            productos = {productos}
            elementosCarrito = {elementosCarrito}
          />
        </div>
    </div>
  )
}

export default Carrito