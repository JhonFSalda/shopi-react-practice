import { ChevronRightIcon } from '@heroicons/react/24/solid'


const OrdersCard = props => {
    const { date, totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center mb-4 my-3 border border-gray-200 rounded-lg p-4 w-80 bg-zinc-100/70">
            <p className='flex flex-col'>
                <span className='font-light'>{date}</span>
                <span className='font-light text-sm'>
                    {totalProducts}{totalProducts > 1 ? ' items' : ' item'}
                </span>
            </p>
            <p className='flex gap-2'>
                <span className='font-medium'>${totalPrice}</span>
                <ChevronRightIcon className="h-6 w-6 text-black"/>
            </p>
        </div>
    )
}

export default OrdersCard