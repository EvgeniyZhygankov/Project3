export class Computer {

    get ComputerType() {
        return this._ComputerType;
    }

    set ComputerType(value) {
        this._ComputerType = value;
    }

    get CP() {
        return this._CP;
    }

    set CP(value) {
        this._CP = value;
    }

    get GP() {
        return this._GP;
    }

    set GP(value) {
        this._GP = value;
    }

    get HardDrive() {
        return this._HardDrive;
    }

    set HardDrive(value) {
        this._HardDrive = value;
    }

    get Motherboard() {
        return this._Motherboard;
    }

    set Motherboard(value) {
        this._Motherboard = value;
    }

    get Keyboard() {
        return this._Keyboard;
    }

    set Keyboard(value) {
        this._Keyboard = value;
    }

    get Mouse() {
        return this._Mouse;
    }

    set Mouse(value) {
        this._Mouse = value;
    }

    get Scalability() {
        return this._Scalability
    }

    set Scalability(value) {
        this._Scalability = value;
    }

    toString() {

        return `${this.ComputerType} ${this.CP} ${this.GP} ${this.HardDrive} ${this.Motherboard} ${this.Keyboard} ${this.Mouse} ${this.Scalability}`;
    }

    NamesOfAllProps() {
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
        return this._name;
    }

    set Name(value) {
        this._name = value;
    }

    get TouchScreen() {
        return this._TouchScreen;
    }
    
    set TouchScreen(value) {
        this._TouchScreen = value;
    }

    toString() {

        return `${super.toString()} ${this.Name} ${this.TouchScreen}`;
    }

    NamesOfAllProps() {
         
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
        this._CoolingType = value;
    }

    // get () {
    //     return _
    // }
    
    // set (value) {
    //     this._ = value
    // }

    toString() {

        return `${super.toString()} ${this.CoolingType}`;
    }

    NamesOfAllProps() {
         
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

export function CreateFields() {

    // console.log(comp);
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

    function CreateP(text) {
        
         let p = document.createElement("p");
         p.innerText = text;
         return p;
    }

    function CreateInput(id) {
        
        let input = document.createElement("input");
        input.type = "text";
        input.id = id;
        return input;
    }

    function CreateField(text, inputId, additionalClass = "") {
        
        let cont = document.createElement("div");
        cont.appendChild(CreateP(text));
        cont.appendChild(CreateInput(inputId));
        cont.classList.add("field");

        if (additionalClass != "")
            cont.classList.add(additionalClass);

        return cont;
    }

    let container = document.createElement("div");
    
    for (let index = 0; index < props.length - 3; index++) {
        const item = props[index];
        container.appendChild(CreateField(item.rus, item.id));
    }
    container.appendChild(CreateField(props[7].rus, props[7].id, "ultrabook"));
    container.appendChild(CreateField(props[8].rus, props[8].id, "ultrabook"));
    container.appendChild(CreateField(props[9].rus, props[9].id, "calcServer"));
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