import { Box, Typography, Stack, } from '@pankod/refine-mui';
import React from 'react';
import { PieChartProps } from 'interfaces/home';
import ReactApexChart from 'react-apexcharts';
import { ArrowCircleUpRounded } from '@mui/icons-material';
import { TotalRevenueOptions,TotalRevenueSeries } from './chart.config';

const TotalRevenue = () => {
  return (
    <Box 
    p="4" 
    flex="1"
    id="chart"
    display="flex"
    borderRadius="15px"
    bgcolor="#fcfcfc"
    flexDirection="column"
    >
        <Typography 
        fontSize="18px"
        fontWeight={600}
        color
        >

        </Typography>
    </Box>
  )
}

export default TotalRevenue;