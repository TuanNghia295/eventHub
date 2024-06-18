import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Button
        title="log out"
        onPress={async () => await AsyncStorage.clear()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
