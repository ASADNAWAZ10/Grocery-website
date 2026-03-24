import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppcontext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProudctCategory from './pages/ProudctCategory'
import ProductDetails from './pages/ProdcutDetails'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'
import MyOrder from './pages/MyOrder'
import SellerLogin from './components/seller/SellerLogin'
import SellerLayout from './pages/seller/SellerLayout'
import ProductList from './pages/seller/ProductList'
import Orders from './pages/seller/Orders'
import AddProduct from './pages/seller/AddProduct'
import Loading from './components/Loading'

const App = () => {
  const isSellerPath = useLocation().pathname.includes('seller');
  const {showUserLogin, isseller} = useAppcontext();
  <Toaster />
  return (
    <div className='text-default min-h-screen  text-gray-700 bg-white'>
     {isSellerPath ? "" : <NavBar /> } 
     {showUserLogin ? <Login /> : null}
     <Toaster />
      <div className={`${isSellerPath ? "" : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/products/:category' element={<ProudctCategory/>} />
          <Route path='/products/:category/:id' element={<ProductDetails/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/add-address' element={<AddAddress />} />
          <Route path='/myorders' element={<MyOrder />} />
          <Route path='/loader' element={<Loading />} />
          <Route path='/seller' element={isseller ? <SellerLayout /> : <SellerLogin />} >
          <Route index element={isseller ? <AddProduct /> : null} />
          <Route path='/seller/product-list' element={<ProductList />} />
          <Route path='/seller/orders' element={<Orders />} />
          </Route>    
        </Routes> 

      </div>
      {!isSellerPath && <Footer />}
    </div>
  )
}

export default App