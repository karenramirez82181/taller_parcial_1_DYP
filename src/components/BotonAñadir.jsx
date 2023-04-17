import React from 'react'
import styles from './BotonAñadir.module.css'

const BotonAñadir = ({productos,setProductos,setElementosCarrito,elementosCarrito,producto}) => {
  const handlerSubmit = ()=>{
    setElementosCarrito([...elementosCarrito,producto]);
    const newProductos = productos.map(p=>p.id===producto.id?{...producto,cantidad:producto.cantidad=producto.cantidad-1}:p)
    setProductos(newProductos);
  }
  return (
    <div className={styles.botonAñadirProducto}>
        <button onClick={handlerSubmit}>Add To Cart</button>
    </div>
  )
}

export default BotonAñadir