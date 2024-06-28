'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import type { Category } from '@prisma/client'

export const CategoryIcon = ({ category }: { category: Category }) => {
  const params = useParams()

  return (
    <div
      className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b ${
        category.slug === params.category ? 'bg-amber-400' : ''
      }`}
    >
      <div className='w-16 h-16 relative'>
        <Image
          fill
          src={`/icon_${category.slug}.svg`}
          alt='image cateogry'
        />
      </div>

      <Link
        href={`/orders/${category.slug}`}
        className='text-xl font-bold'
      >
        {category.name}
      </Link>
    </div>
  )
}
