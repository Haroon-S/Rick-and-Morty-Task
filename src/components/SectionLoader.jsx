import { Box } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";

function SectionLoader() {
  return (
    <Box
      className=" flex justify-center items-center"
      sx={{
        height: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThreeDots height={80} width={80} visible />
    </Box>
  );
}

export default SectionLoader;
