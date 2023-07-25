import {call, put, takeLatest} from 'redux-saga/effects';
import * as _ from '../actions/contact.actions';
import {apiDEL, apiGET, apiPOST, apiPUT} from '../../middleware/httpClient';
function* getContactReceived() {
  try {
    const res = yield call(apiGET, 'contact');
    if (res?.data !== undefined) {
      yield put({
        type: _.GET_CONTACT_SUCCESS,
        payload: res?.data,
        loading: false,
      });
    }
  } catch (error) {
    yield put({
      type: _.GET_CONTACT_FAILED,
      payload: error,
      loading: false,
    });
  }
}

function* addContactReceived({payload}) {
  try {
    const url = 'contact';
    const res = yield call(apiPOST, url, payload);
    if (res?.response?.status >= 400) {
      yield put({
        type: _.ADD_CONTACT_FAILED,
        payload: res?.response,
        loading: false,
      });
    } else {
      yield put({
        type: _.ADD_CONTACT_SUCCESS,
        payload: 'success',
        loading: false,
      });
    }
  } catch (error) {}
}

function* editContactReceived({payload}) {
  try {
    const url = `contact/${payload.id}`;
    const res = yield call(apiPUT, url, payload);
    console.log(res, 'editContactReceived');
    if (res?.response?.status >= 400) {
      yield put({
        type: _.EDIT_CONTACT_FAILED,
        payload: res?.response,
        loading: false,
      });
    } else {
      yield put({
        type: _.EDIT_CONTACT_SUCCESS,
        payload: 'success',
        loading: false,
      });
    }
  } catch (error) {}
}
function* deleteContactReceived({payload}) {
  try {
    const url = `contact/${payload.id}`;
    const res = yield call(apiDEL, url);
    if (res?.response?.status >= 400) {
      yield put({
        type: _.DEL_CONTACT_FAILED,
        payload: res?.response,
        loading: false,
      });
    } else {
      yield put({
        type: _.DEL_CONTACT_SUCCESS,
        payload: 'success',
        loading: false,
      });
    }
  } catch (error) {}
}

function* cleanupReceived() {
  yield put({type: _.CLEANUP_RECEIVED});
}

export function* getContact() {
  yield takeLatest(_.GET_CONTACT_LOAD, getContactReceived);
}
export function* addContact() {
  yield takeLatest(_.ADD_CONTACT_LOAD, addContactReceived);
}
export function* editContact() {
  yield takeLatest(_.EDIT_CONTACT_LOAD, editContactReceived);
}
export function* deleteContact() {
  yield takeLatest(_.DEL_CONTACT_LOAD, deleteContactReceived);
}
export function* actionCleanup() {
  yield takeLatest(_.CLEANUP_REQUEST, cleanupReceived);
}
