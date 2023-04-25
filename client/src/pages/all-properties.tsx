import React from 'react'
import { Add } from '@mui/icons-material';
// import { useList } from '@pankod/refine-core/dist/hooks';
import { Box,Stack,Typography} from '@pankod/refine-mui';
import { useNavigate } from '@pankod/refine-react-router-v6';
import { CustomButton } from 'components';


export const AllProperties = () => {
  const navigate = useNavigate();

  return (
    <Box>
        <Stack
        direction='row'
        justifyContent="space-between"
        alignItems="center"
        >
            <Typography color="#11142d" fontSize={25} fontWeight={700}>
              All Properties
            </Typography>
            <CustomButton
            title="Add-property"
            handleClick={()=> navigate('/properties/create')}
            backgroundColor="#475be8"
            color="#fcfcfc"
            icon={<Add/>}
            />
        </Stack>
    </Box>
  )
}

export default AllProperties;