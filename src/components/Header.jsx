import React from 'react'
import styles from './Header.module.css'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = ({cantidadElementosCarrito}) => {
  return (
    <div className={styles.botonCarrito}>
		  <div>
        <h1>Taller 1</h1>
      </div>
      <div>
        <button>
          <AiOutlineShoppingCart/>
          {` ${cantidadElementosCarrito} Productos`}
        </button>
      </div>
	  </div>
  )
}

export default Header