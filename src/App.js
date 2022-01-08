import { useState } from "react"
import './App.css'
import { evaluate, Operator, formatearNumero, eliminarCeros } from "./utils"

function App() {

  const [previous, setPrevious] = useState('')
  const [current, setCurrent] = useState('0')
  const [operator, setOperator] = useState(Operator.nada)
  const [overwrite, setOverwrite] = useState(false)

  const handleClear = () => {
    setPrevious('')
    setCurrent('0')
    setOperator(Operator.nada)
  }

  const handleDelete = () => {
    setCurrent('0')
  }

  const handleNumber = (e) => {
    if (overwrite) {
      setCurrent(e.target.innerText)
      setOverwrite(false)
    } else {
      const nuevoNumero = current === '0' ? e.target.innerText : current + e.target.innerText
      setCurrent(nuevoNumero)
    }
  }

  const handleDot = () => {
    if (!current.includes('.')) {
      setCurrent(current + '.')
    }
  }

  const handleOperator = (e) => {
    if (!current) {
      setOperator(e.target.innerText)
      return
    }

    if (!operator) {
      setPrevious(eliminarCeros(current))
    } else {
      // Si están todos los datos cargados entonces resuelve
      const result = evaluate(Number(previous), Number(current), operator)
      setPrevious(result)
    }
    setCurrent('')
    setOperator(e.target.innerText)
  }

  const handleEvaluate = () => {
    if (current && previous && operator) {
      const result = evaluate(Number(previous), Number(current), operator)
      setCurrent(result)
      setPrevious('')
      setOperator(Operator.nada)
      setOverwrite(true)
    }
  }

  return (
    <>
      <div className="calculadora-grid">
        <div className='output'>
          <div className='previous-operand'>{formatearNumero(previous)} {operator}</div>
          <div className='current-operand'>{formatearNumero(current)}</div>
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
        <button onClick={handleDot}>,</button>
        <button onClick={handleNumber}>0</button>
        <button className='span-two' onClick={handleEvaluate}>=</button>
      </div>
      
      <footer>
        Calculadora basada en <a href="https://www.youtube.com/watch?v=DgRrrOt0Vr8">The Perfect Beginner React Project</a>
      </footer>
    </>
  )
}

export default App
