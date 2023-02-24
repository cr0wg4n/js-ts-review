export default function main(){
  const bin = 0b0011
  console.log('bin', bin)

  const objNumber: Number = 10
  console.log(objNumber)

  let jack: any = {};
  jack = 'SaluDOS'
  // Simple Casting 
  const d1 = (jack as string).toLowerCase()
  console.log(d1)
  
  // Casting with generics
  const d2 = (<string>jack).toUpperCase()
  console.log(d2)
}