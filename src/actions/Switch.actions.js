/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import * as types from '../constants/Switch.ActionTypes';

export function switchSize(size) {
    return {
        type: types.SWITCH_SIZE,
        size
    };
}