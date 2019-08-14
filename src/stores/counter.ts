import {createSlice, PayloadAction} from 'redux-starter-kit';
import {AppState} from '.';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  slice: 'counter',
  initialState,
  reducers: {
    increment(state, value: PayloadAction<number>) {
      state.count += value.payload;
    },
    decrement(state) {
      state.count += state.count > 0 ? -1 : 0;
    },
  },
});

export function counterSelector(state: AppState): CounterState {
  return state.counter;
}

export default counterSlice;
