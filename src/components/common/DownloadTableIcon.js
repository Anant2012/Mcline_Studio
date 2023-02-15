import { FaDownload } from "react-icons/fa";
import { exportToExcel } from "../../utils/ExportXLSX";

const DownloadTableIcon = ({ fileData, fileName }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        padding: "5px 20px",
      }}
    >
      <FaDownload
        color="white"
        style={{
          position: "relative",
          top: "7px",
          marginRight: "5px",
        }}
      />
      <button
        onClick={() =>
          exportToExcel({
            fileData,
            fileName,
          })
        }
        style={{
          color: "white",
          fontWeight: "700",
          fontSize: "1.2rem",
        }}
      >
        Download
      </button>
    </div>
  );
};

export default DownloadTableIcon;
