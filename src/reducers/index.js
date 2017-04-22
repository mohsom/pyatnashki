/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import { combineReducers } from 'redux'
import grid from './Game.reducer'

const App = combineReducers({
    grid,
});

export default App;