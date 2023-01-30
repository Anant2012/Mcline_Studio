import { FaUserEdit } from "react-icons/fa";
const EditButton = ({ clickHandler }) => {
  return (
    <FaUserEdit
      style={{
        width: "16px",
        height: "24px",
        color: "gray",
        marginRight: "7px",
      }}
      onClick={clickHandler}
      data-toggle="tooltip"
      data-placement="top"
      title="Edit"
    />
  );
};

export default EditButton;
