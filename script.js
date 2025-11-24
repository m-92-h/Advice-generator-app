// Create Elements HTML
const mdBreakpoint = window.matchMedia('(max-width: 768px)');
const main =document.querySelector('main');
const div = document.createElement('div');
div.classList.add('card');
div.innerHTML = `
    <h3>Advice <span id="advice"></span></h3>
    <q></q>
    <picture>
        <source media="(min-width: 500px)" srcset="/images/pattern-divider-desktop.svg">
        <img src="/images/pattern-divider-mobile.svg" alt="image">
    </picture>
    <button id="icon-dice">
        <img src="/images/icon-dice.svg">
    </button>`;
main.appendChild(div);


// Gives a new tip each time you press the button
const id = document.getElementById('advice');
const text = document.querySelector('q');

async function wrapper() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        console.log(data)
        id.innerText = `#${data.slip.id}`;
        text.innerText = `${data.slip.advice}`;
    } catch (error) {
        console.error("Error: ", error);
    }
}
wrapper();
const button = document.querySelector('button');
button.addEventListener('click',wrapper);