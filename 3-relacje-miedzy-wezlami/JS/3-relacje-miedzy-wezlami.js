const pierwszyDiv = document.getElementById('parFirst');

console.log(pierwszyDiv);

console.log('================================= pobieram rodzica elementu pierwszyDiv ================ ');
const rodzicPierwszegoDiva = pierwszyDiv.parentElement;
console.log(rodzicPierwszegoDiva);

console.log('================== pobieram wszystkie dzzieci (nodes) elemetu pierwszyDiv ==============');
const wszystkieDzieciPierwszegoDiva = pierwszyDiv.childNodes;
console.log(wszystkieDzieciPierwszegoDiva);
console.log('====================pobieram pierwsze dziecko (o indeksie 1) z pierwszyDiv =============');
console.log(wszystkieDzieciPierwszegoDiva[1]);


console.log('================== pobieram tylko te dzieci które są LEMENTAMI HTML elementu pierwszyDiv ==============');
const dzieciElementyPierwszegoDiva = pierwszyDiv.children;
console.log(dzieciElementyPierwszegoDiva);

for(let i = 0; i < dzieciElementyPierwszegoDiva.length; i++) {
    console.log(dzieciElementyPierwszegoDiva[i]);
}

console.log('================== pobieram kolejnego brata/siostre elementu pierwszyDiv ==============');
const rodzenstwoNastepne = pierwszyDiv.nextElementSibling;
console.log(rodzenstwoNastepne);

console.log('================== pobieram poprzedniego brata/siostre elementu pierwszyDiv ==============');
const rodzenstwoPoprzednie = pierwszyDiv.previousElementSibling;
console.log(rodzenstwoPoprzednie);

console.log('====================pobieram pierwsze dziecko elementu z pierwszyDiv =============');
const pierwszeDzieckoPierwszegoDiva = pierwszyDiv.firstElementChild;
console.log(pierwszeDzieckoPierwszegoDiva);


console.log('====================pobieram ostatnie dziecko element z pierwszyDiv =============');
const ostatnieDzieckoPierwszegoDiva = pierwszyDiv.lastElementChild;
console.log(ostatnieDzieckoPierwszegoDiva);
