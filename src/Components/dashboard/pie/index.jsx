import { Box } from "@mui/material";
import Header from "../../Header";
import PieChart from "../Graphs/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header
        title="Pie Chart"
        subtitle="This is the Pie Chart for the revenues"
      />

      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
