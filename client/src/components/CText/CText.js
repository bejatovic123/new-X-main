import { useRef } from "react";




const CText = ({customClass, valueFor, onClickFor}) => {
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
        <span ref={ref} className={`ctextCp__main ${customClass ? customClass : ""}`} onClick={onClickFor && handleOnClick}>
            {valueFor}
        </span>
    </>
}


export default CText;




/***
 * 
 * 
 * let sortValue = "";
        if (ref.current.classList.contains("up")) {
            ref.current.classList.remove("up")
            ref.current.classList.add("down")
            sortValue = "asc";
        } else if (ref.current.classList.contains("down")) {
            ref.current.classList.remove("down")
            sortValue = "desc";
        } else {
            ref.current.classList.add("up")
            sortValue = "";
        }
        console.log("hi")
 * 
 */