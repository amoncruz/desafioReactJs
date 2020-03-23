import * as Action  from '../actions/constants'

const INITIAL_STATE={loading:false};

export function loading(state=INITIAL_STATE,action){
    switch(action.type){
        case Action.TOGGLE_LOADING:
            return {...state,loading:!state.loading}

        default: 
        return state;
    }
}
