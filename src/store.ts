import { create } from 'zustand'
import type { OrderItem } from '@/types/index'
import type { Product } from '@prisma/client'

interface Store {
  order: OrderItem[]
  addToOrder: (item: Product) => void
  removeItem: (id: Product['id']) => void
  increaseQuantity: (id: Product['id']) => void
  decreaseQuantity: (id: Product['id']) => void
  emptyOrder: () => void
}

export const useStore = create<Store>((set, get) => ({
  order: [],

  addToOrder: (product) => {
    const { categoryId, image, ...rest } = product
    let order: OrderItem[] = []

    if (get().order.find((item) => item.id === product.id) != null) {
      order = get().order.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.price * (item.quantity + 1)
            }
          : item
      )
    } else {
      order = [
        ...get().order,
        {
          ...rest,
          quantity: 1,
          subtotal: 1 * product.price
        }
      ]
    }

    set(() => ({
      order
    }))
  },

  removeItem: (id) => {
    set((state) => ({
      order: state.order.filter((item) => item.id !== id)
    }))
  },

  increaseQuantity: (id) => {
    set((state) => ({
      order: state.order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.price * (item.quantity + 1)
            }
          : item
      )
    }))
  },

  decreaseQuantity: (id) => {
    set((state) => ({
      order: state.order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
              subtotal: item.price * (item.quantity - 1)
            }
          : item
      )
    }))
  },

  emptyOrder: () => {
    set(() => ({
      order: []
    }))
  }
}))
