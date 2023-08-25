import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  const data = JSON.parse(localStorage.getItem('token')) || '';
  return (
    <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<PrivateRoute>
          <Home />
        </PrivateRoute>} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AllRoutes;