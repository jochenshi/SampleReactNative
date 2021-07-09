import React, {useState} from 'react';
import {
  View, Switch, StyleSheet, Image
} from 'react-native';
import {Button} from 'react-native-elements';
import JInput from 'src/components/Input';
import {JForm, JFormItem} from 'src/components/Form';
import {useForm} from 'react-hook-form';

const DeviceRegistPage = (props) => {
  const [isDoubleCheck, setDoubleCheck] = useState(false);
  const {
    register, formState: {errors}
  } = useForm();

  return (
    <View>
      <View
        style={styles.imageView}
      >
        <Image
          source={require('../../common/assets/images/device.png')}
          style={{
            width: 100,
            height: 100
          }}
        />
      </View>
      <View>
        <JForm
          register={register}
          errors={errors}
        >
          <JFormItem
            label='设备名称'
            name='deviceName'
          >
            <JInput
              placeholder='输入设备名称'
            />
          </JFormItem>
          <JFormItem
            label='开启双向认证'
            name='doubleCheck'
          >
            <Switch
              value={isDoubleCheck}
              trackColor={{
                true: '#0A6EFA'
              }}
              onValueChange={() => {
                setDoubleCheck(!isDoubleCheck);
              }}
            />
          </JFormItem>
        </JForm>
      </View>
      <View
				style={styles.bottomWrapper}
			>
				<View
          style={styles.bottomBtnView}
        >
          <Button
            title='取消'
            buttonStyle={[styles.bottomBtn, {
              borderColor: '#ffffff',
              backgroundColor: '#ffffff'
            }]}
            titleStyle={{
              color: '#000'
            }}
            type='outline'
            onPress={() => {
              console.log(props.navigation);
              props.navigation.navigate('deviceList');
            }}
          />
				</View>
        <View
          style={styles.bottomBtnView}
        >
          <Button
            title='注册'
            buttonStyle={styles.bottomBtn}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    alignItems: 'center',
    marginVertical: 20
  },
	bottomWrapper: {
		flexDirection: 'row',
    height: 45,
    marginTop: 60,
    marginHorizontal: 10
	},
	bottomBtnView: {
		flex: 1,
    height: '100%'
	},
  bottomBtn: {
    height: '100%',
    borderRadius: 15,
    marginHorizontal: 10
  }
});

export default DeviceRegistPage;
