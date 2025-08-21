let btn = document.querySelectorAll('button');
let para = document.querySelector('p');
btn[0].addEventListener('click', () => {
    document.bgColor = 'Plum';
})
btn[1].addEventListener('click', () => {
    let web = new Worker('workforce.js')
    web.postMessage(1000);
    web.onmessage = (a) => {
        alert(a.data);
    };
})
btn[2].addEventListener('click', () => {
    let web1 = new Worker('powerforce.js')
    web1.postMessage(["Muthu", "Raju"]);
    web1.onmessage = (a) => {
        para.innerText = a.data;
    };
})