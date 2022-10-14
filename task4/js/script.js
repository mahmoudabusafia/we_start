let a = document.querySelector('a');
let span = document.querySelector('span');


a.onclick = (e) => e.preventDefault();
span.onclick = () => window.open('https://google.ps', '_blank');
