class Computer {

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

    get HDSize() {
        return this._HDSize;
    }

    set HDSize(value) {
        this._HDSize = value;
    }

    get HDProducer() {
        return this._HDProducer;
    }

    set HDProducer(value) {
        this._HDProducer = value;
    }

    get Keyboard() {
        return this._Keyboard;
    }

    set Keyboard(value) {
        this._Keyboard = value;
    }

    get KeyboardProducer() {
        return this._KeyboardProducer;
    }

    set KeyboardProducer(value) {
        this._KeyboardProducer = value;
    }

    get Scalability() {
        return this._Scelability
    }

    set Scalability(value) {
        this._Scelability = value;
    }

    toString() {
        return this.CP + " "  + this.GP + " "  + this.HDSize + " "  + this.HDProducer + " "  + this.Keyboard + " "  + this.KeyboardProducer;
    }
}

class Ultrabook extends Computer {

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get () {
        return
    }
    
    set (value) {
        this._ = value
    }
}

class CalcServer extends Computer {

    get () {
        return
    }
    
    set (value) {
        this._ = value
    }

    get () {
        return
    }
    
    set (value) {
        this._ = value
    }
}

function TH(innerString) {
    
    let node = document.createElement("th");
    node.innerText = innerString;
    return node;
}

function TRWithData(arrayStrings) {

    let tr = document.createElement("tr");
    for (let i = 0; i < arrayStrings.length; i++) {
        
        tr.appendChild(TH(arrayStrings[i]))
    }

    return tr;
}

window.onload = function() {
    let mainSection = document.querySelector("section");
    let table = document.createElement("table");
    let tHeadRow = document.createElement("tr");

    let ultrabook = new Ultrabook();
    ultrabook.name = "Samsung";
    ultrabook.GP = "Intel";

    let computers = [];
    // computers.push(ultrabook);

    let names = ["Процессор","Видеокарта","Размер жесткого диска","Производитель жесткого диска","Название клавиатуры","Производитель клавиатуры", "Действия"];
    for (let i = 0; i < names.length; i++) {

        tHeadRow.appendChild(TH(names[i]));
    }
    table.appendChild(tHeadRow);


    for (let i = 0; i < computers.length; i++) { 
        
        table.appendChild(this.TRWithData(computers[i].toString().split(" ")))
    }


    mainSection.appendChild(table);
};