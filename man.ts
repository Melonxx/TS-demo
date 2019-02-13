#!/usr/bin/env ts-node
class Person{
  public children: Person[] = []
  constructor(public name: string){}
  add(child: Person): void{
    this.children.push(child)
  };
  say(n?: number): void{
    n = n || 1
    let str = '---'.repeat(n-1)
    console.log(str+this.name)
    this.children.map(x=>{
      x.say(n+1)
    })
  }
}

let a1 = new Person('haha')
let a11 = new Person('haha1')
let a12 = new Person('haha2')
let a121 = new Person('haha11')
let a122 = new Person('haha22')

a1.add(a11)
a1.add(a12)

a11.add(a121)

a12.add(a122)

a1.say()
