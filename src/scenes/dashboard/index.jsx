import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import Header from '../../components/Header'
import { mockTransactions } from "../../data/mockData"
import DonwloadOutlinedIcon from '@mui/icons-material/DownloadDoneOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import LineChart from '../../components/LineChart'
import BarChar from '../../components/BarChart'
import GeographyChart from "../../components/GeographyChart"
import StatBox from '../../components/StatBox'
import ProgressCircle from "../../components/ProgressCircle"
import { DownloadOutlined } from "@mui/icons-material"

const Dashboard = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)


    return (
        <Box m='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title='DASHBOARD' subtitle='Welcome to your dashboard'/>
            </Box>

            <Box>
                <Button
                    sx={{ 
                        backgroundColor: colors.blueAccent[700], 
                        color: colors.grey[100], 
                        fontSize: '14px', 
                        fontWeight: 'bold',
                        padding: '10px 20px'
                    }}
                >
                    <DownloadOutlined sx={{ mr: '10px'}} />
                    Download Reports
                </Button>
            </Box>
        </Box>
    )
}

export default Dashboard