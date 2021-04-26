import React, {useState} from 'react';
import {
  View, TextInput, Text
} from 'react-native';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TextInput
        value={userName}
        onChangeText={(val) => {
          setUserName(val);
        }}
      />
      <Text>
        
      </Text>
    </View>
  );
};

export default LoginPage;