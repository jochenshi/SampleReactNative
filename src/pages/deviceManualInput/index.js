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
import {useForm, Controller} from 'react-hook-form';

class DeviceManualInputPage1 extends React.Component {
  constructor() {
    super();
    this.state = {
      deviceTypes: [
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
      ],
      deviceSn: '',
      deviceType: undefined
    };
    this.formRef = React.createRef();
  }

  render() {
    const {
      deviceTypes = [], deviceType
    } = this.state;
    console.log(11, this.props);
    return (
      <View
        style={styles.wrapper}
      >
        <JListitem
          label='设备SN号'
          showBottomBorder
        >
          <JInput
            placeholder='输入设备SN号'
          />
        </JListitem>
        <JListitem
          label='设备型号'
        >
          <RNPickerSelect
            value={deviceType}
            placeholder={{
              label: '选择设备型号',
              value: 'placeholder'
            }}
            items={deviceTypes || []}
            onValueChange={(val) => {
              console.log(val);
            }}
          />
        </JListitem>
        <JForm>
          <JFormItem
            label='设备SN号'
            name='sn'
            defaultValue=''
          >
            <JInput
              placeholder='输入设备SN号'
            />
          </JFormItem>
          <View
            testProp={'1asd'}
          >
            <Text>asd</Text>
          </View>
        </JForm>
        <View
          style={styles.bottomBtn}
        >
          <Button
            title='下一步'
            color='#ffffff'
            buttonStyle={{
              borderRadius: 15,
              height: '100%',
              marginHorizontal: 15
            }}
            onPress={() => {
              console.log(this.formRef);
            }}
          />
        </View>
      </View>
    );
  }
}

const DeviceManualInputPage = (props) => {
  const {
    register, handleSubmit, formState: {errors}, control
  } = useForm();

  const confirmData = (data) => {
    console.log(2, data);
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
  console.log(errors);

  return (
    <View>
      {/* <JForm
        register={register}
        errors={errors}
      >
        <JFormItem
          label='设备SN号'
          name='sn'
          rules={{
            required: '设备SN号不能为空'
          }}
        >
          <JInput
            placeholder='输入设备SN号'
            onChange={(e) => {
              onChange('sn', e.target.value, {
                shouldValidate: true
              });
            }}
          />
        </JFormItem>
        <JFormItem
          label='设备型号'
          name='deviceType'
        >
          <RNPickerSelect
            placeholder={{
              label: '选择设备型号',
              value: 'placeholder'
            }}
            items={deviceTypes || []}
            onValueChange={(val) => {
              console.log(val);
            }}
          />
        </JFormItem>
      </JForm> */}
      <Controller
        control={control}
        rules={{
          pattern: /^[A-Za-z]+$/,
          message: 'a'
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <JInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name='sn'
        defaultValue=''
      />
      <JInput
        {...register('deviceSn', {required: true})}
      />
      <View
          style={styles.bottomBtn}
        >
          <Button
            title='下一步'
            color='#ffffff'
            buttonStyle={{
              borderRadius: 15,
              height: '100%',
              marginHorizontal: 15
            }}
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
  }
});


export default DeviceManualInputPage;
