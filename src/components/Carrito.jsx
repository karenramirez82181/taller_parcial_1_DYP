import React from 'react'
import ListaCarrito from './ListaCarrito'
import Resumen from './Resumen'
import './container.css'

const Carrito = ({products,productos,setProductos, elementosCarrito,setElementosCarrito}) => {

  return (
    <div className="container">
      <div className="box">
          <ListaCarrito
            products = {products}
            productos = {productos}
            setProductos={setProductos}
            elementosCarrito = {elementosCarrito}
            setElementosCarrito = {setElementosCarrito}
          />
        </div>
      <div className="box2">
          <Resumen
            productos = {productos}
            elementosCarrito = {elementosCarrito}
          />
        </div>
    </div>
  )
}

export default Carrito