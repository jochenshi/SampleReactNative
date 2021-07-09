import React from 'react';
import {
  View, StyleSheet
} from 'react-native';
import JInput from 'src/components/Input';
import {JForm, JFormItem} from 'src/components/Form';
import {useForm} from 'react-hook-form';


const DeviceInitApnPage = (props) => {
  const {register, formState: {errors}} = useForm();

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
          >
            <JInput
              placeholder='输入APN'
            />
          </JFormItem>
          <JFormItem
            label='用户名'
            name='username'
          >
            <JInput
              placeholder='输入用户名'
            />
          </JFormItem>
          <JFormItem
            label='密码'
            name='password'
          >
            <JInput
              placeholder='输入密码'
            />
          </JFormItem>
        </JForm>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    marginTop: 20
  }
});

export default DeviceInitApnPage;
