import { useRef, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";


const SeatdataV2 = ({ children, customClass, hoverInformation, hoverInformationContent }) => {
    const [showInformation, setShowInformation] = useState(false);
    const ref = useRef();
    const handleOnMouseEnter = (e) => {
        let currentTargetRect = e.currentTarget.getBoundingClientRect();
        let refTargetRect = ref.current.getBoundingClientRect();
        ref.current.style.top = `${currentTargetRect.top - refTargetRect.height - 50}px`;
        setShowInformation(true);
    }
    const handleOnMouseLeave = () =>  setShowInformation(false);

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


export default SeatdataV2;