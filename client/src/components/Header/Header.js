import { useNavigate } from 'react-router-dom';
import logo from '../../assets/bcmlogo.png';
import logo2 from '../../assets/bcmlogo3.png';
import { useThemeContext } from '../../store/ThemeContext';
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import WrapperSvg from '../WrapperSVG/WrapperSvg';
import { authActions } from '../../redux/reducers/AuthReducer';
import Subheader from './Subheader';

const Header = () => {
  let navigate = useNavigate();
  const { themeValue } = useThemeContext();
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);
  const handleOnClick = () => {
    navigate(isLogin ? "/dashboard" : "/login")
  };
  const handleOnLogout = async () => {
    dispatch(authActions.logout());
    navigate("/login");
  };

  return (
    <>
      <header className='horizontal_middle_figures_head'>
        <div className='navbar-des'>
          <img alt='bcmlogo' src={themeValue === "light" ? logo : logo2} onClick={handleOnClick} />
          <ThemeChanger />
          {isLogin ? <WrapperSvg>
            <AiOutlineLogout onClick={handleOnLogout} />
          </WrapperSvg>
            : <div className='width50' />}
        </div>
        {isLogin && <Subheader />}
      </header>
    </>
  );
};

export default Header;
