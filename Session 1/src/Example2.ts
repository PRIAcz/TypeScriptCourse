import {IOutputProvider} from "./Output/IOutputProvider";

abstract class Animal {
    public abstract MakeSound(): string;
}

class Dog extends Animal {
    private _HiddenProperty: number = 3;

    get HiddenProperty() {
        return this._HiddenProperty * 2;
    }

    private SomeInternalDogStuff: number = 2;

    public MakeSound(): string {
        return (new Array(this.SomeInternalDogStuff + this.HiddenProperty)).join("Bark ");
    }
}

class Cat extends Animal {
    public static SomeStaticCatStuff: boolean = true;

    public MakeSound(): string {
        return (Cat.SomeStaticCatStuff) ? "Meow" : "Meow meow";
    }
}

export function Example2(output:IOutputProvider):void {
    let animals: Animal[] = [];

    // Prepare array of animals
    for(let i = 0; i < 10; i++) {
        let animal: Animal = (i % 2 == 0) ? new Dog() : new Cat();

        animals.push(animal);
    }

    let index = 0;

    for(let animal of animals) {
        if(index == 6) {
            Cat.SomeStaticCatStuff = false;
        }

        let sound = animal.MakeSound(); // Type deduction

        output.WriteLine(sound);

        index++;
    }
}