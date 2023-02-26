import { Box } from "@mui/material";
import Header from "../../components/Header";
import Accord from "./Accord";

const FAQ = () => {

    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

            <Accord title='An Important question' />
            <Accord title='Another Important question' />
            <Accord title='Your Favorite question' />
            <Accord title='The Final question' />
        </Box>
    )
}

export default FAQ 