import {all} from 'redux-saga/effects';
import {
  getContact,
  addContact,
  deleteContact,
  editContact,
  actionCleanup,
} from './contact.sagas';

export function* rootSagas() {
  yield all([
    getContact(),
    addContact(),
    deleteContact(),
    editContact(),
    actionCleanup(),
  ]);
}
