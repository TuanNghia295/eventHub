import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  width?: number;
  height?: number;
}

const Space = (props: Props) => {
  const {width, height} = props;
  return (
    <View style={{width, height}}>
      <Text>Space</Text>
    </View>
  );
};

export default Space;
