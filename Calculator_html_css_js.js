let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {                             //You can write any suitable word at the place of button
    button.addEventListener('click', (e) => {       //You can write any suitable word at the place of button
        if(e.target.innerHTML == '='){

            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring( 0 , string.length -1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
})
} )

// for(let i=0; i<arr.length; i++){
//     let button = arr[i];
//     button.addEventListener('click', (e) => {
//         if(e.target.innerHTML == '='){

//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring( 0 , string.length -1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
// })
// }
