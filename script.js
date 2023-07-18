const BOTON = document.getElementById("calcular");
const ERROR = document.getElementById('error');
const FLUJO = document.getElementById("flu");
const INPUT = document.getElementById("peso");
const MAN = document.getElementById('man');

BOTON.addEventListener("click", () => {
    const DATO = document.getElementById("peso").value
    if (DATO > 0 && DATO !== " "){
        ERROR.style.display = "none"
        if (DATO <= 30){ 
            let flujo = calcFlujo(DATO);
            let mantenimiento = ((flujo/24) * 1.5).toFixed(2);
            FLUJO.innerHTML = "Cantidad total: " + flujo + " cc";
            MAN.innerHTML = "m+m/2: " + mantenimiento + " cc/hr";
            FLUJO.style.display = "block";
            MAN.style.display = "block";
        } else {
            let flujo = supCorp(DATO);
            let mantenimiento = ((flujo/24) * 1.5).toFixed(2);
            FLUJO.innerHTML = "Cantidad total: " + supCorp(DATO) + " cc";
            MAN.innerHTML = "m+m/2: " + mantenimiento + " cc/hr";
            FLUJO.style.display = "block";
            MAN.style.display = "block";
        }
    }else{
        ERROR.style.display = 'block';
        FLUJO.style.display = 'none';
        MAN.style.display = 'none';
    };    
});

function calcFlujo(peso){
let flujo = 0;
if (peso <= 10){
    flujo = peso*100;
} else if (peso > 10 && peso <= 20){
    flujo = (1000 + (peso - 10) * 50);
} else if (peso > 20){
    flujo = (1500 + (peso - 20) * 20);
}
    return flujo.toFixed(2);
}

function supCorp(peso){
    let flujo = ( (peso * 4) + 7) / (peso + 90)
    return flujo.toFixed(2);
}