import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail`}
        >
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon
                        className="h-6 w-6 text-black cursor-pointer"
                        onClick={() => context.closeProductDetail()}
                    />
                </div>
            </div>

            <figure className="px-6">
                <img
                    className="w-full h-full rounded-lg"
                    src={context.productToShow.image} alt={context.productToShow.title} />
            </figure>

            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl mb-3">${context.productToShow.price}</span>
                <span className="font-medium text-md">{context.productToShow.title}</span>
                <span className="font-lg text-sm mt-5">{context.productToShow.description}</span>
            </p>

        </aside>
    )
}

export default ProductDetail