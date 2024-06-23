import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
const DownArrowIcon = () => {
  return (
    <div
      className="downArrowIcon arrow-down-icon"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        opacity: 1, // domyślnie widoczna
        transition: "opacity 1s ease-in-out",
        color: "#048e9c",
      }}
    >
      <ArrowCircleDownTwoToneIcon
        fontSize="large"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default DownArrowIcon;
