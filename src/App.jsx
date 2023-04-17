import { useState } from 'react'
import ListaProductos from './components/ListaProductos'
import Header from './components/Header'

const App = () => {
  const [productos, setProductos] = useState([]);
  return (
    <div>
      <div><Header/></div>
      <div><ListaProductos/></div>
    </div>
  )
}

export default App
