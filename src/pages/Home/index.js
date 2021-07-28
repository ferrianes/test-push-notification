import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Ini Home</Text>
      <Button
        title="Detail"
        color="#f194ff"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
