import React from 'react'


const ContadorProductos = ({products,productos,setProductos, elementosCarrito,setElementosCarrito,elementoCarrito}) => {

  const handlerInput = ({target})=>{
    
    //Si no es vacio ni negativo entra a ingresar valores
    if(target.value != '' && !(target.value.startsWith('-')))
    {
      //Si el valor ingresado es menor al stock del articulo entra a ingresar valores
      if(parseInt(target.value) <= products.filter(pr => pr.id === elementoCarrito.id).map(pr => pr.cantidad))
      {
        const movimiento = parseInt(target.value) < elementoCarrito.cantidad ? 'Resta' : 'Suma';
      
        const newElementos = elementosCarrito.map(e => e.id === elementoCarrito.id ? {...e,cantidad:parseInt(target.value)}:e);
        setElementosCarrito(newElementos);
  
        const newProductos = productos.map(
          p => p.id === elementoCarrito.id ? {...p, cantidad:movimiento === 'Suma' ? p.cantidad - 1 : p.cantidad + 1} : p);
        setProductos(newProductos);
      }
      else//Sino, procede a colocar la cantidad maxima del stock por producto
      {
        const newElementos = elementosCarrito.map(
          e => e.id === elementoCarrito.id ? {...e,cantidad:products.filter(pr => pr.id === elementoCarrito.id).map(pr => pr.cantidad)[0]}:e);
        setElementosCarrito(newElementos);

        const newProductos = productos.map(p => p.id === elementoCarrito.id ? {...p, cantidad:0} : p);
        setProductos(newProductos);
      }
    }
    else//Sino se coloca el valor 0 por defecto
    {
      const newElementos = elementosCarrito.map(e => e.id === elementoCarrito.id ? {...e,cantidad:0}:e);
      setElementosCarrito(newElementos);

      const newProductos = productos.map(
        p => p.id === elementoCarrito.id ? {...p, cantidad:products.filter(pr => pr.id === elementoCarrito.id).map(pr => pr.cantidad)[0]} : p);
        setProductos(newProductos);
    }
  };
  
  return (
    <div>
      <input
        type = "number"
        value = {elementoCarrito.cantidad}
        onChange = {handlerInput}
        min = "0"
        max = {products.filter(p => p.id === elementoCarrito.id).map(p => p.cantidad)}
      />
    </div>
  )
}

export default ContadorProductos