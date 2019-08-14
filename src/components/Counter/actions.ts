import {useDispatch} from 'react-redux';
import counterStore from '../../stores/counter';

export interface CounterActions {
  increment: () => Promise<void>;
  decrement: () => void;
}

async function incrementApi(): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => resolve(1), 10);
  });
}

export default function useCounterActions(): CounterActions {
  const dispatch = useDispatch();
  const increment = async () => {
    const value = await incrementApi();
    dispatch(counterStore.actions.increment(value));
  };
  const decrement = () => dispatch(counterStore.actions.decrement());
  return {
    increment,
    decrement,
  };
}
