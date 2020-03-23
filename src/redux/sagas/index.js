import {put,takeEvery,call,all} from 'redux-saga/effects'
import * as Action from '../actions/constants'
import {signIn as sign} from '../../services/loginService.js'
import { toast } from 'react-toastify';
import { encryptToken } from '../../auth/auth';

function* login(action){

    try{
        let {username,password}=action.payload.values;
        const user = yield call(sign,username,password);
        user.token=encryptToken(user.token);
        yield put({type: "USER_LOGIN_SUCCESS",payload: user});

    }catch(e){
       
        toast.error("Usuário ou senha inválida!", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

}

function* loading(action){
    put({type: Action.TOGGLE_LOADING})
}

function* mySaga(){   
    yield all([
        takeEvery(Action.USER_LOGIN_REQUEST,login),
        takeEvery(Action.TOGGLE_LOADING,loading),
    ])
}

export default mySaga;