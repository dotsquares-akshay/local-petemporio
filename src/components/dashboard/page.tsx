import React from 'react'
import AdminLayout from '@/components/dashboard/Layout'
import { SidebarProvider } from '@/components/dashboard/superadmin/Layout/SidebarContext'
import Dashcard from './superadmin/compoents/Dashcard'
function Page() {
  return (

  <SidebarProvider>
      <AdminLayout>
          Page 1
      </AdminLayout>
    </SidebarProvider>
  )
}

export default Page
