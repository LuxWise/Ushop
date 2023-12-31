import { PlusIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShopContext } from "../../Context"

const Card = (data) => {

  const{
    count,
    setCount,
    openProductDeail,
    setProductToShow,
    cartProducts,
    setCartProducts,
  } = useContext(ShopContext)

  const showProduct = (productDetail) => {
    openProductDeail()
    setProductToShow(productDetail)
  }

  const addProductsToCard = (productData) => {
    setCount(count + 1 )
    setCartProducts([...cartProducts, productData])
    console.log('CART : ', cartProducts)
  }

  return(
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(data.data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-3 px-3 py-0.5'>
          {data.data.category.name}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title}></img>
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
          onClick={() => addProductsToCard(data.data)}>
          <PlusIcon className="h-4 w-4"/>
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">
          {data.data.title}
        </span>
        <span className="text-sm font-medium">
          ${data.data.price}
        </span>
      </p>
    </div>
  )
}

export { Card }
