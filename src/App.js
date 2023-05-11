import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number)=>{
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleSum = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const result = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber('0');
    }
  }

  const handleMinus = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const result = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber('0');
    }
  }

  const handleMultiply = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    }else{
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber('0');
    }
  }

  const handleDivision = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    }else{
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber('0');
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== ''){
      switch(operation){
        case '+':
          handleSum();
          break;
        case '-':
          handleMinus();
          break;
        case '*':
          handleMultiply();
          break;
        case '/':
          handleDivision();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
        <Button label="C" onClick={handleOnClear}/>
        <Button label="/" onClick={handleDivision}/>
        <Button label="*" onClick={handleMultiply}/>
        <Button label="-" onClick={handleMinus}/>
        </Row>
        <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="+" onClick={handleSum}/>
        </Row>
        <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        </Row>
         
      </Content>
    </Container>
  );
}

export default App;
