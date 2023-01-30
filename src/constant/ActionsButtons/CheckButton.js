import { BsCheckLg } from "react-icons/bs";
const CheckButton = ({ clickHandler }) => {
  return (
    <BsCheckLg
      style={{
        width: "16px",
        height: "24px",
        color: "green",
        marginRight: "7px",
      }}
      data-toggle="tooltip"
      data-placement="top"
      title="Clone"
      onClick={clickHandler}
    />
  );
};
export default CheckButton;
