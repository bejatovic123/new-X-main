import React, { lazy } from 'react';
import { MemoryRouter, BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ThemeProvider from '../store/ThemeContext';
import Layout from './Layout/Layout';
import { useSelector } from "react-redux";

const BookingPage = lazy(() => import('./Pages/BookingPage/Booking'));
const Dashboard = lazy(() => import('./Pages/Dashboard/Dashboard'));
const Login = lazy(() => import('./Pages/Login/Login'));
const PasswordSetter = lazy(() => import('./Pages/PasswordSetter/PasswordSetter'));
const PageNotFound = lazy(() => import('./Pages/PageNotFound/PageNotFound'));

const AppRouter = () => {

  const isLogin = useSelector(state => state.auth.isLogin);
  //console.log(isLogin);

  return (
    <ThemeProvider>
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='login' element={<Login />} />
            <Route path='passwordsetter' element={<PasswordSetter />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
            {isLogin && <>
              <Route path='booking/:roomId' element={<BookingPage />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </>}
          </Route>
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
};

export default AppRouter;
