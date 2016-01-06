import {IOutputProvider} from "./Output/IOutputProvider";

interface Shape {
    Scale?: number;
    Draw(): string;
}

interface Shape2D extends Shape {
    X: number;
    Y: number;
}

interface Shape3D extends Shape2D {
    Z: number;
}

class Box implements Shape2D {
    X = 2;
    Y = 5;

    public Draw() {
        return `[${this.X}, ${this.Y}]`;
    }
}

class Cube implements Shape3D {
    Scale = 2;

    X = 10;
    Y = 20;
    Z = 30;

    public Draw() {
        return `[${this.X * this.Scale}, ${this.Y * this.Scale}, ${this.Z * this.Scale}]`;
    }
}

// Array type
interface StringArray {
    [index: number]: string;
}

// Function type
interface RendererFunc {
    (shapes: Shape[], names: StringArray): void;
}

export function Example3(output:IOutputProvider):void {
    output.WriteLine("Rendering by function");

    let renderer: RendererFunc = function(shapes, names) {
        shapes.forEach((shape, index) => {
            output.WriteLine(names[index] + " " + shape.Draw());
        });
    }; // Argument, return type deduction

    let shapes: Shape[] = [new Cube(), new Box()];
    let namesOfShapes: StringArray = ["Cube", "Box"];

    renderer(shapes, namesOfShapes);

    output.WriteLine("");
    output.WriteLine("Manual rendering");

    {
        let shape: Shape2D = new Box();

        output.WriteLine(shape.Draw());
    }

    {
        let shape: Shape3D = new Cube();

        output.WriteLine(shape.Draw());
    }
}