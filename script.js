
let button = document.getElementById('btn');

button.addEventListener("click", function () {
    let weight = document.getElementById("kg").value;
    let height = document.getElementById("cm").value;

    if (height == "" || weight == "") {
        alert("Please fill out the input fields!");
        return;
    }

    let BMI;
    BMI = [weight / (height * height)] * 10000;
    BMI = BMI.toFixed(1);
    console.log(BMI);

    let status = "";

    if (BMI < 18.5) {
        status = "Underweight";
    }
    else if (BMI >= 18.5 && BMI < 25) {
        status = "Normal Weight";
    }
    else if (BMI >= 25 && BMI < 30) {
        status = "Overweight";
    }
    else if(BMI >= 30) {
        status = "Obesity";
    }
    console.log(status);
    document.getElementById("result").innerHTML = `Your BMI is ` + BMI;
    document.getElementById("yourBMI").innerHTML = `Which means you are <span>${status}</span>`

});