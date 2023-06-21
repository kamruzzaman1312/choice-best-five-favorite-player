function playerSelection(playerId){
    const playerNameElement = document.getElementById(playerId);
    const playerName = playerNameElement.innerText;

    const createLi = document.createElement('li');
    createLi.innerText = playerName;

    const selectedNameContainer = document.getElementById('selected-name-container')
    selectedNameContainer.appendChild(createLi);

}

function disableButton(buttonId){
    const buttonElement = document.getElementById(buttonId);
    buttonElement.disabled = true;
    buttonElement.style.backgroundColor = '#F5F5DC';
    
}
