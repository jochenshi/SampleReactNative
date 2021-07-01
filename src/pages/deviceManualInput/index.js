import React from 'react';
import {
  View, StyleSheet
} from 'react-native';
import JListitem from 'src/components/ListItem';
import JInput from 'src/components/Input';
import RNPickerSelect from 'react-native-picker-select';
import {
  Button
} from 'react-native-elements';

class DeviceManualInputPage extends React.Component {
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
  }

  render() {
    const {
      deviceTypes = [], deviceType
    } = this.state;
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
          />
        </View>
      </View>
    );
  }
}

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
