import React from 'react';
import {useSelector} from 'react-redux';
import useCounterActions from './actions';
import {counterSelector} from '../../stores/counter';
import styles from './styles';
import {View, Text, Button} from 'react-native';

export default function Counter() {
  const actions = useCounterActions();
  const counter = useSelector(counterSelector);
  return React.useMemo(
    () => (
      <View style={styles.wrapper}>
        <Text style={styles.header}>Counter</Text>
        <Text style={styles.text}>{counter.count}</Text>
        <View style={styles.buttons}>
          <Button title="+" onPress={actions.increment} />
          <Button title="-" onPress={actions.decrement} />
        </View>
      </View>
    ),
    [counter.count],
  );
}
