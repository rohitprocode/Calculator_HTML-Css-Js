let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            if(e.target.innerHTML == '='){
// sourcery skip: no-eval
                string = eval(string);
                input.value = string;
            }
            else if(e.target.innerHTML == 'AC'){
                string = "";
                input.value = string;
            }
            else if(e.target.innerHTML == 'DEL'){
                
                input.value = string;
            }
            else{
                string += e.target.innerHTML;
                input.value = string;
            }
    })
} )