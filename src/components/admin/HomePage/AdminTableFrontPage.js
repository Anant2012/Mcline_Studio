import React from 'react'
import AdminUserList from './AdminUserList'
import AdminHREndList from './AdminHREndList'
import AdminOperationList from './AdminOperationList'
import AdminLoginFrontPage from './AdminLoginFrontPage'
import { useState } from 'react'


function AdminTableFrontPage() {
  const [adminLogin, setAdminLogin] = useState(0);

  return (
    <>
      <AdminLoginFrontPage adminLogin={adminLogin}/>

      <div className={`${(adminLogin)?"block":"hidden"}`}>
        <AdminUserList />
        <div class="p-2 w-full pt-8 mt-2 border-t border-gray-300 text-center"></div>
        <AdminHREndList />
        <div class="p-2 w-full pt-8 mt-2 border-t border-gray-300 text-center"></div>
        <AdminOperationList/>
      </div>
    </>
  )
}

export default AdminTableFrontPage