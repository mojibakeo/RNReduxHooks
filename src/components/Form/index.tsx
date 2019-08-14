import React from 'react';
import {View, TextInput} from 'react-native';
import {FormHooks} from './hooks';
import styles from './styles';

interface Props {
  state: FormHooks;
}

export default function Form(props: Props) {
  return React.useMemo(
    () => (
      <View style={styles.wrapper}>
        <TextInput
          placeholder="you can fill text"
          style={styles.input}
          value={props.state.value}
          onChangeText={props.state.update}
        />
      </View>
    ),
    [props.state.value],
  );
}
