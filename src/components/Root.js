import React, { useContext } from 'react'
import Header from './Header'
import Context from '../stateManagement/Context'
import CartList from './CartList'
import ProductList from './ProductList'

const Root = () => {
    const {showCart}= useContext(Context)
  return (
    <>
      <Header/>
    {showCart ? <CartList/> : <ProductList/>}
    </>
  )
}

export default Root
