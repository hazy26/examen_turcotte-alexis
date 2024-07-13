/**
 * @type {Card}
 */
class Card{
    constructor(nombre, titre){

        /**
         * @type {number}
         */
        this.nombre = nombre;
        this.titre = titre;
    }

    toHtml(){

        /**
         * @type {HTMLElement}
         */
        const li = document.createElement('li');
        li.className = 'card bg-black text-white w-52 h-52 rounded-md flex flex-col justify-center items-center gap-2';

        /**
         * @type {HTMLElement}
         */
        const p = document.createElement('p');
        p.textContent = this.nombre;
        li.appendChild(p);

        /**
         * @type {HTMLElement}
         */
        const title = document.createElement('p');
        title.textContent = this.titre;
        li.appendChild(title);

        /**
         * @type {HTMLElement}
         */
        const mobileText = document.createElement('p');
        mobileText.className = 'md:hidden'
        li.appendChild(mobileText);
        
        /**
         * @type {string}
         */
        mobileText.textContent = '200px / 200px';
        
        /**
         * @type {HTMLElement}
         */
        const desktopText = document.createElement('p');
        desktopText.className = 'hidden md:flex';
        li.appendChild(desktopText);

        /**
         * @type {string}
         */
        desktopText.textContent = '300px / 300px'

        return li;
    }
}
// Pas la bonne methode pour definir un array mais je comprend que tu comprends -0.25
/**
 * @type {Card[]}
 */
const cards = [
    new Card(
        1,
        'titre'
    ),
    new Card(
        2,
        'titre'
    ),
    new Card(
        3,
        'titre'
    ),
    new Card(
        4,
        'titre'
    ),
    new Card(
        5,
        'titre'
    ),
    new Card(
        6,
        'titre'
    ),
    new Card(
        7,
        'titre'
    ),
    new Card(
        8,
        'titre'
    ),
    new Card(
        9,
        'titre'
    ),
]

document.body.className = 'bg-cyan-100 flex items-center justify-center';

/**
 * @type {HTMLElement}
 */
const main = document.createElement('main');
main.className = 'flex flex-col gap-4 justify-center min-h-dvh items-center p-12 max-w-5xl';
document.body.appendChild(main);

/**
 * @type {HTMLElement}
 */
const button = document.createElement('button');
button.textContent = 'Switch';
button.className = 'bg-black text-white py-2 px-6 rounded-md w-full md:w-fit md:self-end';
main.appendChild(button);

/**
 * @type {HTMLElement}
 */
const button2 = document.createElement('button');
button2.textContent = 'Hide Cards';
button2.className = 'bg-black text-white py-2 px-6 rounded-md w-full md:w-fit md:self-end';
main.appendChild(button2);

/**
 * @type {HTMLElement}
 */
const cardsContainer = document.createElement('ul');
cardsContainer.className = 'grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
main.appendChild(cardsContainer);

cards.forEach(card => {
    cardsContainer.appendChild(card.toHtml());
});




/* 
        COLOR SWITCH FUNCTION
*/

button.addEventListener('click', () => {
    //indentation -0.5
    if(document.body.classList.contains('bg-cyan-100')){
        document.body.classList.add('bg-black');
        document.body.classList.remove('bg-cyan-100');
    } else{
        document.body.classList.remove('bg-black');
        document.body.classList.add('bg-cyan-100');
    }

    /**
     * @type {[HTMLElement]}
     */
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

button2.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.toggle('hidden');
    })
});