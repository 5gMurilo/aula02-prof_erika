async function getDataAndSetName() {
    
    const prompNumber = window.prompt('selecione um numero de 1 - 10')

    if (prompNumber > 10 && prompNumber < 1) {
        window.alert('Não trolla e seleciona direito');
    }
    const data = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'GET'
    })

    const response = await data.json();

    // var paragraph = document.getElementById("playerName")
    para.textContent = `NOME DO JOGADOR: ${response[prompNumber-1].name}`
}

// console.log(response)

// function changeOnClick() {
//     var paragraph = document.getElementById("playerName")
//     paragraph.innerText = "teste"
// }

// const button = document.getElementById("button")
// button.onclick = getDataAndSetName()

let para;

function whenPageLoad() { 
    para = document.getElementById("playerName");

    para.addEventListener('click', getDataAndSetName);
}

// function changeName() {
//     let name = window.prompt('Insira o novo nome');

//     para.textContent = `Jogador 1: ${name}`
// }

whenPageLoad()
