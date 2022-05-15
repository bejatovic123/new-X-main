import MyButton from '../MyButton/MyButton';
import { AiFillHome } from "react-icons/ai";
import { BsCalendarPlus } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

const NAVBARCONST = [
    { displayText: <AiFillHome />, active: true, value: "dashboard" },
    { displayText: <BsCalendarPlus />, active: false, value: "booking" },
    { displayText: <CgProfile />, active: false, value: "profil" }
]

const Subheader = ({ }) => {
    let location = useLocation();
    let navigate = useNavigate();

    const [mobNavbar, setMobNavbar] = useState(NAVBARCONST);
    const userInfo = useSelector(state => state.auth.user);

    const handleMobNavbarRouting = (value) => {
        if (location.pathname.includes(`/${value}`))
            return;
        value === "booking" ? navigate(`/${value}/${userInfo.divisionId}`) : navigate(`/${value}`);
    }

    const checkLocation = () => {
        setMobNavbar(prevState => {
            return prevState?.map(item => {
                // console.log(location.pathname.includes(item.value))
                if (location.pathname.includes(item.value))
                    return { ...item, active: !item.active };
                return { ...item, active: false };
            })
        })
    }

    useEffect(() => {
        checkLocation();
    }, [location])

    return <div className='navbar-mob'>
        {mobNavbar?.map((item, index) => <MyButton
            key={`secondnavbar-${index}`}
            customClass={`not-scaleable ${item.active ? "active" : ""} `}
            displayText={item.displayText}
            onClickFor={() => handleMobNavbarRouting(item.value)} />)}
    </div>
}

export default Subheader;