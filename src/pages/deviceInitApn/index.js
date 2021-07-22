import React from 'react';
import {
  View, StyleSheet
} from 'react-native';
import {Button} from 'react-native-elements';
import JInput from 'src/components/Input';
import {JForm, JFormItem} from 'src/components/Form';
import {useForm} from 'react-hook-form';
import {newTrim} from 'util/util.js';
import {useDispatch} from 'react-redux';
import {
  setApnInfo
} from 'src/slices/deviceRegistSlice.js';


const DeviceInitApnPage = (props) => {
  const {
    register, handleSubmit, formState: {errors}, getValues, setValue
  } = useForm();

  const dispatch = useDispatch();

  const confirmData = (data) => {
    console.log(data);
    dispatch(setApnInfo(data));
    props.navigation.goBack();
  };

  const validateForm = (dataIndex) => {
    const [data1, data2, data3] = getValues(['apn', 'username', 'password']);
    const apn = newTrim(data1);
    const user = newTrim(data2);
    const password = newTrim(data3);
    if (dataIndex === 'apn') {
      if ((user || password) && !apn) {
        return '请输入APN';
      }
      return true;
    }

    if (dataIndex === 'username') {
      if ((apn || password) && !user) {
        return '请输入用户名';
      }
      return true;
    }

    if (dataIndex === 'password') {
      if ((apn || user) && !password) {
        return '请输入密码';
      }
      return true;
    }
  };

  return (
    <View>
      <View
        style={styles.mainWrapper}
      >
        <JForm
          register={register}
          errors={errors}
        >
          <JFormItem
            label='APN'
            name='apn'
            rules={{
              validate: () => validateForm('apn')
            }}
          >
            <JInput
              placeholder='输入APN'
              onChangeText={(txt) => {
                setValue('apn', txt || '', {
                  shouldValidate: true
                })
              }}
            />
          </JFormItem>
          <JFormItem
            label='用户名'
            name='username'
            rules={{
              validate: () => validateForm('username')
            }}
          >
            <JInput
              placeholder='输入用户名'
              onChangeText={(txt) => {
                setValue('username', txt || '', {
                  shouldValidate: true
                })
              }}
            />
          </JFormItem>
          <JFormItem
            label='密码'
            name='password'
            rules={{
              validate: () => validateForm('password')
            }}
          >
            <JInput
              placeholder='输入密码'
              onChangeText={(txt) => {
                setValue('password', txt || '', {
                  shouldValidate: true
                })
              }}
              secureTextEntry
            />
          </JFormItem>
        </JForm>
      </View>
      <View
        style={styles.bottomBtn}
      >
        <Button
          title='下一步'
          buttonStyle={styles.button}
          onPress={handleSubmit(confirmData)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    marginTop: 20
  },
  bottomBtn: {
    marginTop: 60,
    height: 45
  },
  button: {
    borderRadius: 15,
    height: '100%',
    marginHorizontal: 20
  }
});

export default DeviceInitApnPage;
