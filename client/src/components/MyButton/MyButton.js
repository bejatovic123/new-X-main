const MyButton = ({ disabled, customClass, displayText, valueFor, onClickFor }) => {

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