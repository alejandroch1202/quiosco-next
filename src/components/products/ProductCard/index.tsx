import Image from 'next/image'
import { formatCurrency } from '@/utils'
import type { Product } from '@prisma/client'
import { AddProductButton } from '@/components/products/AddProductButton'

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='border bg-white rounded-lg shadow-md h-full'>
      <div className='p-5 flex flex-col h-full'>
        <Image
          className='rounded-md'
          width={500}
          height={500}
          src={`/products/${product.image}.jpg`}
          alt={'imagen comida'}
        />

        <h3 className='text-2xl font-bold flex-1'>{product.name}</h3>

        <p className='mt-5 font-black text-4xl text-amber-500'>
          {formatCurrency(product.price)}
        </p>

        <AddProductButton product={product} />
      </div>
    </div>
  )
}
