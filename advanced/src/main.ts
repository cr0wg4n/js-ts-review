type UserId = string | number

const newId = 12
const newId2 = '12'


enum ROLES {
  ADMIN = 'admin',
  SIMPLE = 'simple',
  CUSTOMER = 'customer',
  GUEST = 'guest'
}

console.log(newId, newId2)


type User = {
  username: string,
  role: ROLES
}

const userDemo: User = {
  username: 'maui',
  role: ROLES.ADMIN
}

console.log(userDemo)


const prices: (string | number| undefined)[] = [1, '23', undefined]

const user: [string, number, boolean?] = ['12', 12, true]

const tupla: [string, string] = ['demo', 'another demo string']

const [a, b] = tupla

console.log(a, b)




const isNew: boolean = true


// 'unknown' is better than 'any'
let unknowVar: unknown
unknowVar = 1


// verify the type before
if (typeof unknowVar === 'number') {
  unknowVar.toString()
}

// Never type function will never end

const infinite = () => {
  while(true){
    console.log('nunca parar')
  }
}

// infinite()

const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if(typeof input === 'string'){ 
    return 'string' 
  } else if (Array.isArray(input)) {
    return 'es un array'
  }
  return fail('not match')
}

// console.log(example(1212))
// console.log(example('1212'))
// console.log(example([1212, 121212]))


const myDreamFunction = (
  id: number, 
  name: string, 
  data: object = {},
  isNew?: boolean, 
) => {
  return {
    id,
    name,
    isNew: isNew ?? false, // null coalescing
    data
  }
}


(null || undefined) ?? "foo"



const checkRoles = (check: boolean, ...args: ROLES[]) => {
  return args
}

const rta = checkRoles(false, ROLES.ADMIN, ROLES.CUSTOMER, ROLES.GUEST)
console.log('checkRoles', rta)


export function parseStr(input: string): string[]
export function parseStr(input: string[]): string

export function parseStr(input: string | string[]): string | string[] {
  return ['1']
}



export function display(a:string, b:string): void
export function display(a:number): void

export function display(a:string|number, b?:string):void {
  console.log(Number(a) + Number(b ??10));
}

display(10)


interface Example {
  diff(one: string): void;
  diff(one: string, two: string): void;
  diff(one: string, two: string, three: string): void;
}

const exp: Example = {
  diff: (one: string, two?:string, three?: string)=>{}
}

exp.diff('1','2','3')


type uuid = string | number

interface Base {
  readonly id: uuid;
  name?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Product extends Base {
  stock: number;
  date: Date;
}

const products: Product[] = [
  {
    id: 'dasdasd',
    name: 'asdasd',
    description: 'asdasdasd',
    stock: 12,
    date: new Date()
  }
]


// type CreateProductDTO = Omit<Product, 'id'|'createdAt'|'updatedAt'>

// should be in another archive
export interface CreateProductDTO extends Omit<Product, 'id'|'createdAt'|'updatedAt'> {
  categoryId: string;
}

const newProduct: CreateProductDTO = {
  categoryId: 'dem',
  date: new Date(),
  stock: 12323,
}



type CreteProductPick = Pick<Product, 'id'|'name'>

// changes all to '?'
type PartialType = Partial<CreateProductDTO>

type RequiredType = Required<CreateProductDTO>

type ReadonlyType = Readonly<CreateProductDTO>

type typing = CreateProductDTO['name']

const array: ReadonlyArray<number> = [12,122,13]

// array[0] = 1 