import React, { useEffect, useState, useCallback } from 'react';
import Table from './Table.js';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import 'react-calendar/dist/Calendar.css';

import { roomData } from '../RoomData/tableInfo';
import Menu from '../SideMenu/Menu';
import MyModal from '../../MyModal/MyModal.js';
import Settings from '../../Settings/Settings.js';
import BookingHistoryService from '../../../service/BookingHistoryService.js';
import { useSelector } from 'react-redux';

const Room = () => {
  const [open, setOpen] = useState(false);

  const room = useSelector((state) => state.roomRed.room.room);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('rooom ====> ', room);
  }, [room]);

  const handleOpen = () => {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    setOpen(true);
  };
  const handleClose = () => {
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    setOpen(false);
  };
  const params = useParams();
  const roomId = params.roomId ? params.roomId : 0;
  document.getElementsByTagName('body')[0].style.overflowY = 'auto';
  // const allOtherValuesFromHistory = params.sendedData;

  const [series, setSeries] = useState(false);
  const [value, setValue] = useState([null, null]);
  const [valueOne, setValueOne] = useState(null);


  const getDataForRoom = async () => {
    let json = {
      date: new Date(),
      roomId: 1
    }

    let result = BookingHistoryService.getRoomData(json);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='workRoom'>
        <div className='firstPlace'>
          <Grid
            container
            column={12}
            spacing={2}
            height='100%'
            margin='0'
            width='100%'
          >
            <Grid item xs={8} padding='0 !important'>
              <Table data={roomData[roomId]} />
            </Grid>
            <Menu
              valueOne={valueOne}
              setValueOne={setValueOne}
              setSeries={setSeries}
              handleOpen={handleOpen}
              setValue={setValue}
              value={value}
              series={series}
            />
          </Grid>
        </div>
        {/*<ModalPopUp setOpen={setOpen} open={open} />*/}
        {open && (
          <MyModal
            closeModal={() => handleClose()}
            headerFor={<h1>Settings</h1>}
          >
            <Settings handleCloseFor={handleClose} />
          </MyModal>
        )}
      </div>
    </>
  );
};

export default Room;

// <img  alt="ok" src={require('./../../assets/building.jpg')} />
