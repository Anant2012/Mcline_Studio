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
    const updatedData = data.filter((x) =>
      x.username.toLowerCase().match(val.toLowerCase())
    );
    setFilteredData(updatedData);
  };
  const columns = [
    { name: "Name", selector: (row) => row.username, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Phone", selector: (row) => row.phone, sortable: true },
    { name: "Password", selector: (row) => row.password, sortable: true },
    {
      name: "Role",
      selector: (row) =>
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
    navigate(`/admin/operation/edit/user/${row._id}`);
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
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              List of all Users
            </h1>
          </div>
          <div className="bg-[#0483c8] pb-2 pt-4">
            <div class="flex flex-wrap mx-4">
              <div class="w-full flex-col sm:flex-row p-2  flex item-center flex text-white justify-end bg-[#0483c8] rounded ">
                <h1 className="h-full  flex text-left w-full pl-8 items-center title-font text-xl">
                  User List
                </h1>
                <div class="flex flex-row justify-center pr-8 items-center relative">
                  <button
                    className="text-white text-sm font-medium bg-[#03527d] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#024264] rounded ml-3 text-sm mr-3 whitespace-nowrap"
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
