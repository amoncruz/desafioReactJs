import {put,takeEvery,takeLatest,call} from 'redux-saga/effects'
import * as Action from '../actions/constants'
import {signIn as sign} from '../../services/loginService.js'

function* login(action){

    try{
        let {username,password}=action.payload.values;
        const response = yield call(sign,username,password);
        yield put({type: "USER_LOGIN_SUCCESS",payload: response});

    }catch(e){
        console.log(e);
    }

}

function* mySaga(){
    yield takeEvery(Action.USER_LOGIN_REQUEST,login);
}

export default mySaga;