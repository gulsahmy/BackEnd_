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
/* --------------------------------------------------------------- */
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
        return this.details
    }
}














/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
