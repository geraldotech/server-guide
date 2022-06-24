//string, boolean, number...
let x: number = 10;
let git: string = 10;
x = 18;

console.log(x);

// inferencia - code mais sucinto
let y = 12;
//y = "tes";

// annotation   -  explicito
let z:number = 12;

//tipos básicos

let Firtname: string = "Geraldo";
console.log(Firtname);

Firtname = "Felipe";
console.log(Firtname)

const mynum: number[] = [1,2,3,4];
console.log(mynum.length)

const users: {name: string, age: number} = {
    name:"Gerald",
    age: 29
}
console.log(users)

console.log(users.name)

//TUTPLE : tuplas determina como o arr deve ser
let myTuple: [number, string, string] //nessa ordem e tipos
myTuple = [6, "oi", "ola"]; //correto 
myTuple = [true,false,true];
//myTuple = [´"oi", 5] //errado

//any aceita qualer tipo de dado, vai contra a filosofia do TypeScript, aceitando qualquer coisa
let a: any = 0;

a = "test",
a = 5;
a = true;
a = [];

//union type
let id : string | number = 10;
id = 11;
id = "Geraldo";


//type alias
type myIdType = number | string

const user: myIdType = 10;
const productId: myIdType = "001"

//enum - enumerando coleções
//tamanho de roupas (size: media, size: pequeno)
enum size {
    P = "Pequeno",
    M = "Media",
    G = "Grande"
}

const camisa = {
    name: "Camisa Gola V",
    size: size.G,
};
console.log(camisa);

console.log(`Geraldo veste ${size.G}` )

//literal types
let teste: "atenticado" | null

//teste = "outro"
teste = "atenticado";

teste = null;

//functions
function sum(a:number,b:number){
    return a +b
}
console.log(sum(1,2));

//tipando retorno
function sayhello(name:string):string{
    return `Hello ${name}`;
}
console.log(sayhello("gecode.dev"))

//function sem retorno
// void - tipo de função que não retorna nada
function logger(msg: string): void {
    console.log(msg)
}
logger("test!")


//dado opcional ?
function greeting(name: string, greet?: string){
console.log(`Olá ${greet} ${name}`)
}
greeting("Geraldo");

//dado opcional ? checking to evitar undefined
function greeting2(name: string, greet?: string){
    if(greet){
        console.log(`Olá ${greet} ${name}`)
    } else {
        console.log(`Ola ${name}`)
    }   
}
greeting2("Geraldo");


//dado opcional ? checking sem else
//void fica a criterio do programador, mais gerlmante when não return nada é tipado com void
function greeting3(name: string, greet?: string): void{
    if(greet){
        console.log(`Olá ${greet} ${name}`)
    return;
    } 
    console.log(`Ola ${name}`)
}
greeting3("Costa");

// interfaces
//padroniza estruturas
interface MathFunctionParams {
    n1: number;
    n2: number
}

function sumNum(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

console.log(sumNum({ n1: 1, n2: 2}))

function mul(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

const multNums: MathFunctionParams = {
    n1: 5,
    n2: 2
}
console.log(mul(multNums))


//narrowing
//checagem de tipos para executar algo conscientemente
function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`o numero é ${info}`)
        return;
    }
    console.log("nao foi passado um numero")
}

doSomething(1)
doSomething(true)

// generics

//arrays de itens numeros, strings, tipo de dados não importa,

function showArrays<T>(arr: T[]) {
    arr.forEach((item)=> {
        console.log(`ITEM ${item}`)
    })
}

const a1 = [1,2,3];
const a2 = ["a","b","c"];

showArrays(a1)
showArrays(a2)


//classes
class User {
    name
    role
    isApproved

    constructor(name: string, role:string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUsername(){
        console.log(`O nome do usuario é ${this.name}`)
    }

    showUserRole(canShow: boolean){
        if(canShow){
            console.log(`O nome do usuario é ${this.role}`)
            return
        }
      console.log("informação restrita")
    }
}

const zeca = new User("zero","admin",true);
console.log(zeca)

zeca.showUsername();

zeca.showUserRole(false)


// interfaces em classes

interface Iveiculo {
    brand: string
    showBrand(): void
}

class Car implements Iveiculo {
    brand
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand} `)
    }
}

const fusca = new Car("WV", 4);
console.log(fusca)


//herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4)

a4.showBrand()

//constructor decorators
//validação de dados
//complexo

//primeiramente descomentar "experimentalDecorators": true,     
//abaixo examplo de classe simples apenas com nome
class Person2 {
    name

    constructor(name: string){
        this.name = name
    }
}

const sam2 = new Person2("Sam")
console.log(sam2)


//
function BaseParameters(){
   return function <T extends {new (...args: any[]):{}}>(constructor: T){
    return class extends constructor{
        id = Math.random();
        createdAt = new Date();
    };
   };
    }

//@ = constructor decorators
@BaseParameters()
class Person {
    name

    constructor(name: string){
        this.name = name
    }
}

const sam = new Person("Sam")
console.log(sam)
