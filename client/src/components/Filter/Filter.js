import { useEffect, useState } from "react";
import CText from "../CText/CText";
import MySelectionButton from "../MySelectionButton/MySelectionButton";
import WrapperCText from "../WrapperCText/WrapperCText";
import WrapperInput from "../WrapperInput/WrapperInput.js";

const Filter = ({ enableOptions, enableAll, disabledSelect, columnHeaders, sortFor, activateSelecting, selectAllFor, onFilterEnter }) => {
    const setValues = () => {
        let values = {};
        columnHeaders.forEach(children => values[children] = "");
        return values;
    }
    const [inputValues, setInputValues] = useState(setValues);
    const handleOnClick = (ref, value, sortValue) => sortFor(ref, value, sortValue);
    const handleOnChange = (e, inputValue) => {
        let copyInputValues = { ...inputValues };
        copyInputValues[inputValue] = e.target.value;
        setInputValues(prevState => ({ ...prevState, ...copyInputValues }));
    }
    const handleSelectAll = () => selectAllFor(!enableAll);

    useEffect(() => {
        onFilterEnter && onFilterEnter(inputValues);
    }, [inputValues])

    return <div className="filterCp__main">
        <div className="filter__head">
            {columnHeaders?.map((item, index) =>
                <WrapperCText id={`filter-ctext-${item}-${index}`} key={`filter-ctext-${item}-${index}`} customClass={"filterCText"}>
                    <CText filterCtext valueFor={item} onClickFor={handleOnClick} />
                </WrapperCText>
            )}
            {enableOptions && <CText customClass={"filteroptions"} key={`filter-ctext-options`} filterCtext valueFor={"Options"} />}
            {activateSelecting && <MySelectionButton disabled={disabledSelect} customClass={`selectOptions  ${enableAll && "active"}`} onSelectFor={handleSelectAll} />}
        </div>
        <div className="filter__inputs">
            {columnHeaders?.map((item, index) =>
                <WrapperInput key={`filter-input-${index}`}>
                    <input value={inputValues[item]} onChange={(e) => handleOnChange(e, item)} />
                </WrapperInput>
            )}
            {enableOptions && <div />}
            {activateSelecting && <div className="selectOptions" />}
        </div>
    </div>
}

export default Filter;
