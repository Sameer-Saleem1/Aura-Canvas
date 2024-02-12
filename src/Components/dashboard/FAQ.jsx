import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../Theme";
import Header from "../Header";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle={"Frequently Asked Questions Page"} />

      <Box mt={"20px"}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Question 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde
              accusantium consequatur labore provident ut autem aut
              exercitationem. Necessitatibus fugit rem in eum recusandae laborum
              dolorum quam esse harum laudantium.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Question 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde
              accusantium consequatur labore provident ut autem aut
              exercitationem. Necessitatibus fugit rem in eum recusandae laborum
              dolorum quam esse harum laudantium.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Question 3
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde
              accusantium consequatur labore provident ut autem aut
              exercitationem. Necessitatibus fugit rem in eum recusandae laborum
              dolorum quam esse harum laudantium.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Question 4
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde
              accusantium consequatur labore provident ut autem aut
              exercitationem. Necessitatibus fugit rem in eum recusandae laborum
              dolorum quam esse harum laudantium.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
