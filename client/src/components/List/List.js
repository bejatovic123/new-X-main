


const List = (props) => {

    const {children, customClass, ...desProps} = {...props};


    return <>
        <div className={`listCp__main  ${customClass ? customClass : ""}`}>
            {children}
        </div>
    </>

}


export default List;