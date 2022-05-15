import { useRef } from "react";




const Icon = ({ children, customClass, valueFor, onClickFor, disabledFor, iconValue }) => {
    const ref = useRef();
    const handleOnClick = () => {
        let sortValue = "";
        if (ref.current.classList.contains("up")) {
            sortValue = "desc";
        } else if (ref.current.classList.contains("down")) {
            sortValue = "";
        } else {
            sortValue = "asc";
        }

        onClickFor(ref, valueFor, sortValue);
    }

    return <>
        <span ref={ref} className={`ctextCp__main ${customClass ? customClass : ""}`} onClick={(!disabledFor && onClickFor) ? handleOnClick : null}>
            {iconValue}
            {children}
        </span>
    </>
}


export default Icon;


