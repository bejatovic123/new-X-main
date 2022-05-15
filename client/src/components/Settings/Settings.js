import MyButton from '../MyButton/MyButton';
import WrapperButton from '../WrapperButton/WrapperButton';
import WrapperImage from '../WrapperImage/WrapperImage';
import { roomData } from '../Room/RoomData/tableInfo';
import { useNavigate } from 'react-router-dom';

const Settings = ({customClass, handleCloseFor}) => {
  let navigate = useNavigate();

  return (
    <>
      <div className='settings__main'>
        <WrapperImage>
          <img
            alt='grundriss_bcm_etage'
            src={require('../../assets/building2.png')}
          />
        </WrapperImage>
        <WrapperButton customClass={'column'}>
          {roomData?.map((item, index) => {
            return (
              <MyButton
                key={`room-mybuttons-${index}`}
                customClass={'primary'}
                displayText={`${item.roomId + 1} ${item.roomName}`}
                valueFor={item.roomId}
                onClickFor={(value) => {
                  navigate(`/booking/${value}`);
                  handleCloseFor();
                }}
              />
            );
          })}
        </WrapperButton>
      </div>
    </>
  );
};

export default Settings;
