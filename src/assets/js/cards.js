class Card{
    constructor(nombre){
        this.nombre = nombre;
    }

    toHtml(){
        const li = document.createElement('li');
        li.className = 'card bg-black text-white w-52 h-52 rounded-md flex flex-col justify-center items-center gap-2';

        const p = document.createElement('p');
        p.textContent = this.nombre;
        li.appendChild(p);

        const mobileText = document.createElement('p');
        mobileText.textContent = '200px / 200px';
        mobileText.className = 'md:hidden'
        li.appendChild(mobileText);
        
        const desktopText = document.createElement('p');
        desktopText.textContent = '300px / 300px'
        desktopText.className = 'hidden md:flex';
        li.appendChild(desktopText);

        return li;
    }
}

const cards = [
    new Card(
        '1'
    ),
    new Card(
        '2'
    ),
    new Card(
        '3'
    ),
    new Card(
        '4'
    ),
    new Card(
        '5'
    ),
    new Card(
        '6'
    ),
    new Card(
        '7'
    ),
    new Card(
        '8'
    ),
    new Card(
        '9'
    ),
]

document.body.className = 'bg-cyan-100 flex items-center justify-center';

const main = document.createElement('main');
main.className = 'flex flex-col gap-4 justify-center min-h-dvh items-center p-12 max-w-5xl';
document.body.appendChild(main);

const button = document.createElement('button');
button.textContent = 'Switch';
button.className = 'bg-black text-white py-2 px-6 rounded-md w-full md:w-fit md:self-end';
main.appendChild(button);

const cardsContainer = document.createElement('ul');
cardsContainer.className = 'grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
main.appendChild(cardsContainer);

cards.forEach(card => {
    cardsContainer.appendChild(card.toHtml());
});


button.addEventListener('click', () => {

if(document.body.classList.contains('bg-cyan-100')){
    document.body.classList.add('bg-black');
    document.body.classList.remove('bg-cyan-100');
} else{
    document.body.classList.remove('bg-black');
    document.body.classList.add('bg-cyan-100');
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    if(card.classList.contains('bg-black')){

        button.classList.remove('bg-black');
        button.classList.add('bg-pink-500');

        card.classList.add('bg-pink-500');
        card.classList.remove('bg-black');
    } else{

        button.classList.add('bg-black');
        button.classList.remove('bg-pink-500');

        card.classList.add('bg-black');
        card.classList.remove('bg-pink-500');
    }
});
});