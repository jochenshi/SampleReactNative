import React from 'react';
import {
  View, Text, StyleSheet, Button
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import Dropdown from '../../components/DropDownMenu';

class DeviceList extends React.Component {
  state = {
    visible: false,
    deviceList: []
  };

  render() {
    return (
      <View
        style={styles.pageWrapper}
      >
        <View
          style={styles.headerView}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600'
            }}
          >
            设备列表
          </Text>
          <View
            style={styles.headerOperation}
          >
            <Icon
              type='material-icons'
              name='add'
              style={styles.headerIcon}
              onPress={() => {
                console.log(this.props);
                this.props.navigation.push('deviceManualInput');
              }}
            />
            <Icon
              type='material-icons'
              name='search'
            />
          </View>
        </View>
        <Dropdown
          data={[
            {
              title: '筛选',
              dataIndex: 'deviceStatus',
              options: [
                {
                  text: '全部',
                  value: 'all'
                },
                {
                  text: '在线',
                  value: 'online'
                },
                {
                  text: '离线',
                  value: 'offline'
                }
              ]
            }
          ]}
        >
          <Button
            onPress={() => {
              this.setState((prev) => ({
                visible: !prev.visible
              }));
            }}
            title={'asd'}
          />
        </Dropdown>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff'
  },
  headerOperation: {
    flexDirection: 'row'
  },
  headerIcon: {
    marginRight: 17
  }
});

export default DeviceList;
