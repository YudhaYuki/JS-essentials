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
*/

/////////////////--------- ARRAY MODIFICATION --------------/////////////////
/*
var array = [ 
    "string",
    "hello",
    "world200",
    100,
    function(){ return "drive"; },

];
*/
/*
var array = [ 
    "string",
    100,
    ["embed", 200],
    { car: "ford"},
    function(){ return "drive"; },

];
*/

// In console

// array[0];

// array[0] = "new string";

// array

// array[0] += " concat";




// ADDING NEW ARRAY
// array[5] = "New string"; // This is only good if we know the next arraye key, otherwise it cost a lot of memory
// array

// anohter way, but this is not good, because array must be numerical.
// array["test"] = "test";

// array.test2 = "test2";

// ["string concat", "hello", "world200", 100, ƒ, "New string", empty × 14, 2020, test: "test", test2: "test2"]


// FINDING OUT HOW MANY ELEMENT IN THE ARRAY
// array.length


// MORE METHODS
// array.shift(); // Take off first element
// array.pop(); // Take off last element

// array.unshift("string", 20, 20.20, function(){}, {}, []); // Adding item into the beginning
// array.push(200, 300, "string"); // dding item into the end

// array.splice(2, 2); // delete items
// array.splice(1, 0, "hello", "world", 200); // Adding items
// array.splice(2, 2, "world200"); // placing in new element






/////////////////--------- CALLABLE OBJECTS --------------/////////////////
/*
function name() 
{
    var fullName = "Yudha Yuki";

    function concat(ngaran) 
    {
        return "MR." + ngaran;
    }

    return concat(fullName);
}
*/

/*
function name(fullName) 
{
    return fullName.firstName + fullName.lastName;
}

console.log(
    name( {firstName: "Yudha", lastName: "Yuki"} )
);
*/


/*
function name(fullName) 
{
    return fullName;
}

console.log(
    name( function() { return "embed"; } )
);
*/


function name(fullName) 
{
    return fullName();
}

console.log(
    name( function() { return "embed"; } )
);



// Objects inside of objects, we can have a standard object literal right here
// and methods are in fact sub-routines or callable objects nested inside of an object
/*
    var obj = 
    {
        method: function(){}
    };
*/

// The same thing for array, just it does not have a method name.
// They're just element inside of the array.
/*
    var obj = 
    [
        0 : function(){}
    ];
*/