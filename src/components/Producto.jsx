import React from 'react';
import BotonAñadir from './BotonAñadir';
import ImagenProducto from './ImagenProducto';
import styles from './Producto.module.css';

const Producto = ({
	precio,
	nombre,
	imagen,
	productos,
	setProductos,
	elementosCarrito,
	setElementosCarrito,
	producto,
}) => {
	return (
		<div className={styles.cardProduct}>
			<ImagenProducto imagen={imagen} />
			<div className={styles.contentCard}>
				<div className={styles.texts}>
					<p className={styles.name}>{nombre}</p>
					<p className={styles.price}>$ {precio}</p>
				</div>
				<BotonAñadir
					productos={productos}
					setProductos={setProductos}
					setElementosCarrito={setElementosCarrito}
					elementosCarrito={elementosCarrito}
					producto={producto}
				/>
			</div>
		</div>
	);
};

export default Producto;
