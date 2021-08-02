import React from 'react';
import {
  View, Text
} from 'react-native';
import {
  Button, List, InputItem, Picker
} from '@ant-design/react-native';
import {
  createForm
} from 'rc-form';

const ListItem = List.Item;

class TestPage extends React.Component {
  validateForm = (dataIndex, value, callback) => {
    callback();
  };
  render() {
    console.log(this.props);
    const {form} = this.props;
    const {getFieldProps, getFieldError} = form;

    return (
      <View>
        <List>
          <Picker
            data={[
              {
                value: '1',
                label: 'LAN1'
              },
              {
                value: '2',
                label: 'LAN2'
              }
            ]}
            cols={1}
          >
            <ListItem>
              网口
            </ListItem>
          </Picker>
        </List>
        <List
          renderFooter={() => getFieldError('ip') && getFieldError('ip').join(',')}
        >
          <InputItem
            placeholder='请输入IP'
            {...getFieldProps('ip', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    console.log(value);
                    callback();
                  }
                }
              ]
            })}
          >
            IP
          </InputItem>
          <ListItem>
            IP
          </ListItem>
        </List>
        <Text>
          asd
        </Text>
        <View>
          <Button>
            asdasdasd
          </Button>
        </View>
      </View>
    );
  }
}

export default createForm()(TestPage);