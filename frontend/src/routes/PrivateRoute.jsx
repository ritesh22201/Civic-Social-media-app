import { Box } from '@chakra-ui/react';
import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   let data = JSON.parse(localStorage.getItem('token')) || '';

   return data.token ? children : <Navigate to={'/login'}/>;
}

export default PrivateRoute;