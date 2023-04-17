import React from 'react'
import styles from './BotonAñadir.module.css'

const BotonAñadir = ({productos,setProductos,setElementosCarrito,elementosCarrito,producto}) => {
  const handlerSubmit = () => {
    const newProductos = productos.map(p => p.id === producto.id ? {...producto, cantidad:producto.cantidad -= 1} : p);
    setProductos(newProductos);
    const newElementos = elementosCarrito.map(e => e.id === producto.id ? {...e, cantidad:e.cantidad += 1} : e);
    setElementosCarrito(newElementos);
  }
  return (
    <div className = {styles.botonAñadirProducto}>
        <button disabled={producto.cantidad >= 1 ? false : true} onClick = {handlerSubmit}> Add To Cart </button>
    </div>
  )
}

export default BotonAñadir