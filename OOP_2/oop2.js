"use strict"
/* --------------------------------------------------------------- *
                       OOP: CLASSES
------------------------------------------------------------------ *
//? Class Declaration: 
  
// Class isimleri PascalCase yapıdadır.
// class PascalNameCase { ... }

//? Class Expression:

const PascalNameCase = class {
    undefinedProperty // sadece tanımlanıp bırakılabilir.(değeri undefined)
    propertyName = 'value' // attribute, field 

    // method tanımlarken başına function yazılmaz:
    methodName() {
        return 'this is a method'
    }

    //! Aşağıdaki yöntem clas içinde geçerli değildir.
    // methodName = function() {}
}

//! INTANCE = Bir class tan türetilen objedir.
//! Intance isimleri de PascalCase yapıdadır.

const NewObj = new PascalNameCase()
console.log(NewObj)

const NewKod = new PascalNameCase()
console.log(NewKod)
console.log(NewKod.methodName())
/* ------------------------------------------------------ *
// Constructor Method:

class Car {
    isRunning = false

    constructor(brand, model, year = 2000){
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine started')
        return this.isRunning
    }

    newMethod(){
        this.runEngine()
    }
}

const Ford = new Car('Ford', 'Mustang', 1967)
// console.log(Ford)
// Ford.runEngine()
// Ford.newMethod()

// console.log(Ford.isRunning)
// Ford.runEngine()
// console.log(Ford.isRunning)

const Mercedes = new Car('Mercedes', 'CLK300', 2020)
console.log(Mercedes)
/* ----------------------------------------------------- */
//* INHERITANCE = MirasAlma / Başka bir classın tüm property/methodlarını devralma (parent-child ilişkisi kurulur)
//* SUPER = Parent Class, THIS = Child (Current) Class 

class Vehicle {
    vehicleIsActive = false

    constructor(vehicleType) {
        this.vehicleType = vehicleType
    }
}

class Car extends Vehicle {

    isRunning = false

    // constructor(brand, model, year = 2000){
    //     super('Car')
    //     this.brand = brand
    //     this.model = model
    //     this.year = year
    // }

    constructor(brand, model, year, vehicleType){
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine started')
        return this.isRunning
    }
}

// const Mercedes = new Car('Mercedes', 'CLK300', 2020)
// console.log(Mercedes)
// const Mercedes = new Car('Mercedes', 'CLK300', 2020, 'Car')
// console.log(Mercedes)

class Accessory extends Car {

    constructor(accessoryName, brand, model, year, vehicleType){
        super(brand, model, year, vehicleType)
        this.accessoryName = accessoryName
    }
}

// const BoshClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967, 'Car')
// console.log(BoshClimate)

const Mercedes = new Car('Mercedes', 'CLK300', 2020)
const BoshClimate = new Accessory('Bosh Climate', ...Object.values(Mercedes))
console.log(BoshClimate)




// Truck extends Vehicle{...}

/* ----------------------------------------------------- */
/* ----------------------------------------------------- */
/* ----------------------------------------------------- */
/* ----------------------------------------------------- */
/* ----------------------------------------------------- */