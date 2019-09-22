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
        return `${this.CP} ${this.GP} ${this.HardDrive} ${this.Motherboard} ${this.Keyboard} ${this.Mouse}`;
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

    NamesOfAllProps() {
         
        let names = ["Название ультрабука", "Наличие сенсорного экрана"];
        names.unshift(...super.NamesOfAllProps());
        return names;
    }
}

export class CalcServer extends Computer {

    // constructor() {
    //     super();
    // }

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
    btn.href = link;
    return btn;
}