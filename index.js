const button = document.createElement('button');
button.setAttribute('class', 'inaccessible-button');  

const wrapper = document.getElementsByClassName("inaccessible-form")[0];
wrapper.appendChild(button);