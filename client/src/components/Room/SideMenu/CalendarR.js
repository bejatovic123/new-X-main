import { Calendar } from 'react-calendar';


import Grid from '@mui/material/Grid';

const CalendarR = ({ value }) => {
  return (
    <Grid item xs={12} className='room__set__whole'>
      <Grid
        margin='0 !important'
        width={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        container
        column={12}
        spacing={2}
      >
        <Calendar value={value} onChange={(e) => console.log(e)} />
      </Grid>
    </Grid>
  );
};

export default CalendarR;
