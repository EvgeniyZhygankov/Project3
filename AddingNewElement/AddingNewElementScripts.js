import { Ultrabook, CalcServer, CreateBtn } from "../scriptForImport.js";

const computerTypes = document.querySelector(".computerTypes");

const serversInputs = document.querySelectorAll(".calcServer");
const ultrabooksInputs = document.querySelectorAll(".ultrabook");

var newComp;
var currentComputerType;

// берем нужные input со страницы
const inputsNames = () => {

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



// const CPInput = document.querySelector("#CPInput");
// const GPInput = document.querySelector("#GPInput");
// const MBInput = document.querySelector("#MBInput");
// const HDInput = document.querySelector("#HDInput");
// const KBInput = document.querySelector("#KBInput");
// const MoInput = document.querySelector("#MoInput");
// const ScInput = document.querySelector("#ScInput");

// const NMInput = document.querySelector("#NMInput");
// const TSInput = document.querySelector("#TSInput");

// const CoInput = document.querySelector("#CoInput");



window.onload = function() {
    
    computerTypes.addEventListener("change", ComputerTypes_OnChange);
    document.querySelector("#Save").addEventListener("click", Save_Click);
    serversInputs.forEach(x => x.style.display = "none");

    // let main = document.createElement("div");
    // main.className = "main";

    // let header = document.createElement("header");
    // let h1 = document.createElement("h1");
    // h1.innerText = "Создание нового компьютера";

    // header.appendChild(h1);

    // main.appendChild(header);

    // let section = document.createElement("section");



    // let links = document.createElement("div");
    // links.className = "links";

    // links.appendChild(CreateBtn("btn", "", "", "Сохранить"));
    // links.appendChild(CreateBtn("btn", "", "/Project3/index.html", "Вернуться на главную страницу"));

    // main.appendChild(links);
    // document.body.appendChild(main);
}

function ComputerTypes_OnChange() {

    switch(this.options[this.selectedIndex].value) {    
        
        case "1": 
            serversInputs.forEach(x => x.style.display = "none");
            ultrabooksInputs.forEach(x => x.style.display = "flex");
            break;

        case "2":
            ultrabooksInputs.forEach(x => x.style.display = "none");
            serversInputs.forEach(x => x.style.display = "flex");
            break;
    }
}

function Save_Click() {

    let propNames = inputsNames();
    currentComputerType = computerTypes.options[computerTypes.selectedIndex].value;
    if (true) {

        switch(currentComputerType) {    
        
            case "1": 
                newComp = new Ultrabook();

                newComp.Name = propNames[7].value;
                newComp.TouchScreen = propNames[8].value;                

                break;
    
            case "2":
                newComp = new CalcServer();

                newComp.CoolingType = propNames[7].value;
                
                break;
        }
        newComp.ComputerType = currentComputerType;
        newComp.CP = propNames[0].value;
        newComp.GP = propNames[1].value;
        newComp.Motherboard = propNames[2].value;
        newComp.HardDrive = propNames[3].value;
        newComp.Keyboard = propNames[4].value;
        newComp.Mouse = propNames[5].value;
        newComp.Scalability = propNames[6].value;

        let request = fetch("http://localhost:3000/computers", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newComp)
        })
        .then((res) => { console.log(res); });

        //  let computers = GET();
        //  console.log(computers[0].id);
    }
}