export const initialContactState = {
  isLoading: false,
  contacts: [],
  submitStatus: null,
  loadingSubmit: false,
};

export const GET_CONTACT_LOAD = 'GET_CONTACT_LOAD';
export const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS';
export const GET_CONTACT_FAILED = 'GET_CONTACT_FAILED';

export const ADD_CONTACT_LOAD = 'ADD_CONTACT_LOAD';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const ADD_CONTACT_FAILED = 'ADD_CONTACT_FAILED';

export const EDIT_CONTACT_LOAD = 'EDIT_CONTACT_LOAD';
export const EDIT_CONTACT_SUCCESS = 'EDIT_CONTACT_SUCCESS';
export const EDIT_CONTACT_FAILED = 'EDIT_CONTACT_FAILED';

export const DEL_CONTACT_LOAD = 'DEL_CONTACT_LOAD';
export const DEL_CONTACT_SUCCESS = 'DEL_CONTACT_SUCCESS';
export const DEL_CONTACT_FAILED = 'DEL_CONTACT_FAILED';

export const CLEANUP_RECEIVED = 'CLEANUP_RECEIVED';
export const CLEANUP_REQUEST = 'CLEANUP_REQUEST';

export const getContact = type => {
  return {
    type,
  };
};

export const addContact = (type, payload) => {
  return {
    type,
    payload: {...payload},
  };
};
export const editContact = (type, payload) => {
  return {
    type,
    payload: {...payload},
  };
};

export const deleteContact = (type, payload) => {
  return {
    type,
    payload: {...payload},
  };
};

export const clearStateContact = type => {
  return {
    type,
  };
};
