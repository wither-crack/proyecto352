    class Calculadora{
        isBuscado(arr,buscar){
            let pos=0,enc=0
            //[2,4,6]  4
            while(pos<arr.length && enc==0){
                if (arr[pos]==buscar){
                    enc=1
                }else{
                    pos+=1
                }
            }
            if (enc == 1){
                return pos
            }else{
                return -1
            }
        }
        buscaArreglo(){
            let $input=document.getElementById("result")
            let cadena = $input.value
            let arreglo = cadena.split(";")
            console.log($input)
            console.log(cadena)
            console.log(arreglo)
            let buscado=prompt("Ingrese dato a buscar")
            let pos = this.isBuscado(arreglo,buscado)
            if (pos >= 0){
                $input.value=`[${arreglo}] - ${buscado} se encuentra en la posicion: ${pos}`
            }else{
                $input.value=`[${arreglo}] - ${buscado} no se encuentra en el arreglo`
            }
            
        }   
        isPalabras(frase){
            let cp=1
            frase = frase.trim()
            for(let pos=0;pos<frase.length;pos++){
                
                if (frase[pos]==' ' && frase[pos+1]!=' ' ){
                    cp+=1
                }
            }
            return cp
        }
        contarPalabras(){
            let $input=document.getElementById("result")
            let cadena = $input.value
            let cp = this.isPalabras(cadena)
            $input.value=`${cadena} tiene ${cp} palabras`
    
        }
        isCopiarCaracteres(frase,car){
            let copia=""
            frase = frase.trim()
            for(let pos=0;pos<frase.length;pos++){
                if (frase[pos]==car ){
                    copia = copia + frase[pos]
                }
            }
            return copia
        }
        copiarCaracteres(){
            let $input=document.getElementById("result")
            let cadena = $input.value
            let caracter = prompt("Ingrese caracter")
            let cc = this.isCopiarCaracteres(cadena,caracter)
            $input.value=`${cadena} - ${cc} `
    
        }
        isDivisor(arr,divisor){
            let divisores=[],pos2=0
            for (let pos=0;pos<arr.length;pos++){
                let num=parseInt(arr[pos])
                if (num%divisor==0){
                    divisores.push(num)
                    //divisores[pos2]=arr[pos]
                    //pos2+=1
                }

            }
            return divisores
        }
        copiarDivisor(){
            let $input=document.getElementById("result")
            let cadena = $input.value
            let arreglo = cadena.split(";")
            //console.log($input)
            //console.log(cadena)
            //console.log(arreglo)["ana","jose","dan"] jose
            let divisor=parseInt(prompt("Ingrese Divisor"))
            let divisores = this.isDivisor(arreglo,divisor)
            $input.value=`[${arreglo}] - ${divisores}`
            
            
        }
        isExponente(base,exp){
            let res = 1
            for(let i=1;i<=exp;i++){
                res*=base
            }
            return res
        }   
        isDigitos(numero,base){
            let  digitos= []
            while(numero > 0){
                digitos.push(numero%base)
                numero = parseInt(numero/base)
            }
            return digitos
        }
        base10_2(){
            let $input=document.getElementById("result")
            let numero = parseInt($input.value)
            let arreglo=this.isDigitos(numero,2)
            let base2=""
            for(let i=arreglo.length-1;i>=0;i--){
                base2=base2+arreglo[i].toString()
            }
            $input.value=`[Base10=${numero}] ==> Base2=${base2}`
            
        }
    
        base2_10(){
            let $input=document.getElementById("result")
            let numero = parseInt($input.value)
            let arreglo=this.isDigitos(numero,10)
            let base10=0,limite=arreglo.length-1
            for(let i=arreglo.length-1;i>=0;i--){
                base10= base10 + arreglo[i]*this.isExponente(2,limite)
                limite=limite-1
            }
            $input.value=`[Base2=${numero}] ==> Base2=${base10}`
        }
        quitaEspacio(cadena){
            let sinEspacio=""
            cadena = cadena.trim()
            for(let i=0;i<cadena.length;i++){
                if (cadena[i]!==' '){
                    sinEspacio+=cadena[i]
                }
            }
            return sinEspacio
        }
        palindroma(){
            let $input=document.getElementById("result")
            let cadena = $input.value // anitalavala  t  i  n  a
            //                           012345678910 11 12 13 14
            // 
            let cadenaPal=this.quitaEspacio(cadena).toLowerCase()                       
            let pi=0,pf=cadenaPal.length-1,pal=1
            while (pi <= pf && pal==1){
                if (cadenaPal[pi]==cadenaPal[pf]){
                    pi++
                    pf--
                }
                else{
                    pal=0
                }
            }
            if (pal==1){
                $input.value=`[${cadena}] Es Palindroma`
            }else{
                $input.value=`[${cadena}] No es Palindroma`
            }
        }
    
    }
    let cal = new Calculadora()
    // console.log(cal.isExponente(5,3))
    // console.log(cal.isDigitos(123,10))
    // console.log(cal.isDigitos(25,2))
    //console.log(cal.quitaEspacio(" anita  lava la tina"))
    function limpiar() {
        document.getElementById("result").value = "";
        }
        var botonLimpiar = document.querySelector(".ac");
        botonLimpiar.addEventListener("click", limpiar);

    function calcularVuelto() {
        var vuelto = parseInt(prompt("Ingrese el valor del vuelto:"));
    
        if (vuelto >= 100) {
        alert("El valor del vuelto debe ser menor a 100");
        return;
        }
    
        var billetes50 = Math.floor(vuelto / 50);
        vuelto %= 50;
    
        var billetes20 = Math.floor(vuelto / 20);
        vuelto %= 20;
    
        var billetes5 = Math.floor(vuelto / 5);
        vuelto %= 5;
    
        var billetes1 = vuelto;
    
        alert("Billetes: " + billetes50 + " de $50, " + billetes20 + " de $20, " + billetes5 + " de $5 y " + billetes1 + " de $1");
    }
    document.getElementById("convertir").addEventListener("click", function() {
        
        var numero = prompt("Ingrese el número a convertir:");
        var baseOrigen = parseInt(prompt("Ingrese la base de origen:"));
        var baseDestino = parseInt(prompt("Ingrese la base de destino:"));
    
        
        if (isNaN(numero) || isNaN(baseOrigen) || isNaN(baseDestino)) {
            alert("Ingrese valores numéricos para todas las entradas.");
            return;
        }
    
        
        var decimal = aDecimal(numero, baseOrigen);
    
        
        var resultado = desdeDecimal(decimal, baseDestino);
    
        
        alert("El resultado de la conversión es: " + resultado);
    });
    
    function aDecimal(numero, base) {
        var decimal = 0;
        var digitos = numero.toString().split('').reverse();
    
        for (var i = 0; i < digitos.length; i++) {
            decimal += parseInt(digitos[i]) * Math.pow(base, i);
        }
    
        return decimal;
    }
    
    function desdeDecimal(decimal, base) {
        var resultado = '';
        var cociente = decimal;
    
        while (cociente > 0) {
            resultado = (cociente % base) + resultado;
            cociente = Math.floor(cociente / base);
        }
    
        return resultado;
    }
    
    
var valoresLugar = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
var valoresEspeciales = ['','I','II','III','IV','V','VI','VII','VIII','IX'];

document.getElementById("romanos").addEventListener("click", function() {
    
    var numero = parseInt(prompt("Ingrese el número a convertir:"));

    
    if (isNaN(numero) || numero < 1 || numero > 99) {
        alert("Ingrese un número natural entre 1 y 99.");
        return;
    }

    
    var lugar1 = Math.floor(numero / 10);
    var lugar2 = numero % 10;

    
    var textoLugar1 = valoresLugar[lugar1];
    var textoLugar2 = valoresEspeciales[lugar2];

    
    var textoCompleto = textoLugar1 + textoLugar2;

    
    alert("El resultado de la conversión es: " + textoCompleto);
});

document.getElementById("buscar").addEventListener("click", function() {
    
    var cadena = prompt("Ingrese la cadena:");
    var subcadena = prompt("Ingrese la subcadena a buscar:");

    
    if (cadena == null || cadena == "" || subcadena == null || subcadena == "") {
        alert("Ingrese una cadena y una subcadena.");
        return;
    }

    
    var posicion = cadena.indexOf(subcadena);

    
    if (posicion >= 0) {
        alert("La subcadena '" + subcadena + "' se encontró en la posición " + posicion + " de la cadena '" + cadena + "'.");
    } else {
        alert("La subcadena '" + subcadena + "' no se encontró en la cadena '" + cadena + "'.");
    }
});




document.getElementById("encontrar-mayor").addEventListener("click", function() {
    
    var arregloTexto = prompt("Ingrese los números separados por comas:");

    
    var arreglo = arregloTexto.split(",").map(function(x) {
        return parseInt(x.trim());
    });

    
    if (arreglo.length == 0 || isNaN(arreglo[0])) {
        alert("Ingrese al menos un número.");
        return;
    }

    
    var mayor = arreglo[0];
    for (var i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    
    alert("El número mayor del arreglo [" + arreglo.join(", ") + "] es: " + mayor);
});


document.getElementById("encontrar-menor").addEventListener("click", function() {
    
    var arregloTexto = prompt("Ingrese los números separados por comas:");

    
    var arreglo = arregloTexto.split(",").map(function(x) {
        return parseInt(x.trim());
    });

    
    if (arreglo.length == 0 || isNaN(arreglo[0])) {
        alert("Ingrese al menos un número.");
        return;
    }

    
    var menor = arreglo[0];
    for (var i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < menor) {
            menor = arreglo[i];
        }
    }

    
    alert("El número menor del arreglo [" + arreglo.join(", ") + "] es: " + menor);
});


document.getElementById("encontrar-posicion").addEventListener("click", function() {
    
    var arregloTexto = prompt("Ingrese los números separados por comas:");

    
    var arreglo = arregloTexto.split(",").map(function(x) {
        return parseInt(x.trim());
    });

    
    if (arreglo.length == 0 || isNaN(arreglo[0])) {
        alert("Ingrese al menos un número.");
        return;
    }

    
    var buscadoTexto = prompt("Ingrese el valor que desea buscar:");
    var buscado = parseInt(buscadoTexto.trim());

    
    if (isNaN(buscado)) {
        alert("Ingrese un valor numérico.");
        return;
    }

    
    var posicion = -1;
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == buscado) {
            posicion = i ;
            break;
        }
    }

    
    if (posicion != -1) {
        posicion== posicion + 1
        alert("El valor " + buscado + " se encuentra en la posición " + posicion +  " del arreglo [" + arreglo.join(", ") + "].");
    } else {
        alert("El valor " + buscado + " no se encuentra en el arreglo [" + arreglo.join(", ") + "].");
    }
});


document.getElementById("eliminar-btn").addEventListener("click", function() {
    
    const arreglo = prompt("Ingrese el arreglo separado por comas (,):").split(",").map(Number);
    const elemento = Number(prompt("Ingrese el elemento a eliminar:"));

    
    const index = arreglo.indexOf(elemento);
    if (index !== -1) {
    arreglo.splice(index, 1);
    window.alert("El elemento " + elemento + " ha sido eliminado del arreglo [" + arreglo + "].");
    } else {
    window.alert("El elemento " + elemento + " no se encuentra en el arreglo [" + arreglo + "].");
    }
});


function ejercicio() {
    let arreglo = prompt("Ingrese el arreglo ordenado separado por comas:").split(",").map(Number);
    let valor = Number(prompt("Ingrese el valor a insertar:"));
    
    let posicion = 0;
    for (let i = 0; i < arreglo.length; i++) {
    if (valor >= arreglo[i]) {
        posicion = i + 1;
    } else {
        break;
    }
    }
    
    arreglo.splice(posicion, 0, valor);
    
    alert("El nuevo arreglo es: [" + arreglo.join(",") + "]");
}


document.getElementById("convertBtn").addEventListener("click", function() {
    
    let cadena = prompt("Ingrese la cadena separada por el caracter especificado:");
    let caracter = prompt("Ingrese el caracter separador:");

    
    let arreglo = cadena.split(caracter).map(Number);

    
    alert(`La cadena ${cadena} separada por ${caracter} es igual al arreglo: [${arreglo}]`);
});


    const myButton = document.getElementById("myButton");

    myButton.addEventListener("click", () => {
        const arreglo = prompt("Ingrese el arreglo separado por comas (Ejemplo: 20,30,40):").split(",").map(x => parseInt(x));
        const caracter = prompt("Ingrese el caracter de separación (Ejemplo: ;):");
        const resultado = arreglo.join(caracter);
        alert(resultado);
    });


    const countBtn = document.getElementById("countBtn");

    countBtn.addEventListener("click", function() {
    const cadena = prompt("Ingresa una frase:");
    const chars = [",", ".", ";", ":"];
    const counts = {};
    
    for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i];
        if (chars.includes(char)) {
        if (!counts[char]) {
            counts[char] = 1;
        } else {
            counts[char]++;
        }
        }
    }
    
    let result = "";
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        const count = counts[char] || 0;
        result += count + char + " ";
    }
    
    alert("En la frase '" + cadena + "' hay " + result);
    });
    


    const convertirBtn = document.getElementById('convertirBtn');

convertirBtn.addEventListener('click', () => {
    const cadena = prompt('Ingresa la cadena a convertir');
    const palabras = cadena.split(' ');
    const palabrasConvertidas = palabras.map(palabra => {
        const primeraLetra = palabra.charAt(0).toUpperCase();
        const restoPalabra = palabra.slice(1).toLowerCase();
        return primeraLetra + restoPalabra;
});
    const oracion = palabrasConvertidas.join(' ');
    alert(oracion);
});



function sumarDigitos() {
    const numero = prompt("Ingresa varios números:");
    let suma = 0;
    for (let i = 0; i < numero.length; i++) {
    suma += parseInt(numero[i]);
    }
    alert(`La suma de los dígitos es ${suma}`);
}




function convertToBinary() {
    let decimalNumber = prompt("Ingresa un número decimal:");
    let binaryNumber = "";

    while (decimalNumber > 0) {
    binaryNumber = (decimalNumber % 2) + binaryNumber;
    decimalNumber = Math.floor(decimalNumber / 2);
    }

    alert(`El número en binario es: ${binaryNumber}`);
}



function convertToBase16() {
    let decimalNumber = prompt("Ingrese un número en base 10:");
    let hexNumber = decimalNumber.toString(16).toUpperCase();
    alert(`El número ${decimalNumber} en base 16 es: ${hexNumber}`);
}

function convertToOctal() {
    let decimal = prompt("Ingrese el número decimal que desea convertir: ");
    let octal = Number(decimal).toString(8);
    alert(decimal + " en octal es " + octal);
}


function convertirBinarioADecimal() {
    let numeroBinario = prompt("Ingrese un número binario: ");
    let numeroDecimal = 0;

    for (let i = 0; i < numeroBinario.length; i++) {
    let digito = parseInt(numeroBinario.charAt(i));
    let posicion = numeroBinario.length - 1 - i;
    numeroDecimal += digito * Math.pow(2, posicion);
    }

    alert(`El número decimal es: ${numeroDecimal}`);
}


function convertir16() {
    let numBinario = prompt("Ingrese un número binario:");
    let numDecimal = parseInt(numBinario, 2);
    let numHexadecimal = numDecimal.toString(16);
    alert("El número binario " + numBinario + " es equivalente al número hexadecimal " + numHexadecimal);
}

function convertir8() {
    let numBinario = prompt("Ingrese un número binario:");
    let numDecimal = parseInt(numBinario, 2);
    let numOctal = numDecimal.toString(8);
    alert("El número binario " + numBinario + " es equivalente al número octal " + numOctal);
}











