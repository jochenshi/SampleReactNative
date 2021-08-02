import React from 'react';
import {
  View, StyleSheet
} from 'react-native';
import {
  List, Button, Toast, Modal, Switch
} from '@ant-design/react-native';
import {connect} from 'react-redux';
import {createForm} from 'rc-form';
import {
  setDhcp
} from 'src/slices/deviceRegistSlice.js';

const ListItem = List.Item;

class DeviceInitPage extends React.Component {
  confirmForm = () => {
    // this.props.navigation.push('deviceRegist');
    console.log(this.props);
    const {store, dispatch, form} = this.props;
    const {
      netPort
    } = store || {};
    if (!netPort) {
      Toast.fail('请检查有线网络配置');
    } else {
      dispatch(setDhcp(form.getFieldValue('isDhcp')));
      Modal.alert('', '请确认以上操作！', [
        {
          text: '取消'
        },
        {
          text: '确认',
          onPress: () => {
            this.props.navigation.push('deviceRegist');
          }
        }
      ])
    }
  };

  render() {
    const {form, navigation, route: {params: {deviceType}}} = this.props;
    const {getFieldProps, getFieldValue} = form;
    console.log(this.state);
    const isDhcp = getFieldValue('isDhcp')
    return (
      <View>
        <List
          style={styles.wrapper}
        >
          <ListItem
            extra={(
              <Switch
                color='#0A6EFA'
                {...getFieldProps('isDhcp', {
                  valuePropName: 'checked',
                  initialValue: false
                })}
              />
            )}
          >
            DHCP
          </ListItem>
          <ListItem
            arrow='horizontal'
            onPress={() => {
              navigation.push('deviceInitNet', {
                isDhcp,
                deviceType
              })
            }}
          >
            有线网络
          </ListItem>
          <View
            pointerEvents={isDhcp ? 'none' : 'auto'}
          >
            <ListItem
              arrow='horizontal'
              disabled={isDhcp}
              onPress={() => {
                if (!isDhcp) {
                  navigation.push('deviceInitApn');
                }
              }}
              style={{
                opacity: isDhcp ? 0.4 : 1
              }}
            >
              无线网络
            </ListItem>
          </View>
        </List>
        <View
          style={styles.bottomBtn}
        >
          <Button
            type='primary'
            style={styles.button}
            onPress={this.confirmForm}
          >
            下一步
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    height: 59.4
  },
  wrapper: {
    marginTop: 45
  },
  listContentWithOther: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  listContentView: {
    flex: 1,
    alignItems: 'flex-end'
  },
  disableListStyle: {
    color: '#e3e3e3'
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

const mapStateToProps = (state) => ({
  store: state.deviceRegist || {}
}); 

export default connect(mapStateToProps)(createForm()(DeviceInitPage));
