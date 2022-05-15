
const MySelectionButton = ({ customClass, disabled, valueFor, onSelectFor }) => {

    const handleOnClick = () => onSelectFor(valueFor && valueFor);

    return <div className={`myselectionbutton__main ${customClass ? customClass : ""} ${disabled ? "disabled" : ""} `} onClick={!disabled ? handleOnClick : undefined} />
}

export default MySelectionButton;