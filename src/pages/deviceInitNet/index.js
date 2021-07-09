import React, {useState} from 'react';
import {
  View, StyleSheet
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import JInput from 'src/components/Input';
import {JForm, JFormItem} from 'src/components/Form';
import {useForm} from 'react-hook-form';

const DeviceInitNetPage = (props) => {
  const {register, formState: {errors}} = useForm();
  const [netPortList, setNetPortList] = useState([]);

  return (
    <View
      style={styles.mainWrapper}
    >
      <JForm
        register={register}
        errors={errors}
      >
        <JFormItem
          label='网口'
          name='netPort'
          rules={{
            required: {
              value: true,
              message: '网口不能为空'
            }
          }}
        >
          <RNPickerSelect
            placeholder={{
              label: '选择网口',
              value: null
            }}
            items={netPortList || []}
          />
        </JFormItem>
        <JFormItem
          label='IP'
          name='ip'
        >
          <JInput
            placeholder='输入IP'
          />
        </JFormItem>
        <JFormItem
          label='子网掩码'
          name='netmask'
        >
          <JInput
            placeholder='输入子网掩码'
          />
        </JFormItem>
      </JForm>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    marginTop: 20
  }
});

export default DeviceInitNetPage;
