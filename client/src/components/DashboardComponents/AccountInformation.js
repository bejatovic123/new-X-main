import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FiSettings } from "react-icons/fi";
import MyModal from "../MyModal/MyModal";
import Settings from "../Settings/Settings";
import WrapperImage from "../WrapperImage/WrapperImage";
import WrapperContent from "../WrapperContent/WrapperContent";
import WrapperCText from "../WrapperCText/WrapperCText";
import CText from "../CText/CText";

const AccountInformation = ({ customClass, userInfo }) => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => {
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
        setOpenModal(true);
    };
    const handleClose = () => {
        document.getElementsByTagName("body")[0].style.overflowY = "auto";
        setOpenModal(false);
    }

    return <div className={`accountInformation__main  ${customClass ? customClass : ""}`}>
        <WrapperImage>
            <img alt="aku" src={userInfo.imgBase64} />
        </WrapperImage>
        <WrapperContent customClass={'horizontal_middle_figures'}>
            <WrapperCText customClass={'row'}>
                <CText customClass={'accountHeads'} valueFor={'Name'} />
                <CText customClass={'accountValues'} valueFor={userInfo.name} />
            </WrapperCText>
            <WrapperCText customClass={'row'}>
                <CText customClass={'accountHeads'} valueFor={'Short'} />
                <CText customClass={'accountValues'} valueFor={userInfo.short} />
            </WrapperCText>
            <WrapperCText customClass={'row'}>
                <CText customClass={'accountHeads'} valueFor={'Division'} />
                <CText customClass={'accountValues'} valueFor={userInfo.division} />
            </WrapperCText>
        </WrapperContent>
        <div className="ai_settings" onClick={handleOpen}><FiSettings /></div>
        {openModal && ReactDOM.createPortal(<MyModal closeModal={handleClose} headerFor={<h1>Settings</h1>}>
            <Settings handleCloseFor={handleClose} />
        </MyModal>, document.getElementById("modal-root"))}
    </div>
}

export default AccountInformation;