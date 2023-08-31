import { useContext } from "react"
import { Link } from "react-router-dom"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard"
import { totalPrice } from "../../utils"
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        var today = new Date().toLocaleDateString();
        const orderToAdd = {
            date: today,
            // date: '29.08.2023',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0);
        context.setSearchByTitle(null)
    }

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu`}
        >

            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>My order</h2>
                <div>
                    <XMarkIcon
                        className="h-6 w-6 text-black cursor-pointer"
                        onClick={() => context.closeCheckoutSideMenu()}
                    />
                </div>
            </div>

            <div className="my-5 overflow-y-auto flex-1">
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <hr />
            <div>
                <p className="flex justify-end items-baseline">
                    <span className="font-light mr-3">Total: </span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button
                        className="w-full bg-black py-3 text-white mt-5 rounded-lg"
                        onClick={() => handleCheckout()}>
                        Checkout
                    </button>

                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu