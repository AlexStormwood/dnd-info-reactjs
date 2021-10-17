import { useReducer, useState } from 'react';
import { rollDice } from './utilities/diceRolling';

const initialState = {
  diceSize: 20,
  diceRollResult:0
};

function diceRollSettingsReducer(state, action){
  switch (action.type) {
    case "increment":
      return {
        ...state, diceSize: state.diceSize + 1
      }
    case "decrement":
      // No such thing as a dice with 0 sides. All dice must have at least 1 side.
      let newDiceSize = state.diceSize-1;
      if (newDiceSize <= 0){
        newDiceSize = 1;
      }
      return {
        ...state, diceSize: newDiceSize
      }
    default:
      throw new Error("Incorrect action type was used.");
  }
}


function DiceRollManager() {
  const [state, dispatch] = useReducer(diceRollSettingsReducer, initialState);
  const [diceRollResult, setDiceRollResult] = useState(0);

    return (
      <div className="DiceRollManager">
        <h2>Dice Roller</h2>
        <h3>{state.diceSize}-sided dice</h3>
        <button onClick={() => dispatch({type:"increment"})}>Increase dice size by 1</button>
        <button onClick={() => dispatch({type:"decrement"})}>Decrease dice size by 1</button>
        <button onClick={() => setDiceRollResult(rollDice(state.diceSize))} >Roll the dice!</button>
        
        {/* Keep the DOM clean if there's no dice roll results to display. */}
        {diceRollResult > 0 &&
          <h3>{diceRollResult}</h3>
        }
      </div>
      
    );
  }
  
  export default DiceRollManager;