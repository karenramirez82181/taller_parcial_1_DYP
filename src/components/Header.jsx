import React from 'react'
import styles from './Header.module.css'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className={styles.botonCarrito}>
		  <h1>TALLER - PARCIAL</h1>
      <button>
        <AiOutlineShoppingCart/>
        Productos
      </button>
	  </div>
  )
}

export default Header