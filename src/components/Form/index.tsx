import React from 'react';
import {useFormHooks} from './hooks';
import styles from './styles';
import {View, TextInput} from 'react-native';

export default function Form() {
  const state = useFormHooks('sample text');
  return React.useMemo(
    () => (
      <View style={styles.wrapper}>
        <TextInput
          placeholder="you can fill text"
          style={styles.input}
          value={state.value}
          onChangeText={state.update}
        />
      </View>
    ),
    [state.value],
  );
}
