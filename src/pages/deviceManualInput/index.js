import React from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import JListitem from 'src/components/ListItem';
import JInput from 'src/components/Input';
import RNPickerSelect from 'react-native-picker-select';
import {
  Button
} from 'react-native-elements';
import { JForm, JFormItem } from 'src/components/Form';
import {useForm} from 'react-hook-form';

const DeviceManualInputPage = (props) => {
  const {
    register, handleSubmit, formState: {errors}, control, setValue
  } = useForm();

  const confirmData = (data) => {
    console.log('get data', data);
    props.navigation.push('deviceInit');
  };

  const deviceTypes = [
    {
      label: 'type1',
      value: 'type1'
    },
    {
      label: 'type2',
      value: 'type2'
    },
    {
      label: 'type2',
      value: 'type2'
    }
  ];
  console.log('errors', errors);

  return (
    <View>
      <JForm
        register={register}
        errors={errors}
      >
        <JFormItem
          label='设备SN号'
          name='mac'
          rules={{
            required: {
              value: true,
              message: '设备SN号不能为空'
            }
          }}
        >
          <JInput
            placeholder='输入设备SN号'
            onChangeText={(txt) => {
              setValue('mac', txt, {
                shouldValidate: true
              });
            }}
          />
        </JFormItem>
        <JFormItem
          label='设备型号'
          name='deviceType'
          rules={{
            required: {
              value: true,
              message: '设备型号不能为空'
            }
          }}
        >
          <RNPickerSelect
            placeholder={{
              label: '选择设备型号',
              value: null
            }}
            items={deviceTypes || []}
            onValueChange={(val) => {
              console.log(val);
              setValue('deviceType', val, {
                shouldValidate: true
              });
            }}
          />
        </JFormItem>
      </JForm>
      <View
          style={styles.bottomBtn}
        >
          <Button
            title='下一步'
            color='#ffffff'
            buttonStyle={styles.button}
            onPress={handleSubmit(confirmData)}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 45
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


export default DeviceManualInputPage;
