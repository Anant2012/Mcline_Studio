import DataTable from "react-data-table-component";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Table.css";


// one overflow error to fix : to do

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
                borderRightColor: "#bae6fd",
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
                minWidth: "140px"
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
                    borderBottomColor: "#0ea5e9",
                },
                "&:nth-of-type(odd)": {
                    backgroundColor: "#dbeafe",
                },
            },
            highlightOnHoverStyle: {
                color: "#095e88",
                backgroundColor: "#bfdbfe",
                transitionDuration: "0.15s",
                transitionProperty: "background-color",
                borderBottomColor: "#0ea5e9",
                fontWeight: "bold",
            },
        },
        headCells: {
            style: {
                borderRightColor: "#bae6fd",
                borderRightStyle: "solid",
                borderRightWidth: "1px",
                backgroundColor: "white",
                justifyContent: "center",
            },
        },
        headRow: {
            style: {
                color: "#0369a1",
                borderTopColor: "#0ea5e9",
                borderTopStyle: "solid",
                borderTopWidth: "1px",
                backgroundColor: "#f4f4f4",
                borderBottomWidth: "1px",
                borderBottomColor: "#0ea5e9",
                borderBottomStyle: "solid",
            },
        },
        pagination: {
            style: {
                backgroundColor: "#e5e7eb"
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
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    // selectableRows
                    // selectableRowsHighlight
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
