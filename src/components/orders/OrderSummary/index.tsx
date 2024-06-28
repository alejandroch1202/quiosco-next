'use client'
import { useStore } from '@/store'
import { OrderItemDetails } from '@/components/orders/OrderItemDetails'
import { useMemo } from 'react'
import { formatCurrency } from '@/utils'
import { createOrder } from '@/actions/create-order-action'
import { orderSchema } from '@/schemas/index'
import { toast } from 'react-toastify'

export const OrderSummary = () => {
  const order = useStore((state) => state.order)
  const emptyOrder = useStore((state) => state.emptyOrder)
  const total = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  )

  const handleCreateOrder = async (formData: FormData) => {
    const data = { name: formData.get('name'), total, order }
    const result = orderSchema.safeParse(data)

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message)
      })
      return
    }

    const response = await createOrder(data)
    if (response?.errors !== undefined) {
      response.errors.forEach((issue) => {
        toast.error(issue.message)
      })
    }

    toast.success('Pedido realizado correctamente')
    emptyOrder()
  }

  return (
    <aside className='lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5'>
      <h1 className='text-4xl text-center font-black'>Mi pedido</h1>

      {order.length === 0 ? (
        <p className='text-center mt-10'>El pedido esta vacío</p>
      ) : (
        <div className='mt-5'>
          {order.map((item) => (
            <OrderItemDetails
              key={item.id}
              item={item}
            />
          ))}

          <p className='text-2xl mt-20 text-center'>
            Total a pagar
            <span className='font-bold'> {formatCurrency(total)}</span>
          </p>

          <form
            action={handleCreateOrder}
            className='w-full mt-10 space-y-5'
          >
            <input
              type='text'
              placeholder='Tu nombre'
              className='w-full bg-white rounded border border-gray-100 p-2'
              name='name'
            />

            <input
              type='submit'
              className='py-2 rounded font-bold uppercase text-white bg-black w-full text-center cursor-pointer'
              value={'Confirmar pedido'}
            />
          </form>
        </div>
      )}
    </aside>
  )
}
