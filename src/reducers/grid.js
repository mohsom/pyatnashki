/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import * as actions from '../constants/ActionTypes';

const initialState = {
    grid: [],
    size: 5,
    x: 4,
    y: 4
};

function grid(state = initialState, action) {
    switch (action.type) {
        case actions.TILE_MOVE_UP: {
            let newState = state;

            if (newState.x > 0) {
                newState.grid[newState.x][newState.y] = newState.grid[newState.x - 1][newState.y];
                newState.grid[newState.x - 1][newState.y] = null;
                newState.x--;
            }

            console.log('up!');
            return {...state, newState};
        }

        case actions.TILE_MOVE_DOWN: {
            let newState = state;

            if (newState.x < newState.size - 1) {
                newState.grid[newState.x][newState.y] = newState.grid[newState.x + 1][newState.y];
                newState.grid[newState.x + 1][newState.y] = null;
                newState.x++;
            }
            console.log('down!');
            return {...state, newState};
        }

        case actions.TILE_MOVE_LEFT: {
            let newState = state;

            if (newState.y > 0) {
                newState.grid[newState.x][newState.y] = newState.grid[newState.x][newState.y - 1];
                newState.grid[newState.x][newState.y - 1] = null;
                newState.y--;
            }
            console.log('left!');
            return {...state, newState};
        }

        case actions.TILE_MOVE_RIGHT: {
            let newState = state;

            if (newState.y < newState.size - 1) {
                newState.grid[newState.x][newState.y] = newState.grid[newState.x][newState.y + 1];
                newState.grid[newState.x][newState.y + 1] = null;
                newState.y++;
            }
            console.log('right!');
            return {...state, newState};
        }

        case actions.FILL_GRID: {
            let newState = state;

            let grid = [], val = 1;
            for (let i = 0; i < state.size; i++) {
                grid[i] = new Array(state.size);
                for (let j = 0; j < state.size; j++) {
                    grid[i][j] = val;
                    val++;
                }
            }
            grid[state.size - 1][state.size - 1] = null;
            newState.grid = grid;
            return {...state, newState};
        }

        default: {
            return state
        }
    }
}

export default grid;