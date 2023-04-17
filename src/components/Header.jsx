import React from 'react'
import styles from './Header.module.css'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = ({elementosCarrito}) => {
  const cantidad = elementosCarrito.reduce((contador,p) => contador+=p.cantidad,0);
  return (
    <div className={styles.botonCarrito}>
		  <div>
        <h1>Taller 1</h1>
      </div>
      <div>
        <button>
          <AiOutlineShoppingCart/>
          {` ${cantidad} Productos`}
        </button>
      </div>
	  </div>
  )
}

export default Header