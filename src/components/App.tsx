import './menu.css'
import Button from './Button'
import Display from './Display'
import * as type from './type'
import React, { useState } from 'react'

const App = () => {
  const init = {
    displayValue: '0',
    clearDisplay: false,
    operation: '',
    values: [0,0],
    current: 0
  }
  const [Data,setData] = useState<type.calculate>(init)

  function addNumber(digit:string){
    if(digit === '.' && Data.displayValue.includes('.')){
      return 
    }

    const clearDisplay = Data.displayValue === '0' || Data.clearDisplay
    const current = clearDisplay ? '' : Data.displayValue
    const displayValue = current+digit
    setData({
      clearDisplay: false,
      displayValue:displayValue,
      current:Data.current,
      values:Data.values,
      operation:Data.operation
    })

    if(digit!=='.'){
      const index = Data.current
      const newValue = parseFloat(displayValue)
      const values = [...Data.values]
      values[index] = newValue
      setData({values,displayValue, current:Data.current, operation:Data.operation})
    }

  }
  function addOperation(operation:string){
    if(Data.current===0){
      setData({clearDisplay: true,displayValue:Data.displayValue, current:1, values:Data.values, operation})
    
    }else{
      let valor = 0
      switch (Data.operation) {
        case '+':
          valor = Data.values[0] + Data.values[1]
          break;
        case '-':
          valor = Data.values[0] - Data.values[1]
          break;
        case '/':
          valor = Data.values[0] / Data.values[1]
          break;
        case '*':
          valor = Data.values[0] * Data.values[1]
          break;
        default:
          break;
      }
      const end = operation === '='
         setData({displayValue:valor.toString(),
        current: end ? 0 : 1,
        operation: end ? '':operation,
        values: [valor,0],
        clearDisplay:!end
      })
    }
  }

  function clean(){
    setData({...init});
  }

  return(
    <div>
      <h2 className="title">Calculadora</h2>
      <div className="calculadora">
        <Display value={Data.displayValue}/>
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
        <Button label='.' click={addNumber}/>
        <Button label='=' click={addOperation} operation/>
      </div>
    </div> 
  );
}

export default App
