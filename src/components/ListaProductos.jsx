import React from 'react';
import Producto from './Producto';
import styles from './ListaProductos.module.css';

const ListaProductos = ({
	productos,
	setProductos,
	elementosCarrito,
	setElementosCarrito,
}) => {
	return (
		<div className = {styles.gridContainer}>
			{productos.map(producto => (
				<Producto
					key = {producto.id}
					precio = {producto.precio}
					nombre = {producto.nombre}
					imagen = {producto.imagen}
					productos = {productos}
					setProductos = {setProductos}
					elementosCarrito = {elementosCarrito}
					setElementosCarrito = {setElementosCarrito}
					producto = {producto}
				/>
			))}
		</div>
	);
};

export default ListaProductos;
