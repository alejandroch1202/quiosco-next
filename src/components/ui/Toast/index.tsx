'use client'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export const Toast = () => {
  return (
    <ToastContainer
      hideProgressBar={true}
      pauseOnFocusLoss={false}
    />
  )
}
