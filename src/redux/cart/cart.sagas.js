import {all, call, takeLatest, put} from 'redux-saga/effects';

import UserActionTypes from '../user/user.type';
import {clearCart} from './cart.action';


export function* clerCartOnSighOut() {
   yield put(clearCart());
}

export function* onSignOutSucces() {
   yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clerCartOnSighOut)
}

export function* cartSagas() {
   yield (all([
      call(onSignOutSucces),
   ]))
}