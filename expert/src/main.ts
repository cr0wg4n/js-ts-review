


const date = new Date(1993, 1, 12)


console.log(date)


class MyDate {
  year: number
  private month: number
  day: number

  constructor(year: number, month: number, day: number){
    this.year = year
    this.month = month
    this.day = day
  }

  toString(){
    return `${this.year}/${this.month}/${this.day}`
  }
}

const newDate = new MyDate(2022, 10, 12)

console.log(newDate)




class NewMyDate {
  // Set access public or private
  constructor(
    public year: number=1990, 
    public month: number=12, 
    private day: number=10
  ){}

  toString(){
    return `${this.year}/${this.month}/${this.day}`
  }
}

const newNewDate = new NewMyDate(2022, 10, 12)

console.log(newNewDate)