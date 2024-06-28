import { OrderSidebar } from '@/components/orders/OrderSidebar'
import { OrderSummary } from '@/components/orders/OrderSummary'
import { Toast } from '@/components/ui/Toast'

const OrderLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <div className='md:flex'>
        <OrderSidebar />

        <main className='md:flex-1 md:h-screen md:overflow-y-scroll p-5'>
          {children}
        </main>

        <OrderSummary />
      </div>

      <Toast />
    </>
  )
}

export default OrderLayout
