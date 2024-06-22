import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardType,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {appColors} from '../constants/appColor';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {globalStyles} from '../styles/globalStyles';
interface Props {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  subfix?: ReactNode;
  isPassword?: boolean; // kiểm tra xem có phải là password không
  allowClear?: boolean;
  type?: KeyboardType; // Kiểu dữ liệu của input
}

const InputComponent = (props: Props) => {
  const {
    value,
    onChange,
    affix,
    subfix,
    placeholder,
    isPassword,
    allowClear,
    type,
  } = props;

  // Biến trạng thái kiểm soát việc hiển thị mật khẩu
  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);

  return (
    <View style={[styles.inputContainer]}>
      {affix ?? affix}
      <TextInput
        value={value}
        style={[styles.input, globalStyles.text]}
        placeholder={placeholder ?? ''}
        onChangeText={value => onChange(value)}
        secureTextEntry={isShowPass}
        placeholderTextColor={'#747688'}
        keyboardType={type}
      />
      {subfix ?? subfix}
      <TouchableOpacity
        onPress={
          isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')
        }>
        {isPassword ? (
          isShowPass ? (
            <EyeSlash size={22} color={appColors.gray} />
          ) : (
            <Eye size={22} color={appColors.text} />
          )
        ) : (
          value.length > 0 &&
          allowClear && (
            <AntDesign name="close" size={22} color={appColors.text} />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray3,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 8,
  },

  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
  },
});

export default InputComponent;
