import { useStore } from '@/store'
import type { OrderItem } from '@/types'
import { formatCurrency } from '@/utils'

import { XCircleIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useMemo } from 'react'

export const OrderItemDetails = ({ item }: { item: OrderItem }) => {
  const removeItem = useStore((state) => state.removeItem)
  const increaseQuantity = useStore((state) => state.increaseQuantity)
  const decreaseQuantity = useStore((state) => state.decreaseQuantity)
  const disableIncreaseButton = useMemo(() => item.quantity === 5, [item])
  const disableDecreaseButton = useMemo(() => item.quantity === 1, [item])

  return (
    <div className='shadow space-y-1 p-4 bg-white  border-t border-gray-200 '>
      <div className='space-y-4'>
        <div className='flex justify-between items-start'>
          <p className='text-xl font-bold'>{item.name} </p>

          <button
            type='button'
            onClick={() => {
              removeItem(item.id)
            }}
          >
            <XCircleIcon className='text-red-600 h-8 w-8' />
          </button>
        </div>
        <p className='text-2xl text-amber-500 font-black'>
          {formatCurrency(item.price)}
        </p>
        <div className='flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg'>
          <button
            type='button'
            disabled={disableDecreaseButton}
            className='disabled:opacity-20 disabled:cursor-not-allowed'
            onClick={() => {
              decreaseQuantity(item.id)
            }}
          >
            <MinusIcon className='h-6 w-6' />
          </button>

          <p className='text-lg font-black '>{item.quantity}</p>

          <button
            type='button'
            disabled={disableIncreaseButton}
            className='disabled:opacity-20 disabled:cursor-not-allowed'
            onClick={() => {
              increaseQuantity(item.id)
            }}
          >
            <PlusIcon className='h-6 w-6' />
          </button>
        </div>
        <p className='text-xl font-black text-gray-700'>
          Subtotal: {formatCurrency(item.subtotal)}
          <span className='font-normal'></span>
        </p>
      </div>
    </div>
  )
}
