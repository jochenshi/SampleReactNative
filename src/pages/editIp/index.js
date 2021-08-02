import React from 'react';
import {
  View, StyleSheet
} from 'react-native';
import {
  InputItem, Button, List
} from '@ant-design/react-native';

class EditDeviceIpPage extends React.Component {
  render() {
    return (
      <View
        style={styles.mainWrapper}
      >
        <View
          style={styles.list}
        >
          <List>
            <InputItem
              placeholder='输入IP'
              clear
            />
          </List>
        </View>
        <View
          style={styles.bottomBtn}
        >
          <Button
            style={styles.button}
            type='primary'
          >
            确定修改
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1
  },
  list: {
    marginTop: 45,
    flex: 1
  },
  bottomBtn: {
    marginBottom: '20%',
    height: 45
  },
  button: {
    borderRadius: 20,
    height: '100%',
    marginHorizontal: 20
  }
});

export default EditDeviceIpPage;
