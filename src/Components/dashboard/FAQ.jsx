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
        <Accordion defaultExpanded sx={{ bgcolor: colors.grey[800] }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Is Aura Canvas compatible with e-commerce functionality?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, Aura Canvas offers seamless integration with e-commerce
              functionality, allowing you to enable secure online transactions
              and streamline the selling process. You can set up payment
              gateways, manage orders, and track sales directly from your
              dashboard.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded sx={{ bgcolor: colors.grey[800] }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              What kind of customer support does Aura Canvas provide?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Aura Canvas offers comprehensive customer support to assist you
              with any questions or issues you may encounter. Our support team
              is available via email and live chat during business hours to
              provide timely assistance. Additionally, we provide documentation,
              tutorials, and a community forum to help you find answers to
              common questions and troubleshoot issues on your own.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded sx={{ bgcolor: colors.grey[800] }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Is there a limit to the number of pages or products I can add to
              my website?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, there are no limits on the number of pages or products you can
              add to your Aura Canvas website. Whether you're showcasing a small
              collection of products or managing a large catalog, our platform
              can accommodate your needs. You have the flexibility to scale your
              website as your business grows.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded sx={{ bgcolor: colors.grey[800] }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              What support options are available if I encounter any issues?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you encounter any issues or have questions about using Aura
              Canvas, our dedicated support team is here to help. You can reach
              out to us through our customer support portal, where you'll find
              resources, FAQs, and the option to submit a support ticket for
              personalized assistance.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
