
function rollDice(diceSize){
    // Math.floor always rounds down, so dicesize of 6 would be 0-5
    // Add 1 to guarantee that it stays within sensible range, 
    // eg. diceSize of 6 means possible results are 1-6 
    let diceTotal = Math.floor(Math.random() * diceSize) + 1;

    // Return the dice total so another function can use it
    return diceTotal;
}

export {
    rollDice
};