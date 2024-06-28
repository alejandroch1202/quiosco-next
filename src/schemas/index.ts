import { z } from 'zod'

export const orderSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  total: z.number().min(1, 'El total debe ser mayor a cero'),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      subtotal: z.number()
    })
  )
})
