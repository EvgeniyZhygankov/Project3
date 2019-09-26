import { CreateBtn, GETAsync } from "./scriptForImport.js";

function CreateCell(type, innerString) {
    
    let node = document.createElement(type);
    node.innerText = innerString;
    return node;
}

function CreateRow(cellType, columns) {
    
    let tr = document.createElement("tr");
    for (let i = 0; i < columns.length; i++) {
        
        tr.appendChild(CreateCell(cellType, columns[i]))
    }
    return tr;
}

function CreateContentRow(innerStrings, compId) {

    let tr = CreateRow("td", innerStrings);

    let tdActions = document.createElement("td");
    tdActions.appendChild(CreateBtn("btn", `Del${compId}`, "", "Удалить"));
    tdActions.appendChild(CreateBtn("btn", `Edit${compId}`, "#", "Редактировать"));
    tdActions.appendChild(CreateBtn("btn", `Details${compId}`, "#", "Подробно"));

    tr.appendChild(tdActions);

    return tr;
}

window.onload = function () {

    const mainSection = document.querySelector("section");
    const table = document.createElement("table");
    const columns = [ "Процессор", "Видеокарта", "Жесткий диск", "Материнская плата", "Клавиатура", "Мышь", "Масштабирование", "Действия"];

    GETAsync().then((computers) => {

        for (let i = 0; i < computers.length; i++) { 
        
            let comp = computers[i];
            let valuesString = `${comp._CP}$${comp._GP}$${comp._HardDrive}$${comp._Motherboard}$${comp._Keyboard}$${comp._Mouse}$${comp._Scalability}`;
            table.appendChild(CreateContentRow(valuesString.split("$"), i));
        }
    });

    table.appendChild(CreateRow("th", columns));
    mainSection.appendChild(table);

    let butDel = document.querySelector("#Del0");
    console.log(butDel);
    // butDel.addEventListener("click", function () {
        
    //     console.log("Del0");
    // });

    // let dels = document.querySelectorAll('a[id^="Del"]').forEach((node) => {

    //     node.addEventListener("click", function() {

    //         let id = new String(this.id).replace("Del", "");
    
    //         console.log(`${this.id}`);
    //     });
    // }) 
    // console.log(document.querySelector(`a[id^='Del']`));
};