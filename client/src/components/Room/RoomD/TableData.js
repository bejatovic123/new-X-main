import React from 'react';
import './Table.scss';
import './tableData.scss';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { setRoom } from '../../../redux/slices/roomSlice';
import { useDispatch } from 'react-redux';

const TableData = (props) => {

  const { data, roomId, roomName } = props;

  const dispatch = useDispatch();

  const handleReserve = (reservationType, singleRoomData) => {
    if (reservationType === 'morning') {
      dispatch(setRoom({
        roomName: roomName,
        roomId: roomId,
        seat: singleRoomData?.seat,
        morning: true,
        afternoon: false,
        date: new Date()
      }))
    }
    
    if (reservationType === 'afternoon') {
      dispatch(setRoom({
        roomName: roomName,
        roomId: roomId,
        seat: singleRoomData?.seat,
        morning: false,
        afternoon: true,
        date: new Date()
      }))
    }
  }
  
  return <>
  {
    data?.map((d, index)=> {
      return (
        <Grid
          item
          xs={d.position === 'horizontal' ? 10 : 5}
          key={index}
        >
          <div className={`${d.position}`}>
            {d.position === 'horizontal' ? (
              <Grid container justifyContent={'center'} columns={12}>
                {!d.morning && !d.afternoon ? (
                  <>
                    <Grid Grid item xs={5}>
                      <Button onClick={() =>(handleReserve('morning', d))} variant='contained' size='small'>
                        {'M Free'}
                      </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Divider
                        className='divider'
                        orientation='vertical'
                        flexItem
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Button onClick={() =>(handleReserve('afternoon'))} variant='contained' size='small'>
                        {'A Free'}
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      {d.seat}
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={5}>
                      <Button variant='contained' size='small'>
                        {'Aku'}
                      </Button>
                    </Grid>
                    <Grid item xs={5}>
                      <Button variant='contained' size='small'>
                        {'Free'}
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      {d.seat}
                    </Grid>
                  </>
                )}
              </Grid>
            ) : (
              <Grid
                container
                justifyContent={'space-between'}
                gap={1}
                alignItems={'space-between'}
                columns={12}
              >
                {!d.morning && !d.afternoon ? (
                  <>
                    <Grid item xs={12}>
                      <Button onClick={() =>(handleReserve('morning', d))} variant='contained' size='small'>
                        {'M Free'}
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider flexItem />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant='contained' size='small'>
                        {'Aku'}
                      </Button>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12}>
                      <Button variant='contained' size='small'>
                        {'Aku'}
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant='contained' size='small'>
                        {'Aku'}
                      </Button>
                    </Grid>
                  </>
                )}
                <>
                  <Grid item xs={12}>
                    <div className='roomName'>{d.seat}</div>
                  </Grid>
                </>
              </Grid>
            )}
          </div>
        </Grid>
      )
    })
  }
  </>;
};

export default TableData;
