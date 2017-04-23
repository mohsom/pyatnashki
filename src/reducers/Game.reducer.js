/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import shuffle from 'lodash/shuffle';
import * as actions from '../constants/Game.ActionTypes';

const initialState = {
    grid: [],
    size: 3,
    x: 2,
    y: 2,
    gameStarted: false
};

function grid(state = initialState, action) {
    switch (action.type) {
        case actions.NEW_GAME: {
            return {
                ...state,
                gameStarted: true
            }
        }

        case actions.RESET_GAME: {
            return {
                ...state,
                gameStarted: false
            }
        }

        case actions.TILE_MOVE_UP: {
            let grid = state.grid, x=state.x, y=state.y;

            if (x > 0) {
                grid[x][y] = grid[x - 1][y];
                grid[x - 1][y] = null;
                x--;
            }

            return {...state, grid, x, y};
        }

        case actions.TILE_MOVE_DOWN: {
            let grid = state.grid, x=state.x, y=state.y, size=state.size;
            if (x < size - 1) {
                grid[x][y] = grid[x + 1][y];
                grid[x + 1][y] = null;
                x++;
            }

            return {...state, grid, x, y};
        }

        case actions.TILE_MOVE_LEFT: {
            let grid = state.grid, x=state.x, y=state.y;

            if (y > 0) {
                grid[x][y] = grid[x][y - 1];
                grid[x][y - 1] = null;
                y--;
            }

            return {...state, grid, x, y};
        }

        case actions.TILE_MOVE_RIGHT: {
            let grid = state.grid, x=state.x, y=state.y, size=state.size;

            if (y < size - 1) {
                grid[x][y] = grid[x][y + 1];
                grid[x][y + 1] = null;
                y++;
            }

            return {...state, grid, x, y};
        }

        case actions.FILL_GRID: {
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

            let x, y;

            grid.forEach((row, i)=>{
                row.forEach((tile, j)=> {
                    if(!tile) {
                        x=i;
                        y=j;
                    }
                });
            });

            return {...state, grid, size,x,y};
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