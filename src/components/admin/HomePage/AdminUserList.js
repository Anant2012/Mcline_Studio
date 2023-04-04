import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
import { useSelector } from "react-redux";
function AdminUserList(props) {
  const { userId } = useSelector((state) => state);
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleOpen = () => {
    // to do
  };
  const onSearch = (val) => {
    setFilteredData(
      data?.filter(
        (x) =>
          x.username.toLowerCase().match(val.toLowerCase()) ||
          x.email().toLowerCase().match(val.toLowerCase()) ||
          x.phone.description.toLowerCase().match(val.toLowerCase()) ||
          x.role.reason.toLowerCase().match(val.toLowerCase())
      )
    );
  };
  const columns = [
    { name: "Name", selector: (row)=>row.username, format: (row) => <button onClick={() => EditLead(row)}>{row.username}</button>, sortable: true },
    { name: "Email", selector: (row)=>row.email, format: (row) => <button onClick={() => EditLead(row)}>{row.email}</button>, sortable: true },
    { name: "Phone", selector: (row)=>row.phone, format: (row) => <button onClick={() => EditLead(row)}>{row.phone}</button>, sortable: true },
    { name: "Password", selector: (row)=>row.password, format: (row) => <button onClick={() => EditLead(row)}>{row.password}</button>, sortable: true },
    {
      name: "Role", selector: (row)=>row.role,
      format: (row) =>
        row.role.map((data, index) => {
          return <>{row.role.length != index + 1 ? `${data}, ` : `${data}`}</>;
        }),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <FaUserEdit
            onClick={() => EditLead(row)}
            title="Edit"
            style={{ color: "blue", fontSize: "Large" }}
          />
          <MdDelete
            onClick={() => DeleteLead(row)}
            title="Delete"
            style={{ color: "red", marginLeft: "10px", fontSize: "Large" }}
          />
        </div>
      ),
    },
  ];

  const EditLead = (row) => {
    // <EditLead leadId={row._id} />
    navigate(`/admin/edit/user/${row._id}`);
    // console.log("lead",row._id)
  };
  const getData = async () => {
    AxiosInstance.get(`/api/admin/user/all`)
      .then((data) => setData(data.data.data))
      .catch((err) => console.log("errorr", err));
  };
  const DeleteLead = async (row) => {
    try {
      const response = await AxiosInstance.delete(
        `/api/admin/user/delete/${row._id}`
      );
      if (response.status === 200) {
        alert("✅User deleted successfully!!");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong!!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleAddClick = () => {
    props.setAdminLogin(0);
  };

  return (
    <>
      <section className={`text-gray-600 body-font ${(props.adminLogin)?"block":"hidden"}`}>
        <div className="container w-11/12 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              List of all Users
            </h1>
          </div>
          <div className="bg-[#0483c8] pb-2 pt-4">
            <div className="flex flex-wrap mx-4">
              <div className="w-full flex-row   p-2   item-center flex text-white justify-end bg-[#0483c8] rounded ">
                <h1 className="h-full  flex text-left w-full sm:pl-8 items-center title-font text-xl">
                  User List
                </h1>
                <div className=" sm:pr-8">
                  <button
                    className="text-white  font-medium bg-[#03527d] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#024264] rounded ml-3 text-sm sm:mr-3 whitespace-nowrap"
                    onClick={handleAddClick}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto">
              <Table
                columns={columns}
                data={filteredData}
                onSearch={onSearch}
                title="Selling Product List"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminUserList;
