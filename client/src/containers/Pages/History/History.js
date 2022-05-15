import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountInformation from '../../../components/AccountInformation/AccountInformation';
import WrapperContent from '../../../components/WrapperContent/WrapperContent';
import CText from '../../../components/CText/CText';
import Filter from '../../../components/Filter/Filter';
import List from '../../../components/List/List';
import MyButton from '../../../components/MyButton/MyButton';
import Seatdata from '../../../components/Seatdata/Seatdata';
import WrapperButton from '../../../components/WrapperButton/WrapperButton';
import WrapperCText from '../../../components/WrapperCText/WrapperCText';

import aku from '../../../assets/aku.png';
import WrapperImage from '../../../components/WrapperImage/WrapperImage';

const fillBookedData = () => {
  const formatDate = (date) => {
    let returnDate;

    returnDate = `${date.getDate().toString().length <= 1
      ? `0` + date.getDate()
      : date.getDate()
      }.${date.getMonth().toString().length <= 1
        ? '0' + date.getMonth()
        : date.getMonth()
      }.${date.getFullYear()}`;

    return returnDate;
  };

  let tempBookedData = [
    {
      date: formatDate(new Date(1647820800000)),
      datetimeStamp: 1647820800000,
      room: 'Webentwicklung',
      roomId: 1,
      seat: 5,
    },
    {
      date: formatDate(new Date(1647907200000)),
      datetimeStamp: 1647907200000,
      room: 'Webentwicklung',
      roomId: 1,
      seat: 8,
    },

    {
      date: formatDate(new Date(1647907200000 + 86400000 * 1)),
      datetimeStamp: 1647907200000 + 86400000 * 1,
      room: 'PR',
      roomId: 3,
      seat: 5,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 4)),
      datetimeStamp: 1647907200000 + 86400000 * 4,
      room: 'Webentwicklung',
      roomId: 1,
      seat: 48,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 2)),
      datetimeStamp: 1647907200000 + 86400000 * 2,
      room: 'Anwendungsentwicklung',
      roomId: 2,
      seat: 8,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 5)),
      datetimeStamp: 1647907200000 + 86400000 * 5,
      room: 'Anwendungsentwicklung',
      roomId: 2,
      seat: 18,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 5)),
      datetimeStamp: 1647907200000 + 86400000 * 5,
      room: 'Anwendungsentwicklung',
      roomId: 2,
      seat: 18,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 5)),
      datetimeStamp: 1647907200000 + 86400000 * 5,
      room: 'Anwendungsentwicklung',
      roomId: 2,
      seat: 18,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 5)),
      datetimeStamp: 1647907200000 + 86400000 * 5,
      room: 'Anwendungsentwicklung',
      roomId: 2,
      seat: 18,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 5)),
      datetimeStamp: 1647907200000 + 86400000 * 5,
      room: 'Anwendungsentwicklung',
      roomId: 2,
      seat: 18,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 5)),
      datetimeStamp: 1647907200000 + 86400000 * 5,
      room: 'Anwendungsentwicklung',
      roomId: 2,
      seat: 18,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 5)),
      datetimeStamp: 1647907200000 + 86400000 * 5,
      room: 'Anwendungsentwicklung',
      roomId: 2,
      seat: 18,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 5)),
      datetimeStamp: 1647907200000 + 86400000 * 5,
      room: 'Anwendungsentwicklung',
      roomId: 2,
      seat: 18,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 5)),
      datetimeStamp: 1647907200000 + 86400000 * 5,
      room: 'Anwendungsentwicklung',
      roomId: 2,
      seat: 18,
    },
    {
      date: formatDate(new Date(1647907200000 + 86400000 * 5)),
      datetimeStamp: 1647907200000 + 86400000 * 5,
      room: 'Anwendungsentwicklung',
      roomId: 2,
      seat: 18,
    },
  ];

  let addEmptyNumberOfElements =
    tempBookedData.length <= 10 ? 10 - tempBookedData.length : 0;

  for (let i = 0; addEmptyNumberOfElements > i; i++) {
    tempBookedData.push({ date: '' });
  }

  return tempBookedData;
};

const History = (props) => {
  let navigate = useNavigate();

  const [bookedData, setBookedData] = useState(fillBookedData);
  const [orginalData] = useState(fillBookedData);
  //const [isLastBooked, setIsLastBooked] = useState(false);
  //const {user} = useContext();
  const user = {
    name: 'Muhammed Aktürk',
    shorts: 'AKÜ',
    divison: "Webentwicklung",
    divisonId: 1
  };
  //console.log(isLastBooked);
  const currentDate = new Date().getTime() - 86400000 * 8;
  const filterOptions = {
    options: true,
    columnHeadersArray: ['date', 'room', 'seat'],
  };
  const handleFilter = (value, sort = 'asc') => {
    let tempArray = [];

    bookedData.map((item) => item.date.length > 0 && tempArray.push(item));

    if (sort === 'desc') {
      tempArray.sort((x, y) => {
        if (x.datetimeStamp >= currentDate && y.datetimeStamp >= currentDate) {
          if (typeof x[value] === 'string') {
            let a = x[value].toUpperCase(),
              b = y[value].toUpperCase();
            return a === b ? 0 : a < b ? 1 : -1;
          } else {
            return y[value] - x[value];
          }
        }
      });
    } else if (sort === 'asc') {
      tempArray.sort((x, y) => {
        if (x.datetimeStamp >= currentDate && y.datetimeStamp >= currentDate) {
          if (typeof x[value] === 'string') {
            let a = x[value].toUpperCase(),
              b = y[value].toUpperCase();
            return a === b ? 0 : a > b ? 1 : -1;
          } else {
            return x[value] - y[value];
          }
        }
      });
    } else {
      tempArray = orginalData;
    }

    let addEmptyNumberOfElements =
      tempArray.length <= 10 ? 10 - tempArray.length : 0;

    for (let i = 0; addEmptyNumberOfElements > i; i++) {
      tempArray.push({ date: '' });
    }

    setBookedData([...tempArray]);
  };
  const handleOnEdit = (value, item) => {
    navigate(`/booking/${item.roomId}`);
    console.log(item, value);
  };
  const handleOnDelete = (value, item) => {
    console.log(item, value);
  };
  const handleOnRebook = (value, item) => {
    console.log('room', item.roomId)
    navigate(`/booking/${item.roomId}`);
    console.log(item, value);
  };
  const handleNewSeatBooking = () => {
    navigate(`/booking/${user.divisonId}`)
    console.log("new seat");
  } //navigate("/booking");
  // console.log(currentDate, bookedData[1].datetimeStamp)

  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleBeforeFilter = (ref, value, sortValue) => {
    selectedFilter?.current.classList.contains('up') &&
      selectedFilter?.current.classList.remove('up');
    selectedFilter?.current.classList.contains('down') &&
      selectedFilter?.current.classList.remove('down');

    if (selectedFilter !== ref) {
      setSelectedFilter(ref);
    }

    if (sortValue === 'asc') {
      ref?.current.classList.add('up');
    } else if (sortValue === 'desc') {
      ref?.current.classList.add('down');
    }

    handleFilter(value, sortValue);
  };

  return (
    <>
      <div className='historyCp__main'>
        <AccountInformation customClass={'horizontal_middle_figures'}>
          <WrapperImage>
            <img alt="aku" src={aku} />
          </WrapperImage>
          <WrapperContent customClass={'horizontal_middle_figures'}>
            <WrapperCText customClass={'row'}>
              <CText customClass={'accountHeads'} valueFor={'Name'} />
              <CText customClass={'accountValues'} valueFor={user.name} />
            </WrapperCText>
            <WrapperCText customClass={'row'}>
              <CText customClass={'accountHeads'} valueFor={'Shorts'} />
              <CText customClass={'accountValues'} valueFor={user.shorts} />
            </WrapperCText>
            <WrapperCText customClass={'row'}>
              <CText customClass={'accountHeads'} valueFor={'Division'} />
              <CText customClass={'accountValues'} valueFor={user.divison} />
            </WrapperCText>
          </WrapperContent>
        </AccountInformation>

        <List customClass={'column'}>
          <Filter
            enableOptions={filterOptions.options}
            filterFor={(ref, value, sortValue) =>
              handleBeforeFilter(ref, value, sortValue)
            }
            columnHeaders={filterOptions.columnHeadersArray}
          />
          <WrapperContent customClass='seatcontent'>
            {bookedData?.map((item, index) => {
              return (
                <Seatdata
                  customClass={currentDate > item.datetimeStamp && 'oldbook'}
                  key={`seatdata-${index}`}
                >
                  <CText
                    key={`history-ctext-date-${index}`}
                    valueFor={item.date}
                  />
                  <CText
                    key={`history-ctext-room-${index}`}
                    valueFor={item.room}
                  />
                  <CText
                    key={`history-ctext-seat-${index}`}
                    valueFor={item.seat}
                  />
                  <WrapperButton>
                    {currentDate > item.datetimeStamp && (
                      <MyButton
                        customClass={'secondary'}
                        valueFor={'rebook'}
                        onClickFor={(value) => handleOnRebook(value, item)}
                      />
                    )}
                    {currentDate <= item.datetimeStamp && (
                      <MyButton
                        customClass={'primary'}
                        valueFor={'edit'}
                        onClickFor={(value) => handleOnEdit(value, item)}
                      />
                    )}
                    {currentDate <= item.datetimeStamp && (
                      <MyButton
                        customClass={'warning'}
                        valueFor={'delete'}
                        onClickFor={(value) => handleOnDelete(value, item)}
                      />
                    )}
                  </WrapperButton>
                </Seatdata>
              );
            })}
          </WrapperContent>
          <MyButton
            customClass={'not-scaleable margin-top-auto primary'}
            valueFor={'book seat'}
            onClickFor={handleNewSeatBooking}
          />
        </List>
      </div>
    </>
  );
};

export default History;

/**
 * 
 * 
 * 
    const handleBeforeFilter2 = (ref, value, sortValue) => {
        selectedFilter?.map(item => {
            item.current.classList.contains("up") && item.current.classList.remove("up");
            item.current.classList.contains("down") && item.current.classList.remove("down");
        });

        let itemFound = selectedFilter?.find(item => {
            return item === ref;
        })
        if (!itemFound) {
           // selectedFilter = [ref];
            setSelectedFilter([ref]);
        }

        if (sortValue === "desc") {
            selectedFilter[0]?.current.classList.add("up");
        } else if (sortValue === "asc") {
            selectedFilter[0]?.current.classList.add("down");
        }

        handleFilter(value, sortValue)
    }
 * 
 */
