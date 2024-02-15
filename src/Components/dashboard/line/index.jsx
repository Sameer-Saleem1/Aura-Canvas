import { Box } from "@mui/material";
import LineGraph from "../Graphs/LineGraph";
import Header from "../../Header";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Graph" subtitle="This is a Line Graph" />

      <Box height="75vh">
        <LineGraph />
      </Box>
    </Box>
  );
};
export default Line;
