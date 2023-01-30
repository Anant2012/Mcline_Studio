import { useEffect, useState } from "react";
import Table from "./constant/Table";
import EditButton from "./constant/ActionsButtons/EditButton";
import DeleteButton from "./constant/ActionsButtons/DeleteButton";
const Table1 = () => {
    const [data, setData] = useState();
    const [filteredData, setFilteredData] = useState(data);
    const handleOpen = () => {
        // to do
    };
    const onSearch = (val) => {
        console.log("called onsearch fun", val);
        setFilteredData(
            data.filter((x) => x.name.toLowerCase().match(val.toLowerCase()))
        );
    };
    const columns = [
        { name: "Full Name", selector: (row) => row.full_name, sortable: true },
        { name: "User Name ", selector: (row) => row.user_name, sortable: true },
        { name: "User ID", selector: (row) => row.id, sortable: true },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) =>
                row.status === "Active" ? (
                    <button className="btn btn-success">Active</button>
                ) : (
                    <button className="btn">Inactive</button>
                ),
            sortable: true,
        },
        {
            name: "Is Offline",
            selector: (row) => row.is_offline_user,
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => (
                <div style={{display:"flex"}}>
                    <EditButton />
                    <DeleteButton />
                </div>
            ),
        },
    ];

    const getData = async () => {
        fetch("http://178.128.221.126:5000/api/user")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log("errorr", err));
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    return (
        <div className="mt-3">
            <Table
                columns={columns}
                data={filteredData}
                onSearch={onSearch}
                title="Selling Product List"
            />
        </div>
    );
};
export default Table1;
