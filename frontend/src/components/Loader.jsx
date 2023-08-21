import React from 'react';
import '../Loader.css';
import { Box } from '@chakra-ui/react';

const Loader = () => {
    return (
        <Box h={'100vh'} display={'grid'} placeItems={'center'}>
            <Box className='custom-loader'></Box>
        </Box>
    )
}

export default Loader;