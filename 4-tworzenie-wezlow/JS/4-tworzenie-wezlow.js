const div = document.getElementById('parFirst').children[1];
// console.log(div) - weszlismy w rodzica by w nim znalezc drugie dziecko

//tworze nowy element html
const newElement = document.createElement('p');

//tworze tresc do umieszczenia w paragrafie
const newElementText = document.createTextNode('Nowy paragraf!!!!!!');

//wstawianie textu do paragrafu (czyli do elementu newElement)
newElement.appendChild(newElementText);

//wstawiam p z trescia do pustego diva
div.appendChild(newElement);

//szybsza wersja dla powyzszego
const newElement2 = document.createElement('h2');
newElement2.textContent = 'tresc hadwojki !!!';
newElement2.setAttribute('class', 'przykladowa-klasa');
div.appendChild(newElement2);

//usuwam element newElement2 ze strony (z DOM)
//aby usunac element nalezy pobrac jego rodzica i na nim wywolac metode removeChild, czas podaje sie w milisekundach
setTimeout(
    () => {
div.removeChild(newElement2);
},
2000
)

//insertBefore - wstawianie p przed czwartym linkiem (ostatnim)
const section = document.querySelector('#sectionFirst');
const newP = document.createElement('p');
newP.textContent = 'Paragraf przed ostatnim linkiem';
section.insertBefore(newP, section.lastElementChild);
//insertBefore nalezy wywolac na rodzicu elementu przed ktorym chcemy wstawic nowy element
//elementRodzic.insertBefore(nowyElement,danyElementPrzedKtorymWstawiamy)

//usuwam z sekcji atrybut id
section.removeAttribute('id');
