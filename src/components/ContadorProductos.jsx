import React from 'react'


const ContadorProductos = ({products,productos,setProductos, elementosCarrito,setElementosCarrito,elementoCarrito}) => {

  const handlerInput = ({target})=>{
    const movimiento = parseInt(target.value) < elementoCarrito.cantidad ? 'Resta' : 'Suma';
    
    const newElementos = elementosCarrito.map(e => e.id === elementoCarrito.id ? {...e,cantidad:parseInt(target.value)}:e);
    setElementosCarrito(newElementos);

    const newProductos = productos.map(
      p => p.id === elementoCarrito.id ? {...p, cantidad:movimiento === 'Suma' ? p.cantidad - 1 : p.cantidad + 1} : p);
    setProductos(newProductos);
  };
  return (
    <div>
      <input
        type="number"
        value={elementoCarrito.cantidad}
        onChange={handlerInput}
        min="0"
        max={products.filter(p => p.id === elementoCarrito.id).map(p => p.cantidad)}/>
    </div>
  )
}

export default ContadorProductos