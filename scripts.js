import { CreateBtn, $, GetAllAsync } from "./scriptForImport.js";

function CreateCell(type, innerString) {
    
    let node = document.createElement(type);
    node.innerText = innerString;
    return node;
}

function CreateRow(cellType, columns) {
    
    let tr = document.createElement("tr");
    for (let i = 0; i < columns.length; i++) {
        
        tr.appendChild(CreateCell(cellType, columns[i]));
    }
    return tr;
}

function CreateContentRow(innerStrings, compId) {

    let tr = CreateRow("td", innerStrings);

    let tdActions = document.createElement("td");
    tdActions.appendChild(CreateBtn("btn", `Del${compId}`, "", "Удалить"));
    tdActions.appendChild(CreateBtn("btn", `Edit${compId}`, `./EditElement/EditElement.html?id=${compId}`, "Редактировать"));
    tdActions.appendChild(CreateBtn("btn", `Details${compId}`, "#", "Подробно"));

    tr.appendChild(tdActions);

    return tr;
}

function CreateTableWithData(table, allComputers) {

    table = document.createElement("table");
    const columns = [ "Процессор", "Видеокарта", "Жесткий диск", "Материнская плата", "Клавиатура", "Мышь", "Масштабирование", "Действия"];
    table.appendChild(CreateRow("th", columns));
    for (let i = 0; i < allComputers.length; i++) { 
        
        let comp = allComputers[i];
        let valuesString = `${comp._CP}$${comp._GP}$${comp._HardDrive}$${comp._Motherboard}$${comp._Keyboard}$${comp._Mouse}$${comp._Scalability}`;
        table.appendChild(CreateContentRow(valuesString.split("$"), comp.id));
    }
    
    return table;
}

function btnDelete_Click() {
                
    let sure = confirm("Вы уверены, что хотите удалить элемент?");

    if (sure) {
        
        let id = new String(this.id).replace("Del", "");

        fetch(`http://localhost:3000/computers/${id}`, {
            method: "Delete"
        });
    }
}

window.onload = function () {
    
    var allComputers;
    const mainSection = $("section");
    let table = document.createElement("table");

    GetAllAsync()
    .then((computers) => {

        allComputers = computers;
        table = CreateTableWithData(table, allComputers);
        mainSection.appendChild(table);
        
        document.querySelectorAll('a[id^="Del"]').forEach((node) => {

            node.addEventListener("click", btnDelete_Click);
        });
    })
    .catch((error) => {
        alert(error);
    });
};