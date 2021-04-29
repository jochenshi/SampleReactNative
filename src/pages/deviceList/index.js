import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import DropDown from '../../components/dropdown';

const {
  DropDownMenu, DropDownItem
} = DropDown;
class DeviceList extends React.Component {
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
            />
            <Icon
              type='material-icons'
              name='search'
            />
          </View>
        </View>
        <DropDownMenu>
          <DropDownItem
            title='类别'
          />
          <DropDownItem
            title='状态'
          />
        </DropDownMenu>
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
