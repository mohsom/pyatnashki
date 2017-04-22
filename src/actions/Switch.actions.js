/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import * as actions from '../constants/Switch.ActionTypes';

export function switchSize(size) {
    return {
      type: actions.SWITCH_SIZE,
      size
    };
}