import {useState, useEffect} from 'react'
import { Heading } from '@chakra-ui/react'
import { ProductItems } from './ItemsProducts'



export  function ProductList() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
      fetch('http://localhost:8080/api/v1/products')
      .then(res => res.json())
      .then(data => setProductos(data.producto))
    }, [])



  return (
    <>
    <Heading as='h1' size='lg' m={4}>
        Productos Stock
      </Heading>
        <section>
        {
          productos.map(product => (
            <ProductItems key={product.__id} {...product}/>
          ))
        }
        </section>
        </>
  )
}
