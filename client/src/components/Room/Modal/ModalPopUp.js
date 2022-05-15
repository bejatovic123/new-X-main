import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ModalPopUp = (props) => {
  let navigate = useNavigate();
  const handleClose = () => props.setOpen(false);

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Grid container column={12} gap={4}>
          <Grid item xs={4}>
            <h1>Settings</h1>
          </Grid>
        </Grid>
        <Grid container column={12} spacing={2}>
          <Grid item xs={8}>
            <Item>
              <img
                className='fullWidth'
                alt='ok'
                src={require('../../../assets/building2.png')}
              />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Grid container columns={12} gap={6}>
                <Grid item xs={12}>
                  {' '}
                  <Button
                    variant='outlined'
                    size='large'
                    onClick={() => {
                      navigate('/booking/0');
                      props.setOpen(false);
                    }}
                  >
                    Room No 1
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  {' '}
                  <Button
                    variant='outlined'
                    size='large'
                    onClick={() => {
                      navigate('/booking/1');
                      props.setOpen(false);
                    }}
                  >
                    Room No 2
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  {' '}
                  <Button
                    variant='outlined'
                    size='large'
                    onClick={() => {
                      navigate('/booking/2');
                      props.setOpen(false);
                    }}
                  >
                    Room No 3
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  {' '}
                  <Button
                    variant='outlined'
                    size='large'
                    onClick={() => {
                      navigate('/booking/3');
                      props.setOpen(false);
                    }}
                  >
                    Room No 4
                  </Button>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalPopUp;
