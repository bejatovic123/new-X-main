import { useEffect, useRef, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import AccountInformation from "../DashboardComponents/AccountInformation";
import CText from "../CText/CText";
import WrapperCText from "../WrapperCText/WrapperCText";
import WrapperImage from "../WrapperImage/WrapperImage";
import WrapperContent from "../WrapperContent/WrapperContent";

import aku from '../../assets/aku.png';


const Seatdata = (props) => {
    const user = {
        name: 'Muhammed Aktürk',
        shorts: 'AKÜ',
        divison: "Webentwicklung",
        divisonId: 1
    };
    const { children, customClass, hoverInformation, hoverInformationContent, ...desProps } = { ...props };
    const [showInformation, setShowInformation] = useState(false);
    const ref = useRef();
    const handleOnMouseEnter = (e) => {
        let currentTargetRect = e.currentTarget.getBoundingClientRect();
        let refTargetRect = ref.current.getBoundingClientRect();
        ref.current.style.top = `${currentTargetRect.top - refTargetRect.height - 50}px`;
        // ref.current.style.transform = `translateX(${-currentTargetRect.left}px)`;
        //console.log(currentTargetRect.top, ref.current.style.top)
        //ref.current.style.top = "0px";
        //console.log(currentTargetRect.top, hoverInformation);
        setShowInformation(true);

    }
    const handleOnMouseLeave = (e) => {
        setShowInformation(false);
    }

    return <>
        <div className={`seatdata__main ${customClass ? customClass : ""}`} >
            {hoverInformation && <div ref={ref} className={`displayed__information__content ${showInformation ? "show" : ""}`}>
                {hoverInformationContent}
            </div>}
            {hoverInformation && hoverInformation.dateSTamp && <div className="information__box" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}> <AiOutlineInfoCircle /> </div>}
            {children}
        </div>

    </>


}


export default Seatdata;