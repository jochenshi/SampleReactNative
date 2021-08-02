import React from 'react';
import {
  View, Text, StyleSheet, FlatList, ActivityIndicator
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import {Modal} from '@ant-design/react-native';
import {
  queryDeviceList, deleteDeviceRecord, setPageLoading, setListRefreshing, setFilterObj
} from 'src/slices/deviceListSlice.js';
import {connect} from 'react-redux';
import Dropdown from '../../components/DropDownMenu';
import DeviceCard from './components/deviceCard';

const statusObj = {
  all: '',
  online: 1,
  offline: 0
};

class DeviceList extends React.Component {
  state = {
    deviceList: [],
    refreshing: false,
    loading: false,
  };

  componentDidMount() {
    this.queryDeviceList(true);
  }

  clickDeleteRecord = (record) => {
    console.log(record);
    Modal.alert('确认删除', '删除后不可恢复，确定删除？', [
      {
        text: '取消'
      },
      {
        text: '确认删除',
        onPress: async () => {
          await this.deleteRecord(record);
        }
      }
    ]);
  };

  deleteRecord = async (record) => {
    const {dispatch} = this.props;
    try {
      this.setState({
        loading: true
      });
      await dispatch(deleteDeviceRecord(record.sn)).unwrap();
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  queryDeviceList = async (isReset) => {
    const {dispatch, store} = this.props;
    try {
      await dispatch(setPageLoading(true));
      const {
        pageNo, pageSize, filterObj
      } = store;
      const {
        deviceStatus
      } = filterObj || {};
      let obj = {
        status: statusObj[deviceStatus] || ''
      };
      if (isReset) {
        obj = {
          ...obj,
          pageNo: 1,
          pageSize
        }
      } else {
        obj = {
          ...obj,
          pageNo: pageNo + 1,
          pageSize
        }
      }
      await dispatch(queryDeviceList(obj));
    } finally {
      dispatch(setPageLoading(false));
    }
  };

  changeFilter = (value) => {
    console.log(value);
    this.props.dispatch(setFilterObj(value));
    this.queryDeviceList(true);
  };

  navigateDetail = () => {
    this.props.navigation.push('deviceDetail');
  };

  renderListItem = (item) => {
    return (
      <DeviceCard
        record={item}
        onDelete={this.clickDeleteRecord}
        onNavigate={this.navigateDetail}
      />
    )
  };

  pullListRefresh = async () => {
    const {dispatch} = this.props;
    dispatch(setListRefreshing(true));
    await this.queryDeviceList(true);
    dispatch(setListRefreshing(false));
  };

  render() {
    const {store: {
      pageLoading, listRefreshing
    } = {}} = this.props;
    return (
      <View
        style={styles.pageWrapper}
      >
        <View
          style={styles.headerView}
          onPress={() => {
            console.log('detail');
          }}
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
          onChange={this.changeFilter}
        >
          <View
            style={styles.listWrapper}
          >
            <FlatList
              style={{
                paddingHorizontal: 15
              }}
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
              renderItem={this.renderListItem}
              keyExtractor={item => item}
              onRefresh={this.pullListRefresh}
              refreshing={listRefreshing}
              ListHeaderComponent={(
                <View
                  style={styles.listTitle}
                >
                  <Text>
                    共9条记录
                  </Text>
                </View>
              )}
            />
          </View>
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
  },
  listWrapper: {
    // paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1
  },
  listTitle: {
    marginBottom: 13
  }
});

const mapStateToProps = (state) => ({
  store: state.deviceList || {}
});

export default connect(mapStateToProps)(DeviceList);
