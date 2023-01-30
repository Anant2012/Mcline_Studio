import { AiFillEye } from "react-icons/ai";
const ViewButton = ({ clikcHandler }) => {
  return (
    <AiFillEye
      style={{
        width: "16px",
        height: "24px",
        color: "brown",
        marginRight: "7px",
      }}
      onClick={clikcHandler}
      data-toggle="tooltip"
      data-placement="top"
      title="View"
    />
  );
};
export default ViewButton;
