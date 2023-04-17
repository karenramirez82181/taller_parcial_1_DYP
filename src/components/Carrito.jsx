import React from 'react'
import ListaCarrito from './ListaCarrito'
import Resumen from './Resumen'

const Carrito = ({productos,setProductos, elementosCarrito,setElementosCarrito, inputCantidad, setInputCantidad}) => {
  return (
    <div>
        <div>
          <ListaCarrito
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