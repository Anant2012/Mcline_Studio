import React from 'react'
import AdminUserList from './AdminUserList'
import AdminHREndList from './AdminHREndList'


function AdminTableFrontPage() {
  return (
    <>
      <AdminUserList />
      <div class="p-2 w-full pt-8 mt-2 border-t border-gray-300 text-center"></div>
      <AdminHREndList />
    </>
  )
}

export default AdminTableFrontPage