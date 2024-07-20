// what is the difference between let, var, and const 💀
let a, b, c, d, e;
a = 100000;
b = 5000;
c = 2;
d = 0;
e = 0;

document.write('i wrote this with .write');

function change() {
    document.getElementById('skibidi').innerHTML = "skibidi"
}

function revert() {
    document.getElementById('skibidi').innerHTML = a + b + c
}

function bold() {
    document.getElementById('change-style').style.color = "blue";
    document.getElementById('change-style').innerHTML = "im blue now";
}

function increase() {
    d = d + 1;
    document.getElementById('times-clicked').innerHTML = d;
}

function showinput() {
    const userinput = document.getElementById('dummy-text').value;
    document.getElementById('display-input').innerHTML= userinput;
}