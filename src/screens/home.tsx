import React from 'react';
import {StatusBar, SafeAreaView, ScrollView} from 'react-native';
import Counter from '../components/Counter';
import Form from '../components/Form';

export default function Home() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Counter />
          <Form />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
