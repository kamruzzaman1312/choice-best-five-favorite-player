document.getElementById('total-player-cost-button').addEventListener('click', function(){
    totalPlayerCost();
})

document.getElementById('total-cost-calculate-button').addEventListener('click', function(){
    const playerCost = totalPlayerCost();

    const managerCost = getValueFromInputField('manager-cost');

    const coachCost = getValueFromInputField('coach-cost');

    const toalCost = playerCost + managerCost + coachCost;

    const totalCostElement = document.getElementById('total-cost-element');
    totalCostElement.innerText = toalCost;


 })