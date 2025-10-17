import React from 'react'
import AdminLayout from '@/components/dashboard/Layout'
import { SidebarProvider } from '@/components/dashboard/superadmin/Layout/SidebarContext'
function Page() {
  return (

  <SidebarProvider>
      <AdminLayout>
          page
      </AdminLayout>
    </SidebarProvider>
  )
}

export default Page
