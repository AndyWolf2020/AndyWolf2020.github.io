const gyoza = document.querySelector('#gyoza');
gyoza.addEventListener('click', displaySum);
gyoza.addEventListener('click', showGyoza);

const katsu = document.querySelector('#katsu');
katsu.addEventListener('click', displaySum);
katsu.addEventListener('click', showKatsu);

const ramen = document.querySelector('#ramen');
ramen.addEventListener('click', displaySum);
ramen.addEventListener('click', showRamen);

const ricebowl1 = document.querySelector('#ricebowl1');
ricebowl1.addEventListener('click', displaySum);
ricebowl1.addEventListener('click', showRicebowl1);

const ricebowl2 = document.querySelector('#ricebowl2');
ricebowl2.addEventListener('click', displaySum);
ricebowl2.addEventListener('click', showRicebowl2);

const hibachi = document.querySelector('#hibachi');
hibachi.addEventListener('click', displaySum);
hibachi.addEventListener('click', showHibachi);

const butcher = document.querySelector('#butcher');
butcher.addEventListener('click', displaySum);
butcher.addEventListener('click', showButcher);

const cheese = document.querySelector('#cheese');
cheese.addEventListener('click', displaySum);
cheese.addEventListener('click', showCheese);

const philly = document.querySelector('#philly');
philly.addEventListener('click', displaySum);
philly.addEventListener('click', showPhilly);

function addAmount(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function displaySum(event) {
    const num1 = document.querySelector("#" + event.currentTarget.textContent + "Stmt");
    const num2 = document.querySelector("#total");
    const result = addAmount(parseFloat(num1), parseFloat(num2));
    console.log(parseFloat(num1));
    console.log(parseFloat(num2));

    let resultDiv = document.querySelector("#total");
    resultDiv.textContent = "Total: " + result;
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

let mealplan = document.querySelector("#mealplan");

function showGyoza() {
    let para = document.createElement("p");
    let node = document.createTextNode("Gyoza: $8.00");
    para.appendChild(node);
    mealplan.appendChild(para);

    let removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    mealplan.appendChild(removeButton);

    let addButton = document.createElement("button");
    addButton.textContent = 'Add another';
    mealplan.appendChild(addButton);

    let child = document.querySelector("#plan");
    mealplan.insertAfter(para, child);
    mealplan.insertAfter(removeButton, child);
    mealplan.insertAfter(addButton, child);
}

function showKatsu() {
    let para = document.createElement("p");
    let node = document.createTextNode("Katsu: $13.45");
    para.appendChild(node);
    mealplan.appendChild(para);

    let removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    mealplan.appendChild(removeButton);

    let addButton = document.createElement("button");
    addButton.textContent = 'Add another';
    mealplan.appendChild(addButton);

    let child = document.querySelector("#plan");
    mealplan.insertAfter(para, child);
    mealplan.insertAfter(removeButton, child);
    mealplan.insertAfter(addButton, child);
}

function showRamen() {
    let para = document.createElement("p");
    let node = document.createTextNode("Ramen: $10.95");
    para.appendChild(node);
    mealplan.appendChild(para);

    let removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    mealplan.appendChild(removeButton);

    let addButton = document.createElement("button");
    addButton.textContent = 'Add another';
    mealplan.appendChild(addButton);

    let child = document.querySelector("#plan");
    mealplan.insertAfter(para, child);
    mealplan.insertAfter(removeButton, child);
    mealplan.insertAfter(addButton, child);
}

function showRicebowl1() {
    let para = document.createElement("p");
    let node = document.createTextNode("Rice Bowl 1: $11.95");
    para.appendChild(node);
    mealplan.appendChild(para);

    let addButton = document.createElement("button");
    removeButton.textContent = 'Add another';
    mealplan.appendChild(addButton);

    let removeButton = document.createElement("button");
    addButton.textContent = 'Remove';
    mealplan.appendChild(removeButton);

    let child = document.querySelector("#plan");
    mealplan.insertAfter(para, child);
    mealplan.insertAfter(removeButton, child);
    mealplan.insertAfter(addButton, child);
}

function showRicebowl2() {
    let para = document.createElement("p");
    let node = document.createTextNode("Rice Bowl 2: $7.95");
    para.appendChild(node);
    mealplan.appendChild(para);

    let removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    mealplan.appendChild(removeButton);

    let addButton = document.createElement("button");
    addButton.textContent = 'Add another';
    mealplan.appendChild(addButton);

    let child = document.querySelector("#plan");
    mealplan.insertAfter(para, child);
    mealplan.insertAfter(removeButton, child);
    mealplan.insertAfter(addButton, child);
}

function showHibachi() {
    let para = document.createElement("p");
    let node = document.createTextNode("Hibachi: $10.75");
    para.appendChild(node);
    mealplan.appendChild(para);

    let removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    mealplan.appendChild(removeButton);

    let addButton = document.createElement("button");
    addButton.textContent = 'Add another';
    mealplan.appendChild(addButton);

    let child = document.querySelector("#plan");
    mealplan.insertAfter(para, child);
    mealplan.insertAfter(removeButton, child);
    mealplan.insertAfter(addButton, child);
}

function showButcher() {
    let para = document.createElement("p");
    let node = document.createTextNode("Da Butcher Slice: $6.50");
    para.appendChild(node);
    mealplan.appendChild(para);

    let removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    mealplan.appendChild(removeButton);

    let addButton = document.createElement("button");
    addButton.textContent = 'Add another';
    mealplan.appendChild(addButton);

    let child = document.querySelector("#plan");
    mealplan.insertAfter(para, child);
    mealplan.insertAfter(removeButton, child);
    mealplan.insertAfter(addButton, child);
}

function showCheese() {
    let para = document.createElement("p");
    let node = document.createTextNode("Cheese Slice: $4.00");
    para.appendChild(node);
    mealplan.appendChild(para);

    let removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    mealplan.appendChild(removeButton);

    let addButton = document.createElement("button");
    addButton.textContent = 'Add another';
    mealplan.appendChild(addButton);

    let child = document.querySelector("#plan");
    mealplan.insertAfter(para, child);
    mealplan.insertAfter(removeButton, child);
    mealplan.insertAfter(addButton, child);
}

function showPhilly() {
    let para = document.createElement("p");
    let node = document.createTextNode("Philly Cheesesteak: $11.50");
    para.appendChild(node);
    mealplan.appendChild(para);

    let removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    mealplan.appendChild(removeButton);

    let addButton = document.createElement("button");
    addButton.textContent = 'Add another';
    mealplan.appendChild(addButton);

    let child = document.querySelector("#plan");
    mealplan.insertAfter(para, child);
    mealplan.insertAfter(removeButton, child);
    mealplan.insertAfter(addButton, child);
}