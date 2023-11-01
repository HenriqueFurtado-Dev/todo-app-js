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
        li.innerHTML = inputBox.value
        // Adiciona o item li ao UL
        listContainer.appendChild(li)

        inputBox.value = ""
    }
}

buttonAdd.addEventListener('click', addTask)