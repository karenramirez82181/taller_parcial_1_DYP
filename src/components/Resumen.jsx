import React from 'react'
import { useState } from 'react'

const Resumen = ({productos, elementosCarrito}) => {

  const [valorCupon, setValorCupon] = useState(0);

  const subtotal = elementosCarrito.reduce((contador,p) => contador + p.cantidad * productos.filter(q => q.id === p.id).map(r => r.precio), 0);
  const total = subtotal - valorCupon;

  const ObtenerValorCupon = ({target}) => {
    setValorCupon(parseInt(target.value));
  }
  
  return (
    <div>
        <div>
          <h2>Summary</h2>
          <hr />
          <p>ENTER COUPON CODE <input type='number' inputMode='none' min='0' max='100' onChange={ObtenerValorCupon} defaultValue={0}/></p>
          <hr />
          <p>SUBTOTAL <input type="text" readOnly value = {subtotal}/></p>
          <p>SHIPPING <input type="text" readOnly value={'FREE'}/></p>
          <p>COUPON <input type="text" readOnly value={valorCupon}/></p>
          <hr />
          <p>TOTAL <input type="text" readOnly value={total}/></p>
        </div>
    </div>
  )
}

export default Resumen