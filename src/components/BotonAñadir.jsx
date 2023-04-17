import React from 'react'
import styles from './BotonAñadir.module.css'

const BotonAñadir = ({productos,setProductos,setElementosCarrito,elementosCarrito,producto}) => {
  const handlerSubmit = () => {
    const newProductos = productos.map(p => p.id === producto.id ? {...producto, cantidad:producto.cantidad -= 1} : p);
    setProductos(newProductos);
    setElementosCarrito([...elementosCarrito,producto]);
  }
  return (
    <div className = {styles.botonAñadirProducto}>
        <button disabled={producto.cantidad >= 1 ? false : true} onClick = {handlerSubmit}> Add To Cart </button>
    </div>
  )
}

export default BotonAñadir