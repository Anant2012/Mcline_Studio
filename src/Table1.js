import { useEffect, useState } from "react";
import Table from "./constant/Table/Table"
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CouponCodesList = () => {
    const [data, setData] = useState();
    const [filteredData, setFilteredData] = useState(data);
    const handleOpen = () => {
        // to do
    };
    const onSearch = (val) => {
        setFilteredData(
            data.filter((x) => x.name.toLowerCase().match(val.toLowerCase()))
        );
    };
    const columns = [
        { name: "Sub Admin Name", selector: (row) => row.name, sortable: true },
        { name: "Email ", selector: (row) => row.name, sortable: true },
        { name: "Admin Type", selector: (row) => row.capital, sortable: true },
        {
            name: "Last Login Date",
            selector: (row) => row.population,
            sortable: true,
        },
        {
            name: "Last Logout Date",
            selector: (row) => row.population,
            sortable: true,
        },
        {
            name: "Last Login IP",
            selector: (row) => row.population,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => <button className="btn btn-success">Active</button>,
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => (
                <div style={{ display: "flex" }}>
                    <FaUserEdit title="Edit" style={{ color: "blue",fontSize:"Large" }} />
                    <MdDelete title="Delete" style={{color:"red",marginLeft:"10px",fontSize:"Large"}}/>
                </div>
            ),
        },
    ];

    const getData = async () => {
        fetch("https://restcountries.com/v2/all")
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
                title="COUPON CODES LIST"
            />
        </div>
    );
};
export default CouponCodesList;
