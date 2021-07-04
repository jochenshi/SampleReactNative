import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

class FormItem extends React.Component {
  generateItem = (register) => {
    const {children, name, rules, defaultValue, ...extra} = this.props;
    if (children) {
      return React.cloneElement(children, {
        defaultValue,
        ...register(name, rules || {}),
        ...extra,
        style: StyleSheet.create({
          inputIOS: {
            fontSize: 16
          },
          inputAndroid: {
            fontSize: 16
          }
        })
      });
    }
    return undefined;
  };

  render() {
    const {
      label, name, register, error
    } = this.props;
    return (
      <View
        style={[
          styles.wrapper,
          styles.borderWrapper
        ]}
      >
        <View
          style={styles.container}
        >
          {
            label && (
              <View
                style={styles.label}
              >
                <Text
                  style={{
                    fontSize: 16
                  }}
                >
                  {label}
                </Text>
              </View>
            )
          }
          <View
            style={{
              flex: 1
            }}
          >
            {this.generateItem(register)}
          </View>
        </View>
        {
          error && (
            <Text
              style={styles.errorTxt}
            >
              {error && error.message}
            </Text>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  },
  borderWrapper: {
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
    paddingVertical: 5
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 46
  },
  label: {
    width: 120
  },
  errorTxt: {
    color: 'red',
    fontSize: 12
  }
});

export default FormItem;
