import { useEffect, useRef } from "react";
import MyButton from "../MyButton/MyButton";




const MyModal = ({ customClassBody, headerFor, footerFor, children, closeModal }) => {

    const ref = useRef();
    const handleOnClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            handleOnClick();
        }
    }

    const handleOnClick = () => closeModal();


    useEffect(() => {
        window.addEventListener("click", handleOnClickOutside);
        return (() => window.removeEventListener("click", handleOnClickOutside));
    }, []);


    return <>
        <div className="myModal__main">
            <div ref={ref} className="myModal__content horizontal_middle_figures">
                {<div className="myModal__header">
                    {headerFor && headerFor}
                    <MyButton customClass={"close_button"} valueFor={"X"} onClickFor={handleOnClick} />
                </div>}
                <div className={`myModal__body ${customClassBody ? customClassBody : ""}`}>
                    {children}
                </div>
                {footerFor && <div className="myModal__footer">
                    {footerFor}
                </div>}
            </div>
        </div>

    </>

}


export default MyModal;