import React from "react";


interface MyButtonProps {
    disabled?: boolean;
    customClass?: string;
    displayText?: string | React.FC;
    valueFor?: string;
    onClickFor?: (value: string) => void;
}


const MyButton: React.FC<MyButtonProps> = ({ disabled, customClass, displayText, valueFor, onClickFor }) => {

    const handleOnClick = (e) => onClickFor(e.target.value);

    return <button
        disabled={disabled}
        className={`mybutton ${customClass ? customClass : ""}`}
        value={valueFor}
        onClick={onClickFor && handleOnClick}>
        {displayText ? displayText : valueFor}
    </button>
}


export default MyButton;