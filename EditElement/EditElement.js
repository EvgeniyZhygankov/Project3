import { $, CreateFields, GetInputsForProps, GetComputerByIdAsync, Ultrabook, CalcServer, GetIdFromURL } from "../scriptForImport.js";

var curComputer, inputs;

window.onload = function () {

    let id = GetIdFromURL();

    GetComputerByIdAsync(id)
    .then((comp) => {
        
        curComputer = comp;
        $("section").insertBefore(CreateFields(), $(".links"));
        $("#Save").addEventListener("click", Save_Click);

        inputs = GetInputsForProps();
        let serversInputs = document.querySelectorAll(".calcServer");
        let ultrabooksInputs = document.querySelectorAll(".ultrabook");

        switch (comp.computerType) {

            case "1":
                serversInputs.forEach(x => x.style.display = "none");
                ultrabooksInputs.forEach(x => x.style.display = "flex");
                inputs[7].value = comp.name;
                inputs[8].value = comp.touchScreen;
                break;
        
            case "2":
                serversInputs.forEach(x => x.style.display = "flex");
                ultrabooksInputs.forEach(x => x.style.display = "none");
                inputs[9].value = comp.coolingType;
                break;
        }

        inputs[0].value = comp.centralProcessor;
        inputs[1].value = comp.graphicalProcessor;
        inputs[2].value = comp.motherboard;
        inputs[3].value = comp.hardDrive;
        inputs[4].value = comp.keyboard;
        inputs[5].value = comp.mouse;
        inputs[6].value = comp.scalability;
    })
    .catch((e) => {
        
        console.log(e);
    });
}

function Save_Click() {
    
    let currentComputerType = curComputer.computerType;
    let id = curComputer.id;
    if (true) {

        switch(currentComputerType) {    
        
            case "1": 
                curComputer = new Ultrabook();

                curComputer.Name = inputs[7].value;
                curComputer.TouchScreen = inputs[8].value;                

                break;
    
            case "2":
                curComputer = new CalcServer();

                curComputer.CoolingType = inputs[9].value;
                
                break;
        }
        curComputer.ComputerType = currentComputerType;
        curComputer.CP = inputs[0].value;
        curComputer.GP = inputs[1].value;
        curComputer.Motherboard = inputs[2].value;
        curComputer.HardDrive = inputs[3].value;
        curComputer.Keyboard = inputs[4].value;
        curComputer.Mouse = inputs[5].value;
        curComputer.Scalability = inputs[6].value;

        fetch(`http://localhost:3000/computers/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(curComputer)
        })
        .then((res) => { console.log(res); })
        .catch((e) => { alert(e); });
    }
}