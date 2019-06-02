const inp1 = document.getElementById('input1');
const inp2 = document.getElementById('input2');
const inputs = document.getElementsByTagName('input');
const form = document.getElementById('formularz');

const textClickCallback = (e) => {
    e.preventDefault();

const inputText1 = inp1.value;
const inputText2 = inp2.value;


    console.log(inputText1);
    console.log(inputText2);

    [...inputs].forEach(
        (el) => {
            if (el.type != "submit") {
                console.log(el.value);
            }
        })
    }
form.addEventListener('submit', textClickCallback);