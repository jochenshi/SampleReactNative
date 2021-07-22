import React, {useEffect} from 'react';
import {
  View, StyleSheet
} from 'react-native';
import JInput from 'src/components/Input';
import RNPickerSelect from 'react-native-picker-select';
import {
  Button
} from 'react-native-elements';
import { JForm, JFormItem } from 'src/components/Form';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchDeviceTypes, setDeviceMacAndType
} from 'src/slices/deviceRegistSlice.js';

const DeviceManualInputPage = (props) => {
  const {
    register, handleSubmit, formState: {errors}, control, setValue, getValues
  } = useForm();
  const dispatch = useDispatch();
  const deviceTypeArr = useSelector(state => state.deviceRegister.deviceTypeArr);

  useEffect(() => {
    dispatch(fetchDeviceTypes());
  }, []);

  const confirmData = (data) => {
    console.log('get data', data);
    dispatch(setDeviceMacAndType(data));
    props.navigation.push('deviceInit');
  };

  const macTxt = getValues('deviceMac');
  const deviceType = getValues('deviceType');

  return (
    <View>
      <JForm
        register={register}
        errors={errors}
      >
        <JFormItem
          label='设备SN号'
          name='deviceMac'
          rules={{
            required: {
              value: true,
              message: '设备SN号不能为空'
            }
          }}
        >
          <JInput
            placeholder='输入设备SN号'
            value={macTxt}
            onChangeText={(txt) => {
              setValue('deviceMac', (txt || '').toLowerCase().trim(), {
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
            value={deviceType}
            items={deviceTypeArr || []}
            onValueChange={(val) => {
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
