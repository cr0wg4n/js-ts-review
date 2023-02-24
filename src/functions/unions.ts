export default function main() {
  let union: number | string = 10
  union = '10'

  console.log(union)

  // Alias
  type stringNumer = string | number

  const suma = (a: stringNumer, b: stringNumer) => {
    if (typeof a === 'string' && typeof b ==='string') {
      console.log(a + b)
    } else if (typeof a === 'number' &&  typeof b === 'number') {
      console.log(a + b)
    } else {
      console.log(`I can't`)
    }
  }

  suma(1, '2')
  suma(1, 2)
  suma('1', '2')

  // Literal Types
  type pizzaSizes = 'L' | 'G' | 'M' | 'S'

  const pizzaL: pizzaSizes = 'L'
  const pizzaG: pizzaSizes = 'G'
  const pizzaM: pizzaSizes = 'M'
  const pizzaS: pizzaSizes = 'S'
  const rta = '1' + 1 
}