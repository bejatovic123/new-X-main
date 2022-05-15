



const WrapperSvg = (props) => {

    const { children, ...desProps } = { ...props };

    return <>
        <div className="wrappersvg__main">
            {children}
        </div>
    </>
}


export default WrapperSvg;
