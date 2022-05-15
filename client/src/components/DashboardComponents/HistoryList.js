import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingHistoryService from "../../service/BookingHistoryService";
import List from "../List/List";
import MyTable from "./MyTable";

const HistoryList = ({ userInfo, currentDate }) => {
    let navigate = useNavigate();
    const filterOptions = { options: true, columnHeadersArray: ['date', 'room', 'seatNumber'] };
    const [historyData, setHistoryData] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleOnRebook = (item) => navigate(`/booking/${item.roomId}`);

    const getPastHistory = async () => {
        let userId = { id: userInfo.id };
        let req = await BookingHistoryService.getPastHistory(userId);
        let data = req.data.msg === "no entry" ? [] : req.data.result;

        let addEmptyNumberOfElements = data.length <= 10 ? 10 - data.length : 0;
        for (let i = 0; addEmptyNumberOfElements > i; i++) {
            data.push({ date: '' });
        }

        setHistoryData(data);
        setLoading(true);
    }

    useEffect(() => {
        getPastHistory();
    }, [])

    return <List customClass={'column'}>
        <MyTable
            currentDate={currentDate}
            loading={loading}
            filterOptions={filterOptions}
            data={historyData}
            onRebook={handleOnRebook}
        />
    </List>
}

export default HistoryList;