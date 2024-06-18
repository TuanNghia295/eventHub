import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ButtonComponent} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../styles/globalStyles';

const LoginScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.container, {padding: 16}]}>
      <Text>LoginScreen</Text>
      {/* <Button
        title="Login"
        onPress={async () => await AsyncStorage.setItem('accessToken', 'nghia')}
      /> */}
      <ButtonComponent
        type="link"
        text="LOGIN"
        onPress={() => console.log('ccasc')}
        iconFlex="left"
        icon={
          <View>
            <Text>N</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
