import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import DoctorList from '../pages/DoctorList';
import PatientList from '../pages/PatientList';
import SpecialtyList from '../pages/SpecialtyList';
import HistoryList from '../pages/HistoryList';
import Settings from '../pages/Settings';
import MainLayout from '../components/MainLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import CreateDoctor from '../pages/CreateDoctor';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'doctors', element: <DoctorList /> },
      { path: 'doctors/create', element: <CreateDoctor /> },
      { path: 'patients', element:<PatientList />},
      { path: 'specialties', element:<SpecialtyList />},
      { path: 'histories', element:<HistoryList />},
      { path: 'settings', element:<Settings />},
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
