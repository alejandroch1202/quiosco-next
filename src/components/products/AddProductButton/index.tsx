'use client'
import { useStore } from '@/store'
import type { Product } from '@prisma/client'

export const AddProductButton = ({ product }: { product: Product }) => {
  const addToOrder = useStore((state) => state.addToOrder)

  return (
    <button
      onClick={() => {
        addToOrder(product)
      }}
      type='button'
      className='bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md'
    >
      Agregar
    </button>
  )
}
