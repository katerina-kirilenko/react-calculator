import React, { useState, useEffect, useCallback } from 'react';
import faker from 'faker';
import Header from '@/components/blocks/Header';
import Rows from '@/components/blocks/Rows';
import Result from '@/components/blocks/Result';
import { PLUS } from '@/constants/constants';

const App = () => {
  const [rows, setRows] = useState([]);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const activeRows = rows.filter((row) => row.disable === false);
    const summary = activeRows.reduce((sum, current) => {
      const currentValue = `${current.signSelected}${current.value}`;
      const num = Number(current.value >= 0 ? currentValue : currentValue.slice(2));
      return sum + num;
    }, 0);
    setResult(summary);
  }, [rows]);

  const handlerRowAdd = useCallback(() => {
    const newRow = {
      id: faker.random.uuid(),
      signSelected: PLUS,
      value: '0',
      disable: false,
    };
    setRows((prevRows) => [...prevRows, newRow]);
  }, []);

  const handlerRowDelete = useCallback(
    (id) => () => {
      const newRows = rows.filter((row) => row.id !== id);
      setRows(newRows);
    },
    [rows],
  );

  const handlerToggleDisable = useCallback(
    (id) => () => {
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

  const handleChangeInputs = useCallback(
    (id) => (event) => {
      const updateRowsValue = rows.map((row) => {
        if (row.id === id) {
          return {
            ...row,
            value: event.target.value,
          };
        }
        return row;
      });
      setRows(updateRowsValue);
    },
    [rows],
  );

  const handleChangeSelect = useCallback(
    (id) => (event) => {
      const updateSignSelected = rows.map((row) => {
        if (row.id === id) {
          return {
            ...row,
            signSelected: event.target.value,
          };
        }
        return row;
      });
      setRows(updateSignSelected);
    },
    [rows],
  );

  return (
    <div className="container">
      <Header onRowAdd={handlerRowAdd} />
      <Rows
        rows={rows}
        onRowDelete={handlerRowDelete}
        onToggleDisable={handlerToggleDisable}
        onChangeInput={handleChangeInputs}
        onChangeSelect={handleChangeSelect}
      />
      <Result result={result} />
    </div>
  );
};

export default App;
