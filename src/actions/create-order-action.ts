'use server'

import { prisma } from '@/config/prisma'
import { orderSchema } from '@/schemas'

export const createOrder = async (formData: unknown) => {
  const result = orderSchema.safeParse(formData)

  if (!result.success) {
    return {
      errors: result.error.issues
    }
  }

  try {
    await prisma.order.create({
      data: {
        name: result.data.name,
        total: result.data.total,
        orderProducts: {
          create: result.data.order.map((item) => ({
            productId: item.id,
            quantity: item.quantity
          }))
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
}
