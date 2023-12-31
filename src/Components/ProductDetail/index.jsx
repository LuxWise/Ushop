import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShopContext } from '../../Context'

const ProductDetail = () => {
  
  const {
    isProductDetailOpen,
    closeProductDetail,
    productToShow,
  } = useContext(ShopContext)

  return(
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-80px)] flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon className='h-6 w-6 text-black cursor-pointer'
          onClick={() => closeProductDetail()}/>
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-md'
          src={productToShow.images ? productToShow.images[0] : ''}
          alt={productToShow.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>${productToShow.price}</span>
        <span className='font-medium text-lg'>{productToShow.title}</span>
        <span className='font-light text-sm'>{productToShow.description}</span>
      </p>
    </aside>
  )
}

export { ProductDetail }
