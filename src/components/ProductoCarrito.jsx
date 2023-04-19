import React from 'react'
import ImagenProducto from './ImagenProducto'
import ContadorProductos from './ContadorProductos'
import styles from './ProductoCarrito.module.css';

const ProductoCarrito = ({products,precio,nombre,imagen,descripcion,productos,setProductos, elementosCarrito,setElementosCarrito,elementoCarrito}) => {

  return (
    <div className={styles.productocarrito}>
        <ImagenProducto imagen={imagen}/>
        <p className={styles.nombre}>{nombre}</p>
        <p className={styles.descripcion } >{descripcion}</p>
        <p className={styles.precio }>${precio}</p>
        <ContadorProductos
          products = {products}
          productos = {productos}
          setProductos={setProductos}
          elementosCarrito = {elementosCarrito}
          setElementosCarrito = {setElementosCarrito}
          elementoCarrito={elementoCarrito}
        />
    </div>
  )
}

export default ProductoCarrito