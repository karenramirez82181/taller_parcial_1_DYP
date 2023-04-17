import React from 'react'
import styles from './BotonAñadir.module.css'

const BotonAñadir = ({setElementosCarrito,elementosCarrito,producto}) => {
  const handlerSubmit = ()=>{
    setElementosCarrito([...elementosCarrito,producto]);
  }
  return (
    <div className={styles.botonAñadirProducto}>
        <button onClick={handlerSubmit}>Add To Cart</button>
    </div>
  )
}

export default BotonAñadir