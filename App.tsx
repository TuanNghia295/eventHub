import React, {useEffect, useState} from 'react';
import {SplashScreen} from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
}
