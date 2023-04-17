import React from 'react'
import styles from './ImagenProducto.module.css'

const ImagenProducto = ({imagen}) => {
  return (
    <div className={styles.imagenDelProducto}>
        <img src={imagen} />
    </div>
  )
}

export default ImagenProducto