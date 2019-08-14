import React from 'react';
import {StatusBar, SafeAreaView, ScrollView} from 'react-native';
import Counter from '../components/Counter';
import Form from '../components/Form';
import useCounterActions from '../components/Counter/actions';
import {useSelector} from 'react-redux';
import {counterSelector} from '../stores/counter';
import {useFormHooks} from '../components/Form/hooks';

export default function Home() {
  const counterActions = useCounterActions();
  const counter = useSelector(counterSelector);
  const formState = useFormHooks('sample text');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Counter actions={counterActions} counter={counter} />
          <Form state={formState} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
