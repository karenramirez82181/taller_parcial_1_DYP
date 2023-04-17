import React from 'react'

const ContadorProductos = ({productos,setProductos, elementosCarrito,setElementosCarrito,elementoCarrito}) => {

  const handlerInput = ({target})=>{
    const movimiento = parseInt(target.value)<elementoCarrito.cantidad?'R':'S';

    const newProductos = productos.map(
      p => p.id === elementoCarrito.id ? {...p, cantidad:movimiento==='S'?p.cantidad-1:p.cantidad+1} : p);
    setProductos(newProductos);
    
    const newElementos = elementosCarrito.map(e => e.id === elementoCarrito.id ? {...e,cantidad:parseInt(target.value)}:e);
    setElementosCarrito(newElementos);
  };
  return (
    <div>
      <input
        type="number"
        id='ContadorProducto'
        value={elementoCarrito.cantidad} 
        onChange={handlerInput}/>
    </div>
  )
}

export default ContadorProductos