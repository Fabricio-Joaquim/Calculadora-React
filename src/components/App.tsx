import './menu.css'
import Button from './Button'
import Display from './Display'
import React from 'react'
const App = () => {
 
  
  function addNumber(number:number){
    console.log(number)
  }

  function addOperation(operation:string){
    console.log(operation)
  }

  function clean(){
    console.log('clean')
  }
  return(
    <div>
      <h2 className="title">Calculadora</h2>
      <div className="calculadora">
        <Display value={0}/>
        <Button label='AC' click={clean} triple/>
        <Button label='/' click={addOperation} operation/>
        <Button label='7' click={addNumber}/>
        <Button label='8' click={addNumber}/>
        <Button label='9' click={addNumber}/>
        <Button label='*' click={addOperation} operation/>
        <Button label='4' click={addNumber}/>
        <Button label='5' click={addNumber}/>
        <Button label='6' click={addNumber}/>
        <Button label='-' click={addOperation} operation/>
        <Button label='1' click={addNumber}/>
        <Button label='2' click={addNumber}/>
        <Button label='3' click={addNumber}/>
        <Button label='+' click={addOperation} operation/>
        <Button label='0' click={addNumber} double/>
        <Button label='.' click={addOperation}/>
        <Button label='=' click={addOperation} operation/>
      </div>
    </div> 

  );
}

export default App
