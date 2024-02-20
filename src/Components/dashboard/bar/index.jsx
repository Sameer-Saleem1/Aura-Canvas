import { Box } from "@mui/material";
import Header from "../../Header";
import BarChart from "../Graphs/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Bar Chart to represent revenue" />
      <Box height="65vh" mt={"10px"}>
        <BarChart />
      </Box>
    </Box>
  );
};
export default Bar;
