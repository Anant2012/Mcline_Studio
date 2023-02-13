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
                backgroundColor: "#e7e7e7"
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
