import React, { useState, useCallback } from 'react';
import faker from 'faker';
import Header from '@/components/blocks/Header';
import Rows from '@/components/blocks/Rows';
import Result from '@/components/blocks/Result';
import { PLUS } from '@/constants/constants';

const App = () => {
  const [rows, setRows] = useState([]);

  const handlerRowAdd = useCallback(() => {
    const newRow = {
      id: faker.random.uuid(),
      signSelected: PLUS,
      value: '0',
      disable: false,
    };
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
      const newRows = rows.map((row) => {
        if (row.id === id) {
          return {
            ...row,
            disable: !row.disable,
          };
        }
        return row;
      });
      setRows(newRows);
    },
    [rows],
  );

  // temp
  const inputsCalculate = useCallback(() => {
    const activeRows = rows.filter((row) => row.disable === false);
  }, [rows]);

  return (
    <div className="container">
      <Header onRowAdd={handlerRowAdd} />
      <Rows rows={rows} onRowDelete={handlerRowDelete} onToggleDisable={handlerToggleDisable} />
      <Result result={0} />
    </div>
  );
};

export default App;
