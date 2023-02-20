import { useState } from "react";
import AdminUserList from "./AdminUserList";
import AdminSignUpFrontPage from "./AdminSignUpFrontPage";

function AdminTableFrontPage() {
  const [adminLogin, setAdminLogin] = useState(1);

  return (
    <>
      <AdminSignUpFrontPage
        adminLogin={adminLogin}
        setAdminLogin={setAdminLogin}
      />
      <AdminUserList setAdminLogin={setAdminLogin} />
    </>
  );
}

export default AdminTableFrontPage;
