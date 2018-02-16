/////////////////--------- DUBUGGING --------------/////////////////

/*
console.log( "Hello world" );

console.log( 200 );

console.log( true );

console.log( null );

var num = 10;

console.log( num );

console.log( "string", 10.11, true, false, null, num );
*/



/////////////////--------- FUNCTION or SUBROUTINE --------------/////////////////

/*
function makeCoffee(sugar, milk) 
{
    var instructions = "Boil water,";

    instructions += " pour into cup,";

    instructions += " add coffee granules,";

    instructions += "add " + sugar + " spoons of sugar,";

    instructions += " add " + milk + "% milk.";

    return instructions;
}

console.log(makeCoffee(20, 50));
*/



/////////////////--------- OBJECTS and ARRAYS --------------/////////////////

/*
var car = {
    color : "red",
    speed : 200,
    drive : function() { 
            return "drive";
            }
};

// console.log(car);

var shoppingList = [
    "Apple",
    "Orange",
    "Pear"
];
*/

/////////////////--------- EMBEDDING OBJECTS & ARRAYS --------------/////////////////
/*
var car = {
    make: "Volvo",
    speed: 160,
    // object
    engine: {
        size: 2.1,
        make: "bmw",
        fuel: "petrol",
        // Array
        pistons: [
            // object
             {maker: "BMW"}, 
             {maker: "BMW2"} ]
    },

    // Method, because it has key name
    drive: function() { return "drive"; }
 };

var array = [
    "string", 
    100, 
    // Array
    ["embedded", 200],
    // Object
    { car: "ford"},
    // In array, we can not define a name for our function in the same way, it's give a number.
    function() { return "drive";}
];
*/



/////////////////--------- MEMBERS ACCESS --------------/////////////////
/*
var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons:[
            { maker: "BMW" },
            { maker: "BMW2" }
        ]
    },
    drive: function(){ return "drive"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "drive"; }
];

console.log( car.make );

console.log(car.engine.size);

console.log(car.drive());

console.log(car.engine.pistons);
*/

/////////////////--------- COMPUTED MEMBERS ACCESS --------------/////////////////
/*
var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons:[
            { maker: "BMW" },
            { maker: "BMW2" }
        ]
    },
    drive: function(){ return "drive"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "drive"; }
];

var a = 10;


// OBJECTS
console.log( car.make );

console.log(car.engine.size);

console.log(car.drive());

console.log(car.engine.pistons[0]);

console.log(car.engine.pistons[0].maker);


// ARRAYS
console.log(array[0]);

console.log(array[4]);

console.log(array[4]());

console.log(array[ 1 + 1 - 2 ]);

console.log(array[ 0 ]);

console.log(array[a - 5 - 2]);

console.log(array[3]);



// Another examples

console.log(car["make"]);

console.log(car["engine"]);

console.log(car["engine"] ["pistons"]);

console.log(car["engine"] ["pistons"] [1]);

console.log(car["engine"] ["pistons"] [1] ["maker"]);

console.log(car["drive"]());



// some more VAR examples

var pointer = "make"; ----- undefined

car[ pointer ]; ----- "volvo"

car ["make"] ----- "volvo"

pointer = "speed"; ---- "speed"

car[ pointer ]; ---- 160

// Concatination
car["en" + "gine"]; ---- 

car.engine;


car[ pointer ];
*/


/////////////////--------- MEMBER CREATION, ASSIGNMENT & DELETION --------------/////////////////

var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons:[
            { maker: "BMW" },
            { maker: "BMW2" }
        ]
    },
    drive: function(){ return "drive"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "drive"; }
];

console.log(car.make);

// car.make = "ford";

// car.make += "200";

// car

// car["speed"] *= 2;

// Similar to console.log(car["speed"] *= 2);
// car.speed *= 2

// car

// car.engine = {newengine : "new"};

// car

// car.drive = "drive";

// car

// Adding new preoperty into car
// car.model = "v60";

// car;




// Method
// car.stop = function() {return "stop"};

// car

// car.engine.stop = function() { return "stop engine"; };

// car




//DELETE
// delete car.color;

// car

// delete car.stop;

// car