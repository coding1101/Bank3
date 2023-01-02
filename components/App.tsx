import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#27252b',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HelloWorldApp = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        animated={true}
        backgroundColor="#27252b"
        barStyle={'light-content'}
      />
    </SafeAreaView>
  );
};
export default HelloWorldApp;
