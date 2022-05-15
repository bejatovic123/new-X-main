import React from 'react';
import './Table.scss';
import './TableData.js';
import TableData from './TableData.js';

import Grid from '@mui/material/Grid';

const Table = (props) => {
  const columns = props.data.tables.column;

  const getColumns = () => {
    let cols = [];
    for (let i = 0; i < columns; i++) {
    console.log(props.data.tables.tableData[i])
      cols.push(
        <Grid
          padding='0'
          columns={12}
          direction='row'
          gap={2}
          justifyContent='space-around'
          alignItems='center'
          className='col-tab'
          container
          key={i}
        >
          <TableData
            roomName={props.data.roomName}
            roomId={props.data.roomId}
            data={props.data.tables.tableData[i]}
          />
        </Grid>,
      );
    }
    return cols;
  };
  
  return <div className='tableOne'>{getColumns(props.data)}</div>;
};

export default Table;
