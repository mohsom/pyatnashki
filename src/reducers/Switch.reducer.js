/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import * as actions from "../constants/Switch.ActionTypes";

const initialState = {
    size: 3
};

function size(state=initialState, action) {
        switch (action.type) {
            case actions.SWITCH_SIZE: {
                return {
                    ...state,
                    size: action.size
                }
            }

            default: {
                return state
            }
        }
}

export default size;