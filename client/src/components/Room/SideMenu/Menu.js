import React from 'react';
import Button from '@mui/material/Button';

import { Settings } from '@mui/icons-material';
import CalendarR from './CalendarR';
import SerialC from './SerialC';

import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';

import { toast, ToastContainer } from 'react-toast';

const useStyles = makeStyles({
  bookingBtn: {
    marginBottom: 16,
  }
});

const Menu = (props) => {
  const { setSeries, handleOpen, setValue, series } = props;

  const selectedDate = useSelector((state) => state.roomRed.room.room.date);
  const selectedSeat = useSelector((state) => state.roomRed.room.room.seat);

  const classes = useStyles();
  const seat = () => toast(`You Booked a Seat  ${selectedSeat}`);

  return (
    <>
      <Grid item xs={4} padding='0 !important' height='100% !important'>
        <div className='whitBack'>
          <Grid
            justifyContent={'center'}
            alignItems={'center'}
            container
            column={12}
            gap={5}
            className='room__set__whole'
          >
            <Grid item xs={12} className='room__set'>
              <Grid
                justifyContent={'center'}
                alignItems={'center'}
                container
                column={12}
                spacing={2}
              >
                <Grid item xs={9}>
                  <h3>Rooms</h3>
                </Grid>
                <Grid item xs={3}>
                  <Settings onClick={handleOpen} />
                </Grid>
              </Grid>
            </Grid>

            {/* <CalendarR 
              className='room__set__whole'
              value={selectedDate}
              onChange={(e) => console.log(e)}
            />*/}

            <SerialC
              setSeries={setSeries}
              series={series}
              setValue={setValue}
              value={selectedDate}
            />

            <Grid item xs={12}>
              <Grid
                justifyContent={'center'}
                alignItems={'center'}
                container
                column={12}
                spacing={2}
              >
                <Grid item xs={5}>
                  <Button variant='contained'>Morning</Button>
                </Grid>
                <Grid item xs={5}>
                  <Button variant='contained'>After noon</Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid justifyContent={'center'} alignItems={'center'} container>
                <Grid item xs={10}>
                  <Button
                    size='large'
                    variant='contained'
                    className={classes.bookingBtn}
                    onClick={seat}
                  >
                    Booking
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <ToastContainer position='bottom-right' delay={5000} />
      </Grid>
    </>
  );
};

export default Menu;
