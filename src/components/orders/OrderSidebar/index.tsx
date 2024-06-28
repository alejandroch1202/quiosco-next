import { CategoryIcon } from '@/components/ui/CategoryIcon'
import { prisma } from '@/config/prisma'
import { Logo } from '@/components/ui/Logo'

const getCategories = async () => {
  return await prisma.category.findMany()
}

export const OrderSidebar = async () => {
  const cateogries = await getCategories()

  return (
    <aside className='md:w-72 md:h-screen bg-white'>
      <Logo />
      <nav className='mt-10'>
        {cateogries.map((category) => (
          <CategoryIcon
            key={category.id}
            category={category}
          />
        ))}
      </nav>
    </aside>
  )
}
