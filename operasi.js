const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const simbol = ["+", "*", "/", "-", "="];
let output = "";

const calculate = (btnValue) => {

    display.focus();

    if(btnValue === "=" && output !== ""){
        output = eval(output);
    }
    else if(btnValue === "C"){
        output = "";
    }
    else if (btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    }
    else{
        if(output === "" && simbol.includes(btnValue)) return;
        output += btnValue;
    }

    display.innerHTML = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})