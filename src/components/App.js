import React, { useState, useEffect } from 'react'
import '../App.css'
import ControlledCarousel from './CarouselContainer'
import NavbarCanvas from './Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductsContainer from './ProductsContainer'
// import axios from 'axios'
import Footer from './footer'
import ProductPage from './ProductPage'
import Cart from './Cart'



function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchFakeStoreApi(){
      try{
        let response = await fetch('https://fakestoreapi.com/products')
        let productsData = await response.json()
        setData(productsData)
      }catch{
        setData([])
        const app = document.querySelector('.app')
        let head = document.createElement('h1')
        head.innerText = 'Something went wrong to fetch DATA'
        app.appendChild(head)
      }
    }
    fetchFakeStoreApi()
  }, [])
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {data.map((product) => (
          <Route
            key={product.id}
            path={`/products/${product.id}`}
            element={<ProductPage product={product} />}
          />
        ))}
        <Route path='/cart' element={<Cart />} />
</Routes>
      </BrowserRouter>
    </>  
    
  )
}

export default App


function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchFakeStoreApi(){
      try{
        let response = await fetch('https://fakestoreapi.com/products')
        let productsData = await response.json()
        setData(productsData)
      }catch{
        setData([])
        const app = document.querySelector('.app')
        let head = document.createElement('h1')
        head.innerText = 'Something went wrong to fetch DATA'
        app.appendChild(head)
      }
    }
    fetchFakeStoreApi()
  }, [])
  return (
    <div className='app'>
        <NavbarCanvas />
        <ControlledCarousel data={data}/>
        <ProductsContainer data={data}/>
        <Footer />
      </div>
  )
}
