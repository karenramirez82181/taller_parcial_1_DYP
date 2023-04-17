import React from 'react'
import { useEffect } from "react";

const ContadorProductos = ({products,productos,setProductos, elementosCarrito,setElementosCarrito,elementoCarrito,inputCantidad, setInputCantidad}) => {
  const cantidadProductos= null;

  const handlerInput = ({target})=>{
    console.log("target"+target.value);
    console.log(products.filter(p => p.id === elementoCarrito.id).map(p => p.cantidad))
    console.log(products.map(p => p.cantidad))
    const newElementos = elementosCarrito.map(e => e.id === elementoCarrito.id ? {...e,cantidad:parseInt(target.value)}:e);
    setElementosCarrito(newElementos);
  };
  return (
    <div>
      <input
        type="number"
        value={elementoCarrito.cantidad} 
        onInput={handlerInput}
        min="0" max={products.filter(p => p.id === elementoCarrito.id).map(p => p.cantidad)}
        />
    </div>
  )
}

export default ContadorProductos