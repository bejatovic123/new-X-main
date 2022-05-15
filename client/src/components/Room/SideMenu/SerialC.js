import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import isWeekend from 'date-fns/isWeekend';
import moment from 'moment';

import { toast, ToastContainer } from 'react-toast';
import { ClickAwayListener } from '@mui/material';

const useStyles = makeStyles({
  seriesBtn: { margin: '15px 0' },

  refreshBtn: { cursor: 'pointer', color: 'white' },

  disabledEvent: { cursor: 'default', pointerEvent: 'none', opacity: 0.5 },
});

const initialValue = {
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: true,
};

const SerialC = (props) => {
  const { setSeries, series, value } = props;
  const [rangeValue, setRangeValue] = React.useState([null, null]);
  const [clicked, setClicked] = useState(initialValue);

  const MondayHandler = () =>
    setClicked({ ...clicked, monday: !clicked.monday });
  const TuesdayHandler = () =>
    setClicked({ ...clicked, tuesday: !clicked.tuesday });
  const WednesdayHandler = () =>
    setClicked({ ...clicked, wednesday: !clicked.wednesday });
  const ThursdayHandler = () =>
    setClicked({ ...clicked, thursday: !clicked.thursday });
  const FridayHandler = () =>
    setClicked({ ...clicked, friday: !clicked.friday });

  const [availableDates, setAvailableDates] = useState([]);
  let selectedDates = [...availableDates];

  const classes = useStyles();

  const handleSelectDay = (day) => {
    const start = moment(rangeValue[0]);
    const end = moment(rangeValue[1]);
    //Get "NEXT DAY" Monday
    let temp = null;
    switch (day) {
      case 'Mon':
        temp = start.clone().day(1);
        break;
      case 'Tue':
        temp = start.clone().day(2);
        break;
      case 'Wed':
        temp = start.clone().day(3);
        break;
      case 'Thu':
        temp = start.clone().day(4);
        break;
      case 'Fri':
        temp = start.clone().day(5);
        break;
      default:
        temp = null;
    }

    if (temp.isAfter(start, 'd') || temp.isSame(start, 'd')) {
      selectedDates.push(temp.format('MMM-Do'));
    }

    while (temp.isBefore(end)) {
      temp.add(7, 'days');
      if (temp.isBefore(end)) {
        selectedDates.push(temp.format('MMM-Do'));
      }
    }

    setAvailableDates(selectedDates);
  };

  const singleDays = () =>
    toast(`You Booked : ${selectedDates} these days in your range`);
  return (
    <>
      <Grid item xs={12}>
        {series === true ? (
          <Grid
            justifyContent={'center'}
            alignItems={'center'}
            container
            column={12}
            spacing={2}
          >
            <Grid item xs={9}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                  startText='Check-in'
                  endText='Check-out'
                  value={rangeValue}
                  onChange={(newValue) => {
                    setRangeValue(newValue);
                  }}
                  shouldDisableDate={isWeekend}
                  renderInput={(startProps, endProps) => (
                    <>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </>
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        ) : (
          <Grid
            justifyContent={'center'}
            alignItems={'center'}
            container
            column={12}
            spacing={2}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label='Date'
                inputFormat='MM/dd/yyyy'
                value={value}
                renderInput={(params) => <TextField {...params} />}
                onChange={(e) => console.log(e)}
                shouldDisableDate={isWeekend}
              />
            </LocalizationProvider>
          </Grid>
        )}
        <Grid item xs={12}>
          <Grid
            justifyContent={'center'}
            alignItems={'center'}
            container
            column={12}
            spacing={3}
          >
            <Grid item xs={10}>
              <Button
                onClick={() => setSeries(!series)}
                size='large'
                variant='contained'
                className={classes.seriesBtn}
              >
                Series{' '}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid
            justifyContent={'center'}
            alignItems={'center'}
            container
            column={12}
            spacing={2}
          >
            <Grid item xs={1} md={2}>
              <Button
                variant='contained'
                size='small'
                onClick={() => (
                  handleSelectDay('Mon'), singleDays(), MondayHandler()
                )}
                disabled={!rangeValue[0] || !clicked.monday}
              >
                M
              </Button>
            </Grid>
            <Grid item xs={1} md={2}>
              <Button
                variant='contained'
                size='small'
                onClick={() => (
                  handleSelectDay('Tue'), singleDays(), TuesdayHandler()
                )}
                disabled={!rangeValue[0] || !clicked.tuesday}
              >
                T
              </Button>
            </Grid>
            <Grid item xs={1} md={2}>
              <Button
                variant='contained'
                size='small'
                onClick={() => (
                  handleSelectDay('Wed'), singleDays(), WednesdayHandler()
                )}
                disabled={!rangeValue[0] || !clicked.wednesday}
              >
                W
              </Button>
            </Grid>
            <Grid item xs={1} md={2}>
              <Button
                variant='contained'
                size='small'
                onClick={() => (
                  handleSelectDay('Thu'), singleDays(), ThursdayHandler()
                )}
                disabled={!rangeValue[0] || !clicked.thursday}
              >
                T
              </Button>
            </Grid>
            <Grid item xs={1} md={2}>
              <Button
                variant='contained'
                size='small'
                onClick={() => (
                  handleSelectDay('Fri'), singleDays(), FridayHandler()
                )}
                disabled={!rangeValue[0] || !clicked.friday}
              >
                F
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <ToastContainer position='bottom-right' delay={8000} />
      </Grid>
    </>
  );
};

export default SerialC;
