import React from 'react'
import ListaCarrito from './ListaCarrito'
import Resumen from './Resumen'

const Carrito = ({products,productos,setProductos, elementosCarrito,setElementosCarrito, inputCantidad, setInputCantidad}) => {
  return (
    <div>
        <div>
          <ListaCarrito
            products = {products}
            productos = {productos}
            setProductos={setProductos}
            elementosCarrito = {elementosCarrito}
            setElementosCarrito = {setElementosCarrito}
            inputCantidad = {inputCantidad}
            setInputCantidad = {setInputCantidad}
          />
        </div>
        <div>
          <Resumen/>
        </div>
    </div>
  )
}

export default Carrito