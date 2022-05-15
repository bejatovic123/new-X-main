import React from "react";



const WrapperInput = (props) => {

    const { children, customClass, ...desProps } = { ...props };


    return <>
        <div className={`wrapperInput__main  ${customClass ? customClass : ""}`}>
            {children}
        </div>
    </>

}


export default WrapperInput;