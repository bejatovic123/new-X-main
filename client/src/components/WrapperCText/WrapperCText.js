



const WrapperCText = (props)=>{


    const {children, customClass, ...desProps} = {...props};

    return <>
    <div className={`wrapperCText__main  ${customClass ? customClass : ""}`}>
        {children}
    </div>
    </>
}


export default WrapperCText;