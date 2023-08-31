
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-small font-light bg-white drop-shadow-md">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-xl mr-5">
                    Shopi
                </li>
                <li>
                    <NavLink
                        to={'/'}
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => context.setSearchByCategory('electronics')}
                        to={'/electronics'} className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => context.setSearchByCategory('jewelery')}
                        to={'/jewelery'} className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => context.setSearchByCategory("men's clothing")}
                        to={"/mens-clothing"} className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Men's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => context.setSearchByCategory("women's clothing")}
                        to={'/womens-clothing'} className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Women's clothing
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    <NavLink
                        to={'/'}>
                        JhonF@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/my-orders'}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/my-account'}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/sign-in'}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign in
                    </NavLink>
                </li>
                <li className='flex '>
                    <ShoppingCartIcon className="h-6 w-6 text-black/70" /> {context.cartProducts.length}
                </li>

            </ul>
        </nav>
    )
}

export default Navbar