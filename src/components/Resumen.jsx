import React from 'react'
import { useState } from 'react'
import './container.css'

const Resumen = ({productos, elementosCarrito}) => {

  const [valorCupon, setValorCupon] = useState(0);

  const subtotal = elementosCarrito.reduce((contador,p) => contador + p.cantidad * productos.filter(q => q.id === p.id).map(r => r.precio), 0);
  const total = subtotal - valorCupon;

  const ObtenerValorCupon = ({target}) => {

    (target.value != '' ? setValorCupon(parseInt(target.value) <= 100 ? parseInt(target.value) : 100) : setValorCupon(0))
  }
  
  return (
    <div className='background_summary'>
        <div>
          <h2>Summary</h2>
          <hr />
          <p className='title_cupon'>ENTER COUPON CODE <input type='number' min='0' max='100' onChange={ObtenerValorCupon} value={valorCupon}/></p>
          <hr />
          <p>SUBTOTAL <input type = "text" readOnly value = {`$${subtotal}`}/></p>
          <p>SHIPPING <input type = "text" readOnly value = {'FREE'}/></p>
          <p>COUPON <input type = "text" readOnly value = {`$${valorCupon}`}/></p>
          <hr />
        <p className='title_total'>TOTAL <input type = "text" readOnly value = {`$${total}`}/></p>
        </div>
    </div>
  )
}

export default Resumen