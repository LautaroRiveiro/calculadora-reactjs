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
  const [overwrite, setOverwrite] = useState(false)

  const handleClear = ()=>{
    setPrevious('')
    setCurrent('0')
    setOperator(Operator.nada)
  }

  const handleDelete = ()=>{
    setCurrent('0')
  }

  const handleNumber = (e)=>{
    if(overwrite){
      setCurrent(e.target.innerText)
      setOverwrite(false)
    } else {
      setCurrent(quitarCerosDeIzquierda(current + e.target.innerText))
    }
  }

  const handleDot = ()=>{
    if (!current.includes('.')) {
      setCurrent(current + '.')
    }
  }
  
  const handleOperator = (e)=>{
    // Si están todos los datos cargados entonces resuelve
    if (quitarCerosDeIzquierda(current) && previous && operator) {
      const result = evaluate(Number(previous), Number(current), operator)
      setPrevious(result)
      setCurrent('')
      setOperator(e.target.innerText)
      return
    }

    if(current === '0') return
    if (operator === '') {
      setPrevious(current)
      setCurrent('')
    }
    setOperator(e.target.innerText)
  }

  const handleEvaluate = ()=>{
    if (!quitarCerosDeIzquierda(current) || !previous || !operator) {
      return
    }
    const result = evaluate(Number(previous), Number(current), operator)
    // TODO: Debería ir en Current, hasta que tipee y pase al Previous, excepto la primera vez
    setCurrent(result)
    setPrevious('')
    setOperator(Operator.nada)
    setOverwrite(true)
  }

  const evaluate = (operando1, operando2, operador)=>{
    let res = 0
    switch(operador) {
      case Operator.suma:
        res = operando1 + operando2
        break
      case Operator.resta:
        res = operando1 - operando2
        break
      case Operator.multiplicacion:
        res = operando1 * operando2
        break
      case Operator.division:
        res = operando1 / operando2
        break
      default:
        return undefined
    }
    return res
  }

  const quitarCerosDeIzquierda = (expresion)=>{
    if (Number(expresion) === 0) return ''
    let numero = String(expresion).replace(/^0+/g, '')
    numero = numero.startsWith('.') ? '0' + numero : numero
    return numero
  }

  return (
    <div className="calculadora-grid">
      <div className='output'>
        <div className='previous-operand'>{previous} {operator}</div>
        <div className='current-operand'>{current}</div>
      </div>
      <button className='span-two' onClick={handleClear}>AC</button>
      <button onClick={handleDelete}>DEL</button>
      <button onClick={handleOperator}>÷</button>
      <button onClick={handleNumber}>7</button>
      <button onClick={handleNumber}>8</button>
      <button onClick={handleNumber}>9</button>
      <button onClick={handleOperator}>*</button>
      <button onClick={handleNumber}>4</button>
      <button onClick={handleNumber}>5</button>
      <button onClick={handleNumber}>6</button>
      <button onClick={handleOperator}>+</button>
      <button onClick={handleNumber}>1</button>
      <button onClick={handleNumber}>2</button>
      <button onClick={handleNumber}>3</button>
      <button onClick={handleOperator}>-</button>
      <button onClick={handleDot}>.</button>
      <button onClick={handleNumber}>0</button>
      <button className='span-two' onClick={handleEvaluate}>=</button>
    </div>
  );
}

export default App;
