import { $, CreateFields, GetInputsForProps, GetComputerByIdAsync, Ultrabook, CalcServer } from "../scriptForImport.js";

var curComputer, 
    inputs;

window.onload = function () {

    let url = window.location.href;
    let indexOfParam = url.indexOf(`?`);
    let params = url.slice(indexOfParam + 1);
    let id = params.split("=")[1];

    GetComputerByIdAsync(id)
    .then((comp) => {
        
        curComputer = comp;
        $("section").insertBefore(CreateFields(), $(".links"));
        $("#Save").addEventListener("click", Save_Click);

        inputs = GetInputsForProps();
        let serversInputs = document.querySelectorAll(".calcServer");
        let ultrabooksInputs = document.querySelectorAll(".ultrabook");

        switch (comp._ComputerType) {

            case "1":
                serversInputs.forEach(x => x.style.display = "none");
                ultrabooksInputs.forEach(x => x.style.display = "flex");
                inputs[7].value = comp._name;
                inputs[8].value = comp._TouchScreen;
                break;
        
            case "2":
                serversInputs.forEach(x => x.style.display = "flex");
                ultrabooksInputs.forEach(x => x.style.display = "none");
                inputs[9].value = comp._CoolingType;
                break;
        }

        inputs[0].value = comp._CP;
        inputs[1].value = comp._GP;
        inputs[2].value = comp._Motherboard;
        inputs[3].value = comp._HardDrive;
        inputs[4].value = comp._Keyboard;
        inputs[5].value = comp._Mouse;
        inputs[6].value = comp._Scalability;
    })
    .catch((e) => {
        
        console.log(e);
    });
}

function Save_Click() {
    
    let currentComputerType = curComputer._ComputerType;
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