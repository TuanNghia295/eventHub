import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {appInfo} from '../constants/appInfo';
import {Space} from '../components';
import {appColors} from '../constants/appColor';

const {width, height} = Dimensions.get('screen');
const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      imageStyle={{flex: 1}}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: appInfo.sizes.WIDTH * 0.8,
          height: appInfo.sizes.HEIGHT * 0.3,
          resizeMode: 'contain', // This will ensure the image is scaled correctly
        }}
      />
      <Space height={20} />
      <ActivityIndicator color={appColors.gray} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;
