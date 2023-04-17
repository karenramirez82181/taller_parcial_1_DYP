import React from 'react'
import { useEffect } from "react";

const ContadorProductos = ({productos,setProductos, elementosCarrito,setElementosCarrito,elementoCarrito,inputCantidad, setInputCantidad}) => {
  const cantidadProductos= null;

  const handlerInput = ({target})=>{
    console.log("target"+target.value);
    const newElementos = elementosCarrito.map(e => e.id === elementoCarrito.id ? {...e,cantidad:parseInt(target.value)}:e);
    setElementosCarrito(newElementos);
  };
  return (
    <div>
      <input
        type="number"
        id='ContadorProducto'
        value={elementoCarrito.cantidad} 
        onInput={handlerInput}/>
    </div>
  )
}

export default ContadorProductos