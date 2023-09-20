
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavScrollExample from './component/Navbar/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './component/ItemListContainer/itemListContainer'
import ItemDetailContainer from './component/itemDetailContainer/itemDetailContainer'
import estilos from "./component/estilos/estilos.css"
import CartContainer from './component/CartContainer/CartContainer'





//link podemos navegar a una url 

function App() {
  return (
    <BrowserRouter>
      <NavScrollExample />
      <Routes>
        <Route path=' / ' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
