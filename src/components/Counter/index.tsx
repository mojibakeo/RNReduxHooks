import React from 'react';
import {View, Text, Button} from 'react-native';
import {CounterActions} from './actions';
import {CounterState} from '../../stores/counter';
import styles from './styles';

interface Props {
  actions: CounterActions;
  counter: CounterState;
}

export default function Counter(props: Props) {
  return React.useMemo(
    () => (
      <View style={styles.wrapper}>
        <Text style={styles.header}>Counter</Text>
        <Text style={styles.text}>{props.counter.count}</Text>
        <View style={styles.buttons}>
          <Button title="+" onPress={props.actions.increment} />
          <Button title="-" onPress={props.actions.decrement} />
        </View>
      </View>
    ),
    [props.counter.count],
  );
}
