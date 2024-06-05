import helloWorld from './hello.js';

function component() {
  const element = document.createElement('div'); 
  element.innerHTML = helloWorld();
  return element;
}

document.body.appendChild(component());