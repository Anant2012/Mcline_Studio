import DataTable from "react-data-table-component";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Table.css";

const Table = ({
    columns,
    data,
    onSearch,
    title,
    selectableRows = true,
    actionButtons,
    extraSubHeader = null,
    searchComponent,
}) => {
    const [isRowsSelected, setIsRowsSelected] = useState(false);
    const customStyles = {
        cells: {
            style: {
                borderRightColor: "#d0d0d0",
                borderRightStyle: "solid",
                borderRightWidth: "1px",
                justifyContent: "center",
            },
        },
        contextMenu: {
            style: {
                display: "flex",
                flexWrap: "wrap",
                height: "fit-content",
                minHeight: "56px",
            },
        },
        rows: {
            style: {
                fontSize: "13px",
                fontWeight: 400,
                backgroundColor: "#fff",
                ":last-of-type": {
                    borderBottomStyle: "solid",
                    borderBottomWidth: "1px",
                    borderBottomColor: "black",
                },
                "&:nth-of-type(odd)": {
                    backgroundColor: "#e2e4ff",
                },
            },
            highlightOnHoverStyle: {
                color: "#095e88",
                backgroundColor: "#b9beff",
                transitionDuration: "0.15s",
                transitionProperty: "background-color",
                borderBottomColor: "gray",
                fontWeight: "bold",
            },
        },
        headCells: {
            style: {
                borderRightColor: "#d0d0d0",
                borderRightStyle: "solid",
                borderRightWidth: "1px",
                backgroundColor: "white",
                justifyContent: "center",
            },
        },
        headRow: {
            style: {
                borderTopColor: "#d0d0d0",
                borderTopStyle: "solid",
                borderTopWidth: "1px",
                backgroundColor: "#f4f4f4",
                borderBottomWidth: "1px",
                borderBottomColor: "black",
                borderBottomStyle: "solid",
            },
        },
        pagination: {
            style: {
                backgroundColor:"lightgrey"
            }
        }
    };
    const handleRowsSelect = (selected) => {
        setIsRowsSelected(Boolean(selected.selectedCount));
    };

    return (
        <div className="table-container">
            <div>
                {/* <div className="table-title">
                    <span style={{ marginLeft: "10px" }}>{title}</span>
                </div> */}
                <div class="lg:w-7/8 w-full mx-auto">
                    <div class="flex flex-wrap ">
                        <div class="w-full flex-col sm:flex-row p-2 mb-4 flex item-center flex text-white justify-end bg-indigo-500 rounded ">
                            <div class="my-auto px-4 py-3 title-font tracking-wider font-medium text-md decoration-white">Filter:</div>
                            <div class="flex flex-row justify-center item-center relative">
                                <label for="name" class="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white">
                                    Date_to
                                </label>
                                <input
                                    type="date"
                                    id="name"
                                    name="name"
                                    class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div class="flex flex-row justify-center item-center relative">
                                <label for="name" class="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white">
                                    Date_from
                                </label>
                                <input
                                    type="date"
                                    id="name"
                                    name="name"
                                    class="w-full focus:bg-opacity-5 bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    customStyles={customStyles}
                    subHeader
                    subHeaderComponent={
                        <div>
                            <input
                                type="text"
                                onChange={(e) => onSearch(e.target.value)}
                                placeholder="Search..."
                                className="m-2"
                                style={{ border: "1px solid black", padding: "8px" }}
                            />
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default Table;
