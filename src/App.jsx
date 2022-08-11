import { Routes, Route } from "react-router-dom";
import  {ProductDetails} from './components/ProductDetails'
import  {ProductList} from './components/ProductList'
function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<ProductList/>}></Route>
      <Route path='/details' element={<ProductDetails/>}></Route>
      </Routes>
    </>
  )
}

export default App
