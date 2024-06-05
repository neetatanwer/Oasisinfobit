
const calculateTemp = () => {

    const inputTemp = document.getElementById('temp').value;

    const fromSelected = document.getElementById('From');
    const valueFrom = From.options[fromSelected.selectedIndex].value;

    const toSelected = document.getElementById('To');
    const valueTo = To.options[toSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    //celsius to kelvin
    const celTokel = (cel) =>{
        let kelvin=(cel)+273.15;
        return kelvin;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    //fahrenheit to kelvin
    const fahTokel =(fah) =>{
        let kelvin= (((fah)-32) * 5 /9) + 273.15;
        return kelvin;
    }

    //kelvin to celsius
    const kelTocel = (kel) =>{
        let celsius=kel-273.15;
        return celsius;
    }

    //kelvin to fahreneiht
    const kelTofah = (kel) =>{
        let fahreneiht=((kel) - 273.15) * 9 / 5 + 32;
        return fahreneiht;
    }

    if (valueFrom == 'cel' && valueTo=='fah') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + " &#176; Fahrenheit";
    }
    else if(valueFrom == 'fah' && valueTo=='cel') {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + " &#176; Celsius";
    }
    else if(valueFrom == 'cel' && valueTo=='kel'){
        document.getElementById("result").innerHTML = celTokel(inputTemp) + " kelvin";
    }
    else if(valueFrom == 'fah' && valueTo=='kel'){
        document.getElementById("result").innerHTML = fahTokel(inputTemp) + " kelvin";
    }
    else if(valueFrom == 'kel' && valueTo=='cel') {
        document.getElementById("result").innerHTML = kelTocel(inputTemp) + " &#176; Celsius";
    }

    else{
        document.getElementById("result").innerHTML = kelTofah(inputTemp) + " &#176; Fahrenheit"; 
    }
}
