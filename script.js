const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");
const buttonAdd = document.querySelector(".button-add");

function addTask() {
    if(inputBox.value === '') {
        alert("O campo está vazio, você precisa escrever algo!");
    } else {
        // Cria um item na lista 
        let li = document.createElement("li");
        // Adiciona o valor do input ao li
        li.innerHTML = inputBox.value;
        // Adiciona o item li ao UL
        listContainer.appendChild(li);

        // Adicionando o icone X
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

        inputBox.value = "";

        // Salvando no Local Storage
        saveData()
    }
}

buttonAdd.addEventListener('click', addTask)

listContainer.addEventListener('click', function(e){
    // Verifica se o elemento é um LI
    if(e.target.tagName === "LI"){
        // Se for um LI - Toggle na Class Checked (Altera a IMG // Coloca uma line no texto)
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){ 
        // Remove o parentElement
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function valueDefault() {
    let itemDefault = document.createElement("li");
    itemDefault.innerHTML = 'Eu sou uma task de teste'
    listContainer.appendChild(itemDefault)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    itemDefault.appendChild(span)
    
}

// Salvando no Local Storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    console.log(localStorage.getItem("data"))
}

showTask();