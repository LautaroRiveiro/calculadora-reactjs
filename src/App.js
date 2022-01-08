import { useState } from "react";
import './App.css';

function App() {

  const Operator = {
    suma: '+',
    resta: '-',
    multiplicacion: '*',
    division: '÷',
    nada: ''
  }
  const [previous, setPrevious] = useState('')
  const [current, setCurrent] = useState('0')
  const [operator, setOperator] = useState(Operator.nada)

  const getPreviousOperand = ()=>{
    if (!previous) return ''
    return `${previous} ${operator}`
  }

  const handleClear = ()=>{
    setPrevious('')
    setCurrent('0')
    setOperator(Operator.nada)
  }

  const handleDelete = ()=>{
    setCurrent('0')
  }

  const handleNumber = (e)=>{
    // TODO: Está feo
    let nuevoNumero = (current + e.target.innerText).replace(/^0+/g, '');
    nuevoNumero = nuevoNumero.startsWith('.') ? '0' + nuevoNumero : nuevoNumero
    setCurrent(nuevoNumero || '0')

    //const newNumber = current === '0' && e.target.innerText === '0' ? current : current + e.target.innerText
    setCurrent(nuevoNumero)
  }

  const handleDot = ()=>{
    if (!current.includes('.')) {
      setCurrent(current + '.')
    }
  }
  
  const handleOperator = (e)=>{
    if(current === '0') return
    if (operator === '') {
      setPrevious(current)
      setCurrent('')
    }
    setOperator(e.target.innerText)
  }

  const handleEvaluate = ()=>{
    let res
    switch(operator) {
      case Operator.suma:
        res = Number(previous) + Number(current)
        break
      case Operator.resta:
        res = Number(previous) - Number(current)
        break
      case Operator.multiplicacion:
        res = Number(previous) * Number(current)
        break
      case Operator.division:
        res = Number(previous) / Number(current)
        break
      default:
        return
    }

    // TODO: Debería ir en Current, hasta que tipee y pase al Previous, excepto la primera vez
    setCurrent(res)
    setPrevious('')
    setOperator(Operator.nada)
  }

  return (
    <div className="calculadora-grid">
      <div className='output'>
        <div className='previous-operand'>{getPreviousOperand()}</div>
        <div className='current-operand'>{current}</div>
      </div>
      <button className='span-two' onClick={handleClear}>AC</button>
      <button onClick={handleDelete}>DEL</button>
      <button onClick={handleOperator}>÷</button>
      <button onClick={handleNumber}>1</button>
      <button onClick={handleNumber}>2</button>
      <button onClick={handleNumber}>3</button>
      <button onClick={handleOperator}>*</button>
      <button onClick={handleNumber}>4</button>
      <button onClick={handleNumber}>5</button>
      <button onClick={handleNumber}>6</button>
      <button onClick={handleOperator}>+</button>
      <button onClick={handleNumber}>7</button>
      <button onClick={handleNumber}>8</button>
      <button onClick={handleNumber}>9</button>
      <button onClick={handleOperator}>-</button>
      <button onClick={handleDot}>.</button>
      <button onClick={handleNumber}>0</button>
      <button className='span-two' onClick={handleEvaluate}>=</button>
    </div>
  );
}

export default App;
