import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');

  const handleAddNumber = (number)=>{
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
  }

  const handleSum = () => {

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
        <Button label="C" onClick={handleOnClear}/>
        <Button label="%"/>
        <Button label="/"/>
        <Button label="*"/>
        </Row>
        <Row>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="-"/>
        </Row>
        <Row>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="+"/>
        </Row>
        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={() => handleAddNumber('')}/>
        </Row>
         
      </Content>
    </Container>
  );
}

export default App;
