import { createContext,useState } from 'react'

const ShopContext = createContext();

// eslint-disable-next-line react/prop-types
const ShopContextProvider = ({children}) => {
  const [count, setCount] = useState(0)

  // Product Detail : Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDeail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Product Detail : show products
  const [productToShow, setProductToShow] = useState({})
  
  // Shopping Cart : Add products to cart
  const [cartProducts, setCartProducts] = useState([])
  
  return(
    <ShopContext.Provider value={{
      count,
      setCount,
      openProductDeail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
    }}>
      {children}
    </ShopContext.Provider>
  )
}


export { ShopContext, ShopContextProvider }
