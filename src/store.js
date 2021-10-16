import { createStore } from 'redux';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // state를 mutate할 경우 return 하지 않음
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = configureStore({reducer});

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
