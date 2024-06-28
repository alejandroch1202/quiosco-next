import { Toast } from '@/components/ui/Toast'
import { Sidebar } from '@/components/admin/Sidebar'

const AdminLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <div className='md:flex'>
        <aside className='md:w-72 md:h-screen bg-white'>
          <Sidebar />
        </aside>

        <main className='md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5'>
          {children}
        </main>
      </div>

      <Toast />
    </>
  )
}

export default AdminLayout
