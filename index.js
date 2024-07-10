// PRE-ENTREGA Calculadora:


const suma = () => {
    const numeroA = parseInt(prompt("Ingrese el primer numero a sumar"));
    const numeroB = parseInt(prompt("Ingrese el segundo numero a sumar"));
    if(isNaN(numeroA) || isNaN(numeroB)){
        alert("No ingresaste un numero valido")
    }else{
        alert("El resultado de la suma es: " + (numeroA + numeroB));
    }
};


const resta = () => {
    const numeroA = parseInt(prompt("Ingrese el primer numero a restar"));
    const numeroB = parseInt(prompt("Ingrese el segundo numero a restar"));
    if(isNaN(numeroA) || isNaN(numeroB)){
        alert("No ingresaste un numero valido")
    }else{
        alert("El resultado de la resta: " + (numeroA - numeroB));
    }
};


const multiplicacion = () => {
    const numeroA = parseInt(prompt("Ingrese el primer numero a multiplicar"));
    const numeroB = parseInt(prompt("Ingrese el segundo numero a multiplicar"));
    if(isNaN(numeroA) || isNaN(numeroB)){
        alert("No ingresaste un numero valido")
    }else{
        alert("El resultado de la multiplicacion: " + (numeroA * numeroB));
    }
};


const dividir = () => {
    const numeroA = parseInt(prompt("Ingrese el primer numero a dividir"));
    const numeroB = parseInt(prompt("Ingrese el segundo numero a dividir"));
    if (isNaN(numeroA) || isNaN(numeroB)) {
        alert("No ingresaste un numero");
    } else if (numeroB === 0) {
        alert("No se puede dividir por 0");
    } else {
        alert("El resultado de la division: " + (numeroA / numeroB));
    }
};




alert ("Bienvenido a nuestra Calculadora")

do{
    opciones = parseInt(prompt("Menu de opciones \n\n1. Suma \n2. Resta \n3. Multiplicacion \n4. Dividir  \n\n0. Salir "));

    switch (opciones) {

        case 0:
            alert("Usted ah Salido de la calculadora")
            break;
    
        case 1:
            suma()
            break;
    
        case 2:
            resta()
            break;
    
        case 3:
            multiplicacion()
            break;
    
        case 4:
            dividir()
            break;
    
        default:
            alert("NO ingresaste una opcion correcta, si desea salir presione 0")
            break;
    }

}while (opciones !== 0 ) {
    alert("Gracias vuelva pronto")
}
































//=========================================================================================================================================================


/* function calculadorDeCuotas(numeroUno,numeroDos,operacion){
    switch (operacion) {
    case "/":
        return numeroUno/numeroDos
    break;
}      
}

let numeroUno=Number(prompt("ingrese un numero"))
let numeroDos=12
let operacion=("/")

let resultado=calculadorDeCuotas(numeroUno,numeroDos,operacion)

alert("12 cuotas sin interes de", ${resultado});




let numero=Number(prompt("ingrese un numero"));
    
    if(numero<=10){
        alert("puedes realizar la multiplicacion")
        for (let i=1; i<=10; i++){
            let resultado=numero*i
            alert (${numero} x ${i}=${resultado})
        }
        
        
    }else{
        alert("no puedes realizar la multiplicacion")
        
        
    } */