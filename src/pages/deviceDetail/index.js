import React from 'react';
import {View, Text} from 'react-native';
import {
  List
} from '@ant-design/react-native';

const ListItem = List.Item;

class DeviceDetailPage extends React.Component {
  render() {
    const {
      navigation
    } = this.props;
    return (
      <View>
        <List
          renderHeader='asdsad'
        >
          <ListItem
            extra='asdads'
            arrow='horizontal'
            onPress={() => {
              console.log(123);
              navigation.push('deviceNameEdit');
            }}
          >
            设备名称
          </ListItem>
          <ListItem
            extra={(
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      borderWidth: 2,
                      borderColor: '#0EDE77',
                      marginRight: 6
                    }}
                  />
                  <Text
                    style={{
                      color: '#888888'
                    }}
                  >
                    已连接
                  </Text>
                </View>
              </View>
            )}
          >
            设备状态
          </ListItem>
          <ListItem
            extra={'asdasdasdsa'}
          >
            PK
          </ListItem>
          <ListItem
            extra='asdasdsa'
          >
            DK
          </ListItem>
          <ListItem
            extra='asdasdsa'
          >
            DS
          </ListItem>
          <ListItem
            extra='192.168.1.1'
            arrow='horizontal'
            onPress={() => {
              console.log('edit ip');
              navigation.push('deviceIpEdit');
            }}
          >
            IP
          </ListItem>
          <ListItem
            extra='asdasdsa'
          >
            MAC
          </ListItem>
        </List>
      </View>
    );
  }
}

export default DeviceDetailPage;
