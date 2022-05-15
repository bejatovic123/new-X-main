
const WrapperButton = ({ customClass, children }) => {
    return <>
        <div className={`wrapperButton__main ${customClass ? customClass : ""}`}>
            {children}
        </div>
    </>
}

export default WrapperButton;