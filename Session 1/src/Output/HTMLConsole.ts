import {IOutputProvider} from "./IOutputProvider";

export class HTMLConsole implements IOutputProvider {
    private OutputDiv:HTMLDivElement;

    public constructor(output:HTMLDivElement) {
        this.OutputDiv = output;
    }

    public WriteLine(line:string) {
        this.OutputDiv.innerText += line + "\n";
    }

    public Clear() {
        this.OutputDiv.innerText = "";
    }
}