import React, {useState} from 'react';
import {InputComponent} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../styles/globalStyles';
import {View} from 'react-native';
import {Lock1, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColor';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={[
        globalStyles.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        },
      ]}>
      <InputComponent
        value={email}
        placeholder="Email"
        onChange={val => setEmail(val)}
        affix={<Sms size={22} color={appColors.gray} />}
      />

      <InputComponent
        value={password}
        placeholder="Password"
        onChange={val => setPassword(val)}
        isPassword
        affix={<Lock1 size={22} color={appColors.gray} />}
      />
    </View>
  );
};

export default LoginScreen;
