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
