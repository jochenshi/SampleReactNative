import React from 'react';
import {
  View, Text
} from 'react-native';

class FormItem extends React.Component {
  generateItem = (register) => {
    const {children, name, rules, defaultValue, ...extra} = this.props;
    if (children) {
      console.log(12, rules);
      return React.cloneElement(children, {
        defaultValue,
        ...register(name, rules || {}),
        ...extra
      });
    }
    return undefined;
  };

  render() {
    const {
      label, name, register, error
    } = this.props;
    return (
      <View>
        <View>
          {
            label && (
              <View>
                <Text>
                  {label}
                </Text>
              </View>
            )
          }
          <View>
            {this.generateItem(register)}
          </View>
        </View>
        <View>
          <Text>
            {error || ''}
          </Text>
        </View>
      </View>
    );
  }
}

export default FormItem;
