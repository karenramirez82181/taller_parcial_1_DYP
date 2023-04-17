import React from 'react'
import ListaCarrito from './ListaCarrito'
import Resumen from './Resumen'

const Carrito = () => {
  return (
    <div>
        <div>
          <ListaCarrito/>
        </div>
        <div>
          <Resumen/>
        </div>
    </div>
  )
}

export default Carrito