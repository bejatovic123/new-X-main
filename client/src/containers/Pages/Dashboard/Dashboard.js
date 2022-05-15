import React, { useState } from 'react';
import ReactDOM from "react-dom"
import { useSelector } from "react-redux";
import AccountInformation from '../../../components/DashboardComponents/AccountInformation';
import MyModal from '../../../components/MyModal/MyModal';
import DashboardList from '../../../components/DashboardComponents/DashboardList';
import HistoryList from '../../../components/DashboardComponents/HistoryList';

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const userInfo = useSelector(state => state.auth.user);
  const currentDate = new Date().getTime() - 86400000 * 1;
  const handleOnModalClose = () => {
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    setOpenModal(false);
  }
  const handleOnModalOpen = () => {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    setOpenModal(true);
  }
  
  return <>
    <div className='dashboard__main'>
      <AccountInformation customClass={'horizontal_middle_figures'} userInfo={userInfo} />
      <DashboardList currentDate={currentDate} userInfo={userInfo} openModal={handleOnModalOpen} />
    </div>
    {openModal && ReactDOM.createPortal(<MyModal customClassBody={"padding0"} closeModal={handleOnModalClose}
      headerFor={<>
        <h1>History</h1>
      </>}>
      <HistoryList currentDate={currentDate} userInfo={userInfo} />
    </MyModal>, document.getElementById("modal-root"))}
  </>
};

export default Dashboard;