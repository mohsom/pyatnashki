/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import shuffle from 'lodash/shuffle';
import * as actions from '../constants/Game.ActionTypes';

const initialState = {
    grid: [],
    size: 5,
    x: 4,
    y: 4
};

function grid(state = initialState, action) {
    function checkIfWin() {

    }
    
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
            console.log('exe');
            let size = action.size.size;
            let grid = [], val = 1;
            for (let i = 0; i < size; i++) {
                grid[i] = new Array(size);
                for (let j = 0; j < size; j++) {
                    grid[i][j] = val;
                    val++;
                }
            }
            grid[size - 1][size - 1] = null;
            newState.grid = grid;
            return {...state, newState, size};
        }

        case actions.SHUFFLE_GRID: {
            let grid = Object.assign({}, state.grid);
            grid = shuffle(grid);
            grid = grid.map((row) => {
               return shuffle(row);
            });

            let x, y;

            grid.forEach((row, i)=>{
                row.forEach((tile, j)=> {
                    if(!tile) {
                        x=i;
                        y=j;
                    }
                });
            });

            return {...state, grid,x, y};
        }

        default: {
            return state
        }
    }
}

export default grid;