//poberam element parFirst za pomoca getElementById
const parFirst = document.getElementById('parFirst');
console.log(parFirst);

//pobieram elementy z klasy .superlink za pomoca getElementsByClassName
const superlinki = document.getElementsByClassName('super link');
console.log(superlinki);

//spread (...)operator tworzy tablicę z HTMLCollection
[...superlinki].forEach((element, index) => {
    console.log(element);
})

//pobieram elementy (paragrafy) po nazwie tagu za pomocą getElementsByTagName
const p = document.getElementsByTagName('p');
console.log(p);

//pobieram wszysktie linki o klasie .link za pomocą querySelectorAll
const linki = document.querySelectorAll('.link');
console.log(linki);

linki.forEach((element, index) => {
    console.log(element);
})

console.log(`==========================================`);
//pobieram pierwszy znaleziony link o klasie .link za pomoca querySelector
const pierwszyLink = document.querySelector('.link');
console.log(pierwszyLink);


/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * jesli metoda zwraca HTMLCollection nalezy uzyc spread operator aby uzyc forEach
 * jesli metoda wraca NodeList spread operator nie jest potrzebny, forEach zadziala bez niego
 * * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
 */