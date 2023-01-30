import { MdDelete } from "react-icons/md";
const DeleteButton = ({ clickHandler }) => {
  return (
    <MdDelete
      style={{
        width: "16px",
        height: "24px",
        color: "brown",
        marginRight: "7px",
      }}
      data-toggle="tooltip"
      data-placement="top"
      title="Delete"
      onClick={clickHandler}
    />
  );
};
export default DeleteButton;
