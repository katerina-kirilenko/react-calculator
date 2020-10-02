import React, { useState, useCallback } from 'react';
import Header from '@/components/blocks/Header';
import Rows from '@/components/blocks/Rows';
import Result from '@/components/blocks/Result';
import { PLUS } from '@/constants/constants';

let idx = 0;

const App = () => {
  const [rows, setRows] = useState([]);

  const createNewRow = () => {
    return {
      id: ++idx,
      signSelected: PLUS,
      value: '0',
      disable: false,
    };
  };

  // useCallback для всех функций
  const handlerRowAdd = useCallback(() => {
    const newRow = createNewRow();
    setRows((prevRows) => [...prevRows, newRow]);
  }, [rows]);

  const handlerRowDelete = useCallback(
    (id) => {
      const newRows = rows.filter((row) => row.id !== id);
      setRows(newRows);
    },
    [rows],
  );

  const handlerToggleDisable = useCallback(
    (id) => {
      const index = rows.findIndex((row) => row.id === id);
      const oldRow = rows[index];
      const newRow = { ...oldRow, disable: !oldRow.disable };
      const newRows = [...rows.slice(0, index), newRow, ...rows.slice(index + 1)];
      setRows(newRows);
    },
    [rows],
  );

  return (
    <div className="container">
      <Header onRowAdd={handlerRowAdd} />
      <Rows rows={rows} onRowDelete={handlerRowDelete} onToggleDisable={handlerToggleDisable} />
      <Result result={0} />
    </div>
  );
};

export default App;
