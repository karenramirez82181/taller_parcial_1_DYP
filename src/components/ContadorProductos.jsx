import React from 'react'
import { useEffect } from "react";

const ContadorProductos = ({productos,setProductos, elementosCarrito,setElementosCarrito,elementoCarrito,inputCantidad, setInputCantidad}) => {
  const cantidadProductos= null;

  //cantidadProductos.onchange=function(event){if (event.inputType === "increment" || event.inputType === "decrement") {
    //console.log("Se hizo clic en la flecha hacia " + (event.inputType === "increment" ? "arriba" : "abajo"));
    // Llama a tu función aquí
  //}}

  const handlerInput = ({target})=>{
    //setInputCantidad(cantidadProductos);
    console.log("target"+target.value)
  };

  /*const manejarCambio = (evento) => {
    console.log('Function' + evento.nativeEvent.inputType+)
    if (evento.inputType === "increment" || evento.inputType === "decrement") {
      console.log(`Se hizo clic en la flecha hacia ${evento.inputType === "increment" ? "arriba" : "abajo"}`);
      // Llama a tu función aquí
    }
  };
  useEffect(() => {
    setInputCantidad(elementoCarrito.cantidad)
  });*/
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