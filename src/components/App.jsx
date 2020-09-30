import React, { useState } from 'react';
import Header from '@/components/blocks/Header';
import Row from '@/components/blocks/Row';
import Result from '@/components/blocks/Result';
import {PLUS, MINUS} from '@/constants/constants';
  
const App = () => {
  const [inputValue, setInputValue] = useState('0');

  const InputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container">
      <Header />
      <Row inputValue={inputValue} getInputValue={InputValueHandler} />
      <Result res={inputValue} />
    </div>
  );
};

export default App;
