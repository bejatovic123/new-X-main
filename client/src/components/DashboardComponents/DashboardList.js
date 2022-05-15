import React, { useEffect, useState } from "react";
import { AiOutlineHistory } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import BookingHistoryService from "../../service/BookingHistoryService";
import List from "../List/List";
import MyButton from "../MyButton/MyButton";
import WrapperButton from "../WrapperButton/WrapperButton";
import MyTable from "./MyTable";

import { MdEventSeat, MdDoorFront } from "react-icons/md";
import { BsCalendar2WeekFill } from "react-icons/bs";
import MyTableV2 from "./MyTableV2";

const DashboardList = ({ userInfo, openModal, currentDate }) => {
    let navigate = useNavigate();

    const filterOptions = { options: true, columnHeadersArray: [{ value: 'date', icon: <BsCalendar2WeekFill /> }, { value: 'room', icon: <MdDoorFront /> }, { value: 'seatNumber', icon: <MdEventSeat /> }] };
    const [bookedData, setBookedData] = useState([]);
    const [loading, setLoading] = useState(false);
    const openSelectionOptions = bookedData.filter(item => item.selected === true).length > 0;
    const handleNewSeatBooking = () => navigate(`/booking/${userInfo.divisionId}`);
    const handleOnRebook = (item) => navigate(`/booking/${item.roomId}`);
    const handleOnEdit = (item) => navigate(`/booking/${item.roomId}`);
    const handleOnDelete = (item) => deleteBookedSeat({ toDeleteIds: [item.id] });
    const handleDeleteAction = () => {
        let tempObject = { toDeleteIds: [] };
        bookedData?.map(item => item.selected && tempObject.toDeleteIds.push(item.id))
        deleteBookedSeat(tempObject);
    }
    const handleOnSelect = (item) => {
        setBookedData(prevState => {
            return prevState.map(dataRow => {
                if (item.id === dataRow.id)
                    return { ...dataRow, selected: !dataRow.selected };
                return dataRow
            })
        });
    }
    const handleOnSelectAll = (showData, filterAllStatus) => {
        setBookedData(prevState => {
            return prevState.map(dataRow => {
                if (showData.filter(item => item.id === dataRow.id).length > 0 && dataRow.dateSTamp && currentDate <= dataRow.dateSTamp)
                    return { ...dataRow, selected: filterAllStatus };
                return { ...dataRow, selected: false }
            })
        });
    }

    const deleteBookedSeat = async (array) => {
        let { data } = await BookingHistoryService.deleteBookedSeat(array);
        if (data.msg === "successfully deleted") {
            getHistoryData();
        }
    }

    const getHistoryData = async () => {
        let userId = { id: userInfo.id };
        let req = await BookingHistoryService.getHistoryFromToday(userId);
        let data = req.data.msg === "no entry" ? [] : req.data.result;

        let addEmptyNumberOfElements = data.length <= 10 ? 10 - data.length : 0;
        for (let i = 0; addEmptyNumberOfElements > i; i++) {
            data.push({ date: '' });
        }

        setBookedData(data);
        setLoading(true);
    }

    useEffect(() => {
        getHistoryData();
    }, [])

    return <List id="listwrapperbutton" customClass={'column'}>
        {/* <MyTable
            currentDate={currentDate}
            loading={loading}
            data={bookedData}
            filterOptions={filterOptions}
            onEdit={handleOnEdit}
            onRebook={handleOnRebook}
            onDeleteSingle={handleOnDelete}
            onSelectSingle={handleOnSelect}
            onAllSelect={handleOnSelectAll}
            enableAll={openSelectionOptions}
        /> */}
        <MyTableV2
            currentDate={currentDate}
            loading={loading}
            data={bookedData}
            filterOptions={filterOptions}
            onEdit={handleOnEdit}
            onRebook={handleOnRebook}
            onDeleteSingle={handleOnDelete}
            onSelectSingle={handleOnSelect}
            onAllSelect={handleOnSelectAll}
            enableAll={openSelectionOptions}
            onFilterDeleteOptions={handleDeleteAction}
        />
        <MyButton customClass={'not-scaleable margin-top-auto primary'} valueFor={'book seat'} onClickFor={handleNewSeatBooking} />
        <div className="dashboardlist" onClick={openModal}>
            <AiOutlineHistory />
        </div>
        <WrapperButton customClass={`list_selectionOptions ${openSelectionOptions ? "active" : ""}`}>
            <MyButton customClass={'warning'} valueFor={'delete'} onClickFor={handleDeleteAction} />
        </WrapperButton>
    </List>
}

export default DashboardList;