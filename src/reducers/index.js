/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import { combineReducers } from 'redux'
import grid from './Game.reducer'
import size from './Switch.reducer'

const App = combineReducers({
    grid,
    size
});

export default App;