import {IOutputProvider} from "./Output/IOutputProvider";
import {HTMLConsole} from "./Output/HTMLConsole";

// Import examples functions
import {Example0} from "./Example0";
import {Example1} from "./Example1";
import {Example2} from "./Example2";
import {Example3} from "./Example3";
import {Example4} from "./Example4";

function RunExample(num:number, output:IOutputProvider) {
    switch (num) {
        case 0:
            Example0("John", output);
            break;
            
        case 1:
            Example1(output);
            break;

        case 2:
            Example2(output);
            break;

        case 3:
            Example3(output);
            break;

        case 4:
            Example4(output);
            break;

        default:
            throw new Error(`Trying to invoke non exist example with number ${num}`);
            break;
    }
}

function RegisterButtons(output:IOutputProvider):void {
    let numOfExamples:number = document.getElementsByClassName("btnExample").length;

    // Register example buttons
    for (var i:number = 0; i < numOfExamples; i++) {
        var buttonReference:HTMLInputElement = document.getElementById(`btnRunExample${i}`) as HTMLInputElement;

        if (buttonReference != null) {
            buttonReference.addEventListener("click", function (exampleNumber:number) {
                RunExample(exampleNumber, output);
            }.bind(null, i));
        }
    }

    // Register clear button
    let btnClear:HTMLInputElement = document.getElementById("btnClear") as HTMLInputElement;

    btnClear.addEventListener("click", function (output:IOutputProvider) {
        output.Clear();
    }.bind(null, output));
}

let outputElement:HTMLDivElement = document.getElementById("output") as HTMLDivElement;
let output:IOutputProvider = new HTMLConsole(outputElement);

RegisterButtons(output);