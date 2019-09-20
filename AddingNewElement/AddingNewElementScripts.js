let computerTypes = document.querySelector(".computerTypes")

function ComputerTypes_OnChange() {

    switch(computerTypes.options[computerTypes.selectedIndex].value) {
        
        case "1": 
            
            break;

        case "2":
            alert(2);
            break;

        default:
            alert("default");
            break;
    }
}