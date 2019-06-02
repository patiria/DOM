// const header = document.getElementsByClassName('header')[0]; lub łatwiejsza opcja nizej
const header = document.querySelector('.header');

console.log(header.innerHTML);

header.lastElementChild.innerHTML = 'Nowy tekst linku <br> tu mogę wstawić znaczniki html';

console.log('========================= classList ===========================');
console.log(header.classList);
header.classList.add('decor-header');

setTimeout(
    () => {
        header.classList.remove('decor-header');
        header.style.backgroundColor = 'yellow';
    }, 2000
)