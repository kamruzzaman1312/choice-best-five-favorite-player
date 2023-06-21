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

function getValueFromInputField(inputFieldId){
    const inputFieldElement = document.getElementById(inputFieldId);
    const inpurFieldStringValue = inputFieldElement.value;
    const inputFieldValue = parseFloat(inpurFieldStringValue);
    return inputFieldValue;
}

function totalPlayerCost(){
    const perPlayerCost = getValueFromInputField('per-player-cost-input-field');
    const playerCostSum = perPlayerCost * 5;
    const totalPlayerCostElement = document.getElementById('total-player-cost-element');
    totalPlayerCostElement.innerText = playerCostSum;
    return playerCostSum;
}