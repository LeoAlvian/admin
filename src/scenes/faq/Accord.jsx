import { Typography, useTheme } from "@mui/material";
import Accordion from '@mui/material/Accordion'
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'


const Accord = ({ title }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    { title }
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nihil fugiat non.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Accord