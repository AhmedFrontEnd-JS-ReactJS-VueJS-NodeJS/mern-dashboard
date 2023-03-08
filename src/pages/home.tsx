import React from 'react';
import {useList} from '@pankod/refine-core';
import { PieChart,PropertyReferrals,TotalRevenue,PropertyCard,TopAgent } from 'components';
import { Typography,Box,Stack } from '@pankod/refine-mui'; 
import PropertyRefferalls from 'components/charts/PropertyRefferalls';


const Home = () => {
  return (
    <Box >
        <Typography fontSize={25} fontWeight={700} color={"#11142D"}>Dashboard</Typography>
        <Box mt={"20px"} display={"flex"} flexWrap={"wrap"} gap={4} >
            <PieChart
              title="Properties For Sale"
              value={684}
              series={[75,25]}
              colors={["#275be8","#c4e8ef"]}
            />
            <PieChart
              title="Properties For Rent"
              value={550}
              series={[60,40]}
              colors={["#275be8","#c4e8ef"]}
            />
            <PieChart
              title="Total Customer"
              value={5684}
              series={[75,25]}
              colors={["#275be8","#c4e8ef"]}
            />
            <PieChart
              title="Properties For Cities"
              value={555}
              series={[75,25]}
              colors={["#275be8","#c4e8ef"]}
            />

        </Box>
        <Stack mt="25px" width="100%" direction={{xs:'column',lg:'row'}} gap={4}>
            <TotalRevenue/>
            <PropertyRefferalls/>
        </Stack>
    </Box>
  );
};

export default Home;