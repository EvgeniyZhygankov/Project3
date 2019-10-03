import { $, CreateP, GetIdFromURL, GetComputerByIdAsync } from "../scriptForImport.js";

window.onload = function () {
    
    let id = GetIdFromURL();

    GetComputerByIdAsync(id)
    .then((comp) => {

        let propsP = []; // массив из <p> где в каждой будет название свойства и значение
        switch (comp.computerType) {

            case "1":
                    propsP.push(CreateP(`Тип комьютера - Ультрабук`));
                    propsP.push(CreateP(`Название - ${comp.name}`));
                    propsP.push(CreateP(`Наличие сенсорного экрана - ${comp.touchScreen}`));
                break;
        
            case "2":
                propsP.push(CreateP(`Тип комьютера - Вычислительный сервер`));
                    propsP.push(CreateP(`Тип охлаждения - ${comp.coolingType}`));
                break;
        }

        propsP.push(CreateP(`Процессор - ${comp.centralProcessor}`));
        propsP.push(CreateP(`Видеокарта - ${comp.graphicalProcessor}`));
        propsP.push(CreateP(`Материнская плата - ${comp.motherboard}`));
        propsP.push(CreateP(`Жесткий диск - ${comp.hardDrive}`));
        propsP.push(CreateP(`Клавиатура - ${comp.keyboard}`));
        propsP.push(CreateP(`Мышь - ${comp.mouse}`));
        propsP.push(CreateP(`Масштабирование - ${comp.scalability}`));

        propsP.forEach((elem) => {

            $("section").insertBefore(elem, $(".links"));
        });
    })
    .catch((e) => { alert(e); });
}