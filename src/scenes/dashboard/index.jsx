import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import Header from '../../components/Header'
import { mockTransactions } from "../../data/mockData"
import LineChart from '../../components/LineChart'
import BarChar from '../../components/BarChart'
import GeographyChart from "../../components/GeographyChart"
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from "@mui/icons-material/Traffic";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ProgressCircle from "../../components/ProgressCircle"
// import { DownloadOutlined, TrafficIcon } from "@mui/icons-material"
import StatBox from '../../components/StatBox'



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
                    <DownloadOutlinedIcon sx={{ mr: '10px'}} />
                    Download Reports
                </Button>
            </Box>

            {/* Grid & Chart  */}
            <Box
                display='grid'
                gridTemplateColumns='repeat(12, 1fr)'
                gridAutoRows='140px'
                gap='20px'
            >
                {/* ROW 1  */}
                <StatBox 
                    title='12,361'
                    subtitle='Emails Sent'
                    progress='0.75'
                    increase='+14%'
                    icon={
                        <EmailIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: '26px'}}   
                        />
                    }
                />

                <StatBox 
                    title='431,225'
                    subtitle='Sales Obtained'
                    progress='0.5'
                    increase='+21%'
                    icon={
                        <PointOfSaleIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: '26px'}}   
                        />
                    }
                />
                <StatBox 
                    title='32,225'
                    subtitle='New Clents'
                    progress='0.3'
                    increase='+5%'
                    icon={
                        <PersonAddIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: '26px'}}   
                        />
                    }
                />
                <StatBox 
                    title='1,325,134'
                    subtitle='Traffic Inbound'
                    progress='0.8'
                    increase='+43%'
                    icon={
                        <TrafficIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: '26px'}}   
                        />
                    }
                />

            </Box>
        </Box>
    )
}

export default Dashboard