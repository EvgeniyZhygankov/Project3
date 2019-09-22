import { Ultrabook, CalcServer, CreateBtn } from "./scriptForImport.js";

function CreateTd(innerString) {
    
    let node = document.createElement("td");
    node.innerText = innerString;
    return node;
}

function CreateTr(arrayStrings, compId) {

    let tr = document.createElement("tr");
    for (let i = 0; i < arrayStrings.length; i++) {
        
        tr.appendChild(CreateTd(arrayStrings[i]))
    }

    let tdActions = document.createElement("td");
    tdActions.appendChild(CreateBtn("btn", `Del${compId}`, "", "Удалить"));
    tdActions.appendChild(CreateBtn("btn", `Edit${compId}`, "#", "Редактировать"));
    tdActions.appendChild(CreateBtn("btn", `Details${compId}`, "#", "Подробно"));

    tr.appendChild(tdActions);

    return tr;
}

window.onload = function() {

    let mainSection = document.querySelector("section");
    let table = document.createElement("table");
    let tHeadRow = document.createElement("tr");

    let ultrabook = new Ultrabook();
    ultrabook.Name = "Samsung";
    ultrabook.CP = "Intel";

    let computers = [];
    computers.push(ultrabook);
    computers.push(new CalcServer("text"));
    
    for (const key in ultrabook) {
        console.log(key);
    }

    console.log(ultrabook.NamesOfAllProps())

    let columns = [ "Процессор", 
                    "Видеокарта", 
                    "Жесткий диск", 
                    "Материнская плата",
                    "Клавиатура", 
                    "Мышь",
                    "Масштабирование", 
                    "Действия"];
    
    for (let i = 0; i < columns.length; i++) {

        tHeadRow.appendChild(CreateTd(columns[i]));
    }
    table.appendChild(tHeadRow);


    for (let i = 0; i < computers.length; i++) { 
        
        table.appendChild(CreateTr(computers[i].toString().split(" "), i));
    }


    mainSection.appendChild(table);
};