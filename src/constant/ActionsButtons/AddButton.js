import { BsPlusLg } from "react-icons/bs";
const AddButton = ({ clickHandler }) => {
  return (
    <BsPlusLg
      style={{
        width: "16px",
        height: "24px",
        color: "green",
        marginRight: "7px",
      }}
      data-toggle="tooltip"
      data-placement="top"
      title="Categorize as our pick"
      onClick={clickHandler}
    />
  );
};
export default AddButton;
