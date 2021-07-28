import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const linking = {
  prefixes: ['testpushnotif://'],
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Router />
    </NavigationContainer>
  );
};

export default App;
