export class Computer {

    get ComputerType() {
        return this.computerType;
    }

    set ComputerType(value) {
        this.computerType = value;
    }

    get CP() {
        return this.centralProcessor;
    }

    set CP(value) {
        this.centralProcessor = value;
    }

    get GP() {
        return this.graphicalProcessor;
    }

    set GP(value) {
        this.graphicalProcessor = value;
    }

    get HardDrive() {
        return this.hardDrive;
    }

    set HardDrive(value) {
        this.hardDrive = value;
    }

    get Motherboard() {
        return this.motherboard;
    }

    set Motherboard(value) {
        this.motherboard = value;
    }

    get Keyboard() {
        return this.keyboard;
    }

    set Keyboard(value) {
        this.keyboard = value;
    }

    get Mouse() {
        return this.mouse;
    }

    set Mouse(value) {
        this.mouse = value;
    }

    get Scalability() {
        return this.scalability
    }

    set Scalability(value) {
        this.scalability = value;
    }

    toString() {

        return `${this.ComputerType} ${this.CP} ${this.GP} ${this.HardDrive} ${this.Motherboard} ${this.Keyboard} ${this.Mouse} ${this.Scalability}`;
    }

    static NamesOfAllProps() {
        return ["Процессор", 
                "Видеокарта", 
                "Жесткий диск", 
                "Материнская плата",
                "Клавиатура", 
                "Мышь",
                "Масштабирование" ];
    }
}

export class Ultrabook extends Computer {

    constructor() {

        super();
    }

    get Name() {
        return this.name;
    }

    set Name(value) {
        this.name = value;
    }

    get TouchScreen() {
        return this.touchScreen;
    }
    
    set TouchScreen(value) {
        this.touchScreen = value;
    }

    toString() {

        return `${super.toString()} ${this.Name} ${this.TouchScreen}`;
    }

    static NamesOfAllProps() {
         
        let names = ["Название ультрабука", "Наличие сенсорного экрана"];
        names.unshift(...super.NamesOfAllProps());
        return names;
    }
}

export class CalcServer extends Computer {

    constructor() {

        super();
    }

    get CoolingType() {
        return _CoolingType;
    }
    
    set CoolingType(value) {
        this.coolingType = value;
    }

    toString() {

        return `${super.toString()} ${this.CoolingType}`;
    }

    static NamesOfAllProps() {
         
        let names = ["Тип охлаждения", ""];
        names.unshift(...super.NamesOfAllProps());
        return names;
    }
}

export function CreateBtn(className, IdName, link, text) {

    let btn = document.createElement("a");
    btn.id = IdName;
    btn.text = text;
    btn.className = className;
    if (link != "") {

        btn.href = link;
    }
    return btn;
}

export async function GetAllAsync() {

    let response = await fetch("http://localhost:3000/computers");
    let computers = await response.json();
    return computers;
}

export function $(selector) {
    return document.querySelector(selector);
}

export async function GetComputerByIdAsync(id) {

    let response = await fetch(`http://localhost:3000/computers/${id}`)
    let computer = await response.json();
    return computer;
}

export function CreateP(text) {
        
    let p = document.createElement("p");
    p.innerText = text;
    return p;
}

export function CreateInput(id) {
   
   let input = document.createElement("input");
   input.type = "text";
   input.id = id;
   return input;
}

export function CreateField(p, input, additionalClass = "") {
   
   let cont = document.createElement("div");
   cont.appendChild(p);
   cont.appendChild(input);
   cont.classList.add("field");

   if (additionalClass != "")
       cont.classList.add(additionalClass);

   return cont;
}

export function CreateFields() {

    let props = [
        { rus: "Процессор", id: "CPInput" },
        { rus: "Видеокарта", id: "GPInput" },
        { rus: "Материнская плата", id: "MBInput" },
        { rus: "Жесткий диск", id: "HDInput" },
        { rus: "Клавиатура", id: "KBInput" },
        { rus: "Мышь", id: "MoInput" },
        { rus: "Масштабирование", id: "ScInput" },
        { rus: "Название ультрабука", id: "NMInput" },
        { rus: "Наличие сенсорного экрана", id: "TSInput" },
        { rus: "Тип охлаждения", id: "CPInput"},
    ];

    let container = document.createElement("div");
    
    for (let index = 0; index < props.length - 3; index++) {
        const item = props[index];
        container.appendChild(CreateField(CreateP(item.rus), CreateInput(item.id)));
    }
    container.appendChild(CreateField(CreateP(props[7].rus), CreateInput(props[7].id), "ultrabook"));
    container.appendChild(CreateField(CreateP(props[8].rus), CreateInput(props[8].id), "ultrabook"));
    container.appendChild(CreateField(CreateP(props[9].rus), CreateInput(props[9].id), "calcServer"));
    return container;
}

// берем нужные input со страницы
export const GetInputsForProps = () => {

    let blocks = document.querySelectorAll(".field");
    let inputs = [];

    for (let i = 0; i < blocks.length; i++) {
        
        let block = blocks[i];
        for (let j = 0; j < block.childNodes.length; j++) {

            if (block.style.display != "none") {

                let idstr = block.childNodes[j].id;
                
                if (idstr != undefined && 
                    idstr.includes("Input")) {

                    inputs.push(block.childNodes[j]);
                }
            }
        }
    }

    return inputs;
};

export function GetIdFromURL() {

    let url = window.location.href;
    let indexOfParam = url.indexOf(`?`);
    let params = url.slice(indexOfParam + 1);
    return params.split("=")[1];
}