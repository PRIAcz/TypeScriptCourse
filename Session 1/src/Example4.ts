import {IOutputProvider} from "./Output/IOutputProvider";

// any declaration of lib
declare var $;

// Enum
enum Color {
    Red,
    Green,
    Blue
}

// Enum with specified starting index
/*const*/ enum States {
    Error = -1,
    Idle,
    Running
}

export function Example4(output:IOutputProvider):void {
    let red: Color = Color.Red;
    let blue: Color = 2;

    if(blue == Color.Blue) {
        output.WriteLine("Blue is blue");
    }

    output.WriteLine(`Name of second color is ${Color[1]}`);

    let errorState = States.Error;

    // No type, methods checks
    $.id("test");
}