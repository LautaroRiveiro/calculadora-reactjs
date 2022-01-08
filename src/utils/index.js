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
  return res
}

// export const quitarCerosDeIzquierda = (expresion)=>{
//   if (Number(expresion) === 0) return ''
//   let numero = String(expresion).replace(/^0+/g, '')
//   numero = numero.startsWith('.') ? '0' + numero : numero
//   return numero
// }

// const INT_FORMATTER = new Intl.NumberFormat("en-us", {
//   maximumFractionDigits: 0
// })

// export const formatearNumero = (expresion)=>{
//   const trim = Number(expresion).toString()
//   let [entero, decimal] = trim.split('.')
//   entero = INT_FORMATTER.format(entero)
//   return decimal
//   ? `${entero}.${decimal}`
//   : entero
// }