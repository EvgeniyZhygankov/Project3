import { Ultrabook, CalcServer, $, GetInputsForProps, CreateFields } from "../scriptForImport.js";

const computerTypes = $(".computerTypes");

var newComp, 
    currentComputerType, 
    serversInputs, 
    ultrabooksInputs;

window.onload = function() {
    
    $("section").insertBefore(CreateFields(), $(".links"));
    computerTypes.addEventListener("change", ComputerTypes_OnChange);
    $("#Save").addEventListener("click", Save_Click);
    serversInputs = document.querySelectorAll(".calcServer");
    ultrabooksInputs = document.querySelectorAll(".ultrabook");
    serversInputs.forEach(x => x.style.display = "none");
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

    let propNames = GetInputsForProps();
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

        fetch("http://localhost:3000/computers", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newComp)
        })
        .catch((e) => { console.log(e); });
    }
}