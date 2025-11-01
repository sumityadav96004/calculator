let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        let buttonText = b.target.innerText;

        if (buttonText === '=') {
            try {
                string = eval(string).toString();
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
            }
        } else if (buttonText === 'AC') {
            string = '';
            inputBox.value = string;
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
            inputBox.value = string;
        } else if (b.target.id === 'plusminus') {  // because plusminus button has id='plusminus'
            try {
                string = (-eval(string)).toString();
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
            }
        } else {
            string += buttonText;
            inputBox.value = string;
        }
    });
});
