export const Operator = {
  suma: '+',
  resta: '-',
  multiplicacion: '*',
  division: '÷',
  nada: ''
}

export const evaluate = (operando1, operando2, operador)=>{
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
  return res.toString()
}

const INT_FORMATTER = new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 0
})

export const formatearNumero = (expresion)=>{
  if (!expresion) return ''
  const punto = expresion.includes('.') ? ',' : ''
  let [entero, decimal] = expresion.split('.')
  entero = INT_FORMATTER.format(entero)
  return `${entero}${punto}${decimal || ''}`
}

export const eliminarCeros = (expresion)=>{
  return Number(expresion).toString()
}