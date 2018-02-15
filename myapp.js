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