import * as Action  from '../actions/constants'

const INITIAL_STATE={user:''};

export function user(state=INITIAL_STATE,action){
    switch(action.type){
        case Action.USER_LOGIN_SUCCESS:
            return {...state,user:action.payload}

        case Action.USER_LOGOUT:
            return {user:''};

        default: 
        return state;

    }

}
