import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
// import { useThemeContext } from '../../store/ThemeContext';
import { useSelector } from "react-redux";
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import Welcome from '../../components/Welcome/Welcome.js';

const Layout = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  // const { themeValue } = useThemeContext();
  const isLogin = useSelector(state => state.auth.isLogin);

  useEffect(() => {
      location.pathname === "/" && !isLogin && navigate("/login");
      location.pathname === "/" && isLogin && navigate("/dashboard");
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
  }, [])

  if (isLoading) {
    return <Welcome />;
  }

  return (
    <>
      {/* <div className={`layout ${themeValue && themeValue}`}> */}
      <div className={`layout`}>
        <Header />
        <div className='layout_body'>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};


export default Layout;
