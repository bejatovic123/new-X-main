import { useEffect, useState } from "react";
import CText from "../CText/CText";
import MySelectionButton from "../MySelectionButton/MySelectionButton";
import Icon from "../UI/Icon";
import WrapperButton from "../WrapperButton/WrapperButton";
import WrapperCText from "../WrapperCText/WrapperCText";
import WrapperInput from "../WrapperInput/WrapperInput.js";

const FilterV2 = ({ enableOptions, optionHeader, enableAll, onFilterDeleteOptions, disabledSelect, columnHeaders, sortFor, activateSelecting, selectAllFor, onFilterEnter }) => {
    const setValues = () => {
        let values = {};
        columnHeaders.forEach(children => values[children.value] = "");
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
                <WrapperCText id={`filter-ctext-${item.value}-${index}`} key={`filter-ctext-${item.value}-${index}`} customClass={"filterCText"}>
                    <Icon customClass={"center"} filterCtext valueFor={item.value} onClickFor={handleOnClick} iconValue={item.icon}>
                        <span className="displaytext">{item.value}</span>
                    </Icon>
                </WrapperCText>
            )}
            {!optionHeader && enableOptions && <CText customClass={"filteroptions"} key={`filter-ctext-options`} filterCtext valueFor={"Options"} />}
            {optionHeader && enableOptions && <WrapperButton customClass={"wrap"}>
                {optionHeader?.map((item, index) => <Icon disabledFor={!enableAll} key={`optionheaderel-${index}`} onClickFor={onFilterDeleteOptions}
                    iconValue={item} customClass={`filteroptions margin05 filterhead  ${!enableAll ? "disabled" : ""}`} filterCtext valueFor={"Options"} />)}
            </WrapperButton>}
            {activateSelecting && <MySelectionButton disabled={disabledSelect} customClass={`selectOptions  ${enableAll && "active"}`} onSelectFor={handleSelectAll} />}
        </div>
        <div className="filter__inputs">
            {columnHeaders?.map((item, index) =>
                <WrapperInput key={`filter-input-${index}`}>
                    <input value={inputValues[item.value]} onChange={(e) => handleOnChange(e, item.value)} />
                </WrapperInput>
            )}
            {enableOptions && <div />}
            {activateSelecting && <div className="selectOptions" />}
        </div>
    </div>
}

export default FilterV2;