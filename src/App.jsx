import { useState } from 'react'
import ListaProductos from './components/ListaProductos'
import Header from './components/Header'
import Carrito from './components/Carrito'

const products = [
  {id:'1u',nombre:'Nike Dunk High Retro',precio:120,cantidad:5,descripcion:'Really good Nike shoes',imagen:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e7687f1-c13e-4bac-8ffa-a6f863ae9157/dunk-high-retro-zapatillas-PN8S8F.png'},
  {id:'2u',nombre:'Nike Zoom Fly 5',precio:150,cantidad:3,descripcion:'Really good Nike shoes',imagen:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b2715fe-3d81-4177-9f60-74d79112cca7/zoom-fly-5-zapatillas-de-running-carretera-p5TWL7.png'},
  {id:'3u',nombre:'Nike Streetgato',precio:180,cantidad:2,descripcion:'Really good Nike shoes',imagen:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/88b43287-e774-48ee-95dd-940c251fd98e/streetgato-botas-de-futbol-DkWQRB.png'},
  {id:'4u',nombre:'Nike Zoom Freak 4',precio:150,cantidad:3 ,descripcion:'Really good Nike shoes',imagen:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f7382cc9-e11d-4e9f-90d0-8f9ec482432a/zoom-freak-4-zapatillas-de-baloncesto-Qzzkpn.png'}
]

const elements = [
  {id:'1u',cantidad:0},
  {id:'2u',cantidad:0},
  {id:'3u',cantidad:0},
  {id:'4u',cantidad:0}
]

const App = () => {
  const [productos, setProductos] = useState(products);
  const [elementosCarrito, setElementosCarrito] = useState(elements);
  console.log("AP"+products.map(p => p.cantidad));
  return (
    <div>

      <div>
        <Header 
          elementosCarrito={elementosCarrito}
        />
        <hr />
      </div>
      
      <div>
        <ListaProductos
          productos = {productos}
          setProductos={setProductos}
          elementosCarrito = {elementosCarrito}
          setElementosCarrito = {setElementosCarrito}
        />
        <hr />
      </div>

      <div>
        <Carrito
          products = {products}
          productos = {productos}
          setProductos={setProductos}
          elementosCarrito = {elementosCarrito}
          setElementosCarrito = {setElementosCarrito}
        />
      </div>
      
    </div>
  )
}

export default App
