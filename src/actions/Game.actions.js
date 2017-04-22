/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import * as types from '../constants/Game.ActionTypes';

export function tileMoveUp() {
    return {
        type: types.TILE_MOVE_UP
    };
}

export function tileMoveDown() {
    return {
        type: types.TILE_MOVE_DOWN
    };
}

export function tileMoveLeft() {
    return {
        type: types.TILE_MOVE_LEFT
    };
}

export function tileMoveRight() {
    return {
        type: types.TILE_MOVE_RIGHT
    };
}

export function fillGrid() {
    return {
        type: types.FILL_GRID
    };
}

export function shuffleGrid() {
    return {
        type: types.SHUFFLE_GRID
    };
}