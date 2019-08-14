import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from 'redux-starter-kit';
import counterSlice, {CounterState} from './counter';

export interface AppState {
  counter: CounterState;
}

const reducer = combineReducers({
  counter: counterSlice.reducer,
});

export const createAppStore = () =>
  configureStore({
    reducer,
    middleware: [...getDefaultMiddleware()],
  });
