import React from 'react'
import AdminUserList from './AdminUserList'
import AdminSignUpFrontPage from './AdminSignUpFrontPage'
import HomePageLogin from './HomePageLogin'
import { useState } from 'react'


function AdminTableFrontPage() {
  const [adminLogin, setAdminLogin] = useState(1);
  const [hrLogin, setHrLogin] = useState(0);

  return (
    <>
      <AdminSignUpFrontPage adminLogin={adminLogin} setAdminLogin={setAdminLogin} />
      <HomePageLogin hrLogin={hrLogin} setHrLogin={setHrLogin} />
      <div className={`${(hrLogin) ? "block" : "hidden"} ${(adminLogin)?"block":"hidden"}`}>
        <AdminUserList setAdminLogin={setAdminLogin} />
      </div>
    </>
  )
}

export default AdminTableFrontPage