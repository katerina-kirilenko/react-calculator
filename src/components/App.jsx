import React, { useState } from 'react';
import Header from '@/components/blocks/Header';
import Rows from '@/components/blocks/Rows';
import Result from '@/components/blocks/Result';
import { PLUS } from '@/constants/constants';

let idx = 1;

const App = () => {
  const [rows, setRows] = useState([
    {
      id: idx,
      signSelected: PLUS,
      value: '0',
      disable: false,
    },
  ]);

  const handlerRowAdd = () => {
    const newRow = {
      id: ++idx,
      signSelected: PLUS,
      value: '0',
      disable: false,
    };

    setRows((prevRows) => {
      return [...prevRows, newRow];
    });
  };

  return (
    <div className="container">
      <Header onRowAdd={handlerRowAdd} />
      <Rows rows={rows} />
      <Result res={0} />
    </div>
  );
};

export default App;
