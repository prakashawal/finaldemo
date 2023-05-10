import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const App = (props: Props) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        Deploying app to firebase app distribution using Github actions
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
