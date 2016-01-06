import {IOutputProvider} from "./Output/IOutputProvider";

function fibonacci(n:number):number {
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

export function Example1(output:IOutputProvider):void {
    let fibBuffer : string = "";
    let fibLimit : number = 10;

    for(let i : number = 0; i < fibLimit; i++) {
        fibBuffer += fibonacci((i + 1)).toString() + " ";
    }

    output.WriteLine(`Fibonacci sequence with n = ${fibLimit} is ${fibBuffer}`);
}