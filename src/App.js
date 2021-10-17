import './App.css';
import { Link, Route } from "react-router-dom";
import DiceRollManager from './components/diceRoll';
import ClassInfo from './components/classInfo';
import HomePage from './components/homepage';
import DungeonMasterManager from './components/dungeonMaster';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <h1>Dungeons & Dragons</h1>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/diceroll">Dice Roller</Link>
          </li>
          <li>
            <Link to="/classinfo">Character Classes</Link>
          </li>
          <li>
            <Link to="/dungeonmaster">DM Planning Area</Link>
          </li>
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Route exact path="/"><HomePage /> </Route>
      <Route path="/diceroll"><DiceRollManager /> </Route>
      <Route path="/classinfo"><ClassInfo /> </Route>
      <ProtectedRoute component={DungeonMasterManager} path="/dungeonmaster" />
      {/* <Route path="/dungeonmaster"><DungeonMasterManager isDungeonMaster="false" /></Route> */}
    </div>
  );
}

export default App;
