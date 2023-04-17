import { useState } from 'react'
import ListaProductos from './components/ListaProductos'
import Header from './components/Header'

const App = () => {
  const [productos, setProductos] = useState([]);
  return (
    <div>
      <Header/>
      <ListaProductos/>
    </div>
  )
}

export default App
