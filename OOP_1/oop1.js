"use strict"
/* --------------------------------------------------------------
    OOP-1: OBJECT
-------------------------------------------------------------- */

const exampleObject = {

    propertyName: 'value',
    propertyArray: [],
    propertyObject: {},

    methodName: function () {
        return 'this is a method'
    },

    methodAlternative () {
        return 'method-2'
    },
}

// console.log(exampleObject)
// console.log(exampleObject.propertyName)
// console.log(exampleObject.methodName())

/* --------------------------------------------------------------- *

const Car = {
    brand : 'Ford',
    model : 'Mustang',
    year : 1967,
    isAutoGear : true,
    colors : [ 'red', 'white'],
    details : {
        color1 : 'red',
        color2 : 'white',
        engineSize : 5000
    },
    startEngine : function(param = '1') {
        console.log(param)
        return 'Engine started.'
    }
}

// console.log(Car)
// console.log(Car.brand)
// console.log(Car.colors)
// console.log(Car.colors[1])
// console.log(Car.details)
// console.log(Car.details.engineSize)
// console.log(Car.startEngine())
// console.log(Car.startEngine(2))

console.log(Car ['brand'])
console.log(Car ['colors'][0])
console.log(Car ['details']['engineSize'])
console.log(Car ['startEngine']())
/* --------------------------------------------------------------- *
//? THIS KEYWORD

const Car = {
    brand : 'Ford',
    model : 'Mustang',
    year : 1967,
    isAutoGear : true,
    colors : [ 'red', 'white'],
    details : {
        color1 : 'red',
        color2 : 'white',
        engineSize : 5000
    },
    startEngine : function(param = '1') {
        console.log(param)
        return 'Engine started.'
    },

    getDetails : function() {
        console.log ( this )
        // return this.details
        // return this.startEngine()
        // return this.brand + ' ' + this.model + ' ' + this.year
        return this.brand + ' ' + this.model + ' ' + this.startEngine()
    },

    arrowMethod : () => {
       console.log(this)
    }
}

console.log(Car.getDetails())
console.log(Car.arrowMethod())

/* --------------------------------------------------------------- *

//* ARRAY DESTRUCTURİNG:

const testArray = ['value0', 'value1','value2','value3','value4']

// const test0 = testArray[0]
// const test1 = testArray[1]
// const test2 = testArray[2]
// // const test3 = testArray[3]
// // const test4 = testArray[4]

// // console.log(test0)

// // const testPart = testArray.slice(3,5)
// const testPart = testArray.slice(3)

// console.log(test0, test1, test2, testPart)

// const [var0, var1, ...varPart] = testArray
// console.log(var0, var1, varPart)

//! REST OPERATOR:

const [var0, var1, ...varPart] = testArray
console.log(var0, var1, varPart)

//! SPREAD OPERATOR:

const newArr = [...testArray, 'value5', 'value6']
console.log(newArr)
/* --------------------------------------------------------------- *

//* OBJECT DESTRUCTURİNG:

const Car = {
    brand : 'Ford',
    model : 'Mustang',
    year : 1967,
    isAutoGear : true,
    colors : [ 'red', 'white'],
    details : {
        color1 : 'red',
        color2 : 'white',
        engineSize : 5000
    },
    startEngine : function(param = '1') {
        console.log(param)
        return 'Engine started.'
    }
}

//REST Operator (KEY isimleri önemli!)
// const { brand, year, model, ...others } = Car
// console.log(brand, year, model, others)

// İsim değiştirme:
// const { brand, year, model: newName, ...others } = Car
// console.log(brand, year, newName, others)

// SPREAD Operator:
// const newObj = { ...Car, newKey: 'newValue'}
// console.log(newObj)

// giden gelen data her zaman 'string' olur.
// bir objeyi dışarı aktarmanın en basit yolu onu 'json' a dönüştürmektir.

/* --------------------------------------------------------------- *
//! Object to JSON:

// console.log(typeof Car, Car)
// const json = JSON.stringify(Car)
// console.log(typeof json, json)

//! // JSON to Object:

// const obj = JSON.parse(json)
// console.log(typeof obj, obj)

//! Array to JSON:

const arr = Object.keys(Car)
// console.log(arr)

// const arr = Object.values(Car)
// console.log(arr)

// const arr = Object.entries(Car) //? Object formatındaki array e dönüştürür.(enumarate Type)
console.log(typeof arr, arr)

const arrToJSON = JSON.stringify(arr)
console.log(typeof arrToJSON, arrToJSON)

const jsonToArr = JSON.parse(arrToJSON)
console.log(jsonToArr)

//! object ve array için parse kullanıyoruz.
/* --------------------------------------------------------------- */

//? CONSTRUCTOR FUNCTION:
 
// const contructorFunction = function () {
//     this.property = 'value'
// }
/* --------------------------------------------------------------- */

// 'NEW' Keyword:

const carConstructor = function (brand, model, year = 2000) {
    this.brand = brand
    this.model = model
    this.year = year

    this.startEngine = function () {
        // console.log(this)
        return 'Engine started.'
    }
}
//! NEW İLE OLUŞTURULAN OBJELER PASCALCASE İLE İSİMLENDİRİLİR:

const Ford = new carConstructor('Opel', 'Meriva', 2004)
console.log(Ford)

const Mercedes = new carConstructor('Mercedes', 'CLK200', 2015)
console.log(Mercedes)
console.log(Mercedes.brand)
console.log(Mercedes.startEngine())



/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
