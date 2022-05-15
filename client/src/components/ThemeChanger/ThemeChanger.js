import { IoMdMoon, IoIosSunny } from "react-icons/io";
import { useThemeContext } from "../../store/ThemeContext";



const ThemeChanger = (props) => {

    const { changeTheme, themeValue } = useThemeContext();

    const handleOnClick = () => {
        let selectedThemeValue;

        if (themeValue === "light") {
            selectedThemeValue = "dark";
        } else if (themeValue === "dark") {
            selectedThemeValue = "light";
        }

        changeTheme(selectedThemeValue);
    }

    const getIcon = () => {
        let returnIcon;

        if (themeValue === "light") {
            returnIcon = <IoMdMoon />;
        } else if (themeValue === "dark") {
            returnIcon = <IoIosSunny />;
        }

        return returnIcon;
    }


    return <>
        <div className={"theme-chg-btn"} onClick={handleOnClick}>
            {getIcon()}
        </div>
    </>
}


export default ThemeChanger;
