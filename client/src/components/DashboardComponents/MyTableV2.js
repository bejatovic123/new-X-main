import { useState } from "react";
import CText from "../CText/CText";
import Filter from "../Filter/Filter";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import MyButton from "../MyButton/MyButton";
import MySelectionButton from "../MySelectionButton/MySelectionButton";
import Seatdata from "../Seatdata/Seatdata";
import WrapperButton from "../WrapperButton/WrapperButton";
import WrapperContent from "../WrapperContent/WrapperContent";
import FilterV2 from "./FilterV2";
import SeatdataV2 from "./SeatdataV2";
import { MdDelete, MdMode, MdOutlineRefresh } from "react-icons/md";


const MyTableV2 = ({ loading, data, enableAll, currentDate, onFilterDeleteOptions, filterOptions, onEdit, onRebook, onDeleteSingle, onAllSelect, onSelectSingle }) => {
    let showData;
    const emptyArrays = Array(10).fill({ date: "" });
    const [filterValues, setFilterValues] = useState({});
    const [sortValue, setSortValue] = useState({});
    const openSelectionOptions = data.filter(item => item.selected === true).length > 0;
    const handleFilter = (toFilterValues) => setFilterValues(prevState => ({ ...prevState, ...toFilterValues }));
    const handleSorting = (ref, value, sort = 'asc') => handleBeforeSorting(ref, value, sort);
    const handleAllSelect = (filterAllStatus) => onAllSelect(showData, filterAllStatus);
    const handleOnSelect = (item) => onSelectSingle(item);
    const checkFilterheadSelect = () => data.filter(item => item.dateSTamp && currentDate <= item.dateSTamp && item.date.length > 0).length === 0;
    const handleOnEdit = (value, item) => onEdit(item);
    const handleOnRebook = (value, item) => onRebook(item);
    const handleOnDelete = (value, item) => onDeleteSingle(item);


    const [selectedSorting, setSelectedSorting] = useState(null);
    const handleBeforeSorting = (ref, value, sort) => {
        selectedSorting?.current.classList.contains('up') && selectedSorting?.current.classList.remove('up');
        selectedSorting?.current.classList.contains('down') && selectedSorting?.current.classList.remove('down');
        selectedSorting !== ref && setSelectedSorting(ref);

        if (sort === 'asc')
            ref?.current.classList.add('up');
        else if (sort === 'desc')
            ref?.current.classList.add('down');

        setSortValue({ value, sort })
    }


    const getFilteredData = (copyArray) => {
        let newArray = [...copyArray];
        for (let [key, value] of Object.entries(filterValues)) {
            if (value.length === 0)
                continue;

            newArray = copyArray.filter(item => {
                if (item.date.length > 0) {
                    let itemValue = typeof item[key] === "string" ? item[key] : item[key].toString();
                    let iterateValue = value;
                    return itemValue.includes(iterateValue) && item
                }
            })
            copyArray = [...newArray];
        }
        return newArray;
    }

    const getSortedData = (tempArray) => {
        const value = sortValue?.value;
        const sort = sortValue?.sort;

        if (sort === 'desc') {
            tempArray.sort((x, y) => {
                if (x.dateSTamp >= currentDate && y.dateSTamp >= currentDate) {
                    if (typeof x[value] === 'string') {
                        let a = x[value].toUpperCase(),
                            b = y[value].toUpperCase();
                        return a === b ? 0 : a < b ? 1 : -1;
                    }
                    return y[value] - x[value];
                } return x;
            });
        } else if (sort === 'asc') {
            tempArray.sort((x, y) => {
                if (x.dateSTamp >= currentDate && y.dateSTamp >= currentDate) {
                    if (typeof x[value] === 'string') {
                        let a = x[value].toUpperCase(),
                            b = y[value].toUpperCase();
                        return a === b ? 0 : a > b ? 1 : -1;
                    }
                    return x[value] - y[value];
                } return x;
            });
        }

        let addEmptyNumberOfElements = tempArray.length <= emptyArrays.length ? emptyArrays.length - tempArray.length : 0;
        for (let i = 0; addEmptyNumberOfElements > i; i++) {
            tempArray.push({ date: '' });
        }

        return tempArray;
    };

    showData = getFilteredData([...data]);
    showData = getSortedData(showData);

    return <>
        {/* <Filter
            activateSelecting
            columnHeaders={filterOptions.columnHeadersArray}
            enableOptions={filterOptions.options}
            onFilterEnter={handleFilter}
            sortFor={handleSorting}
            selectAllFor={handleAllSelect}
            disabledSelect={checkFilterheadSelect()}
            enableAll={enableAll}
        /> */}
        <FilterV2
            activateSelecting
            columnHeaders={filterOptions.columnHeadersArray}
            enableOptions={filterOptions.options}
            optionHeader={[<MdDelete />]}
            onFilterEnter={handleFilter}
            sortFor={handleSorting}
            selectAllFor={handleAllSelect}
            disabledSelect={checkFilterheadSelect()}
            enableAll={enableAll}
            onFilterDeleteOptions={onFilterDeleteOptions}
        />


        <WrapperContent customClass='seatcontent'>
            {loading && showData?.map((item, index) => {
                return (
                    <SeatdataV2 customClass={currentDate > item.dateSTamp && 'oldbook'} key={`seatdata-${index}`} hoverInformation={item} >
                        <CText key={`history-ctext-date-${index}`} valueFor={item.date} />
                        <CText key={`history-ctext-room-${index}`} valueFor={item.room} />
                        <CText key={`history-ctext-seat-${index}`} valueFor={item.seatNumber} />
                        <WrapperButton customClass={"wrap"}>
                            {currentDate > item.dateSTamp && (<MyButton customClass={'secondary'} displayText={<MdOutlineRefresh />} valueFor={"rebook"} onClickFor={(value) => handleOnRebook(value, item)} />)}
                            {currentDate <= item.dateSTamp && (<MyButton customClass={'primary'} displayText={<MdMode />} valueFor={'edit'} onClickFor={(value) => handleOnEdit(value, item)} />)}
                            {currentDate <= item.dateSTamp && (<MyButton disabled={openSelectionOptions} displayText={<MdDelete />} customClass={'warning'} valueFor={'delete'} onClickFor={(value) => handleOnDelete(value, item)} />)}
                        </WrapperButton>
                        {currentDate <= item.dateSTamp && item.dateSTamp && <MySelectionButton key={`selectkey-${index}`} customClass={`selectOptions ${item.selected && "active"}`} valueFor={item} onSelectFor={handleOnSelect} />}
                        {currentDate > item.dateSTamp && item.dateSTamp && <MySelectionButton disabled customClass={"selectOptions"} valueFor={item} onSelectFor={handleOnSelect} />}
                    </SeatdataV2>
                );
            })}
            {!loading && <>
                {emptyArrays?.map((item, index) => <Seatdata key={`seatdata-empty-${index}`} />)}
                <LoadingScreen />
            </>}
        </WrapperContent>
    </>
}

export default MyTableV2;