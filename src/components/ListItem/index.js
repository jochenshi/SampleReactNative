import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

class JListitem extends React.Component {
  render() {
    const {
      label, children, renderFootor, showBottomBorder, showTopBorder
    } = this.props;
    return (
      <View
        style={StyleSheet.flatten([styles.container, showBottomBorder ? {
          borderBottomWidth: 1,
          borderColor: '#e3e3e3'
        } : {}, showTopBorder ? {
          borderTopWidth: 1,
          borderColor: '#e3e3e3'
        } : {}])}
      >
        <View
          style={styles.content}
        >
          {
            label && (
              <View
                style={styles.label}
              >
                <Text>
                  {label}
                </Text>
              </View>
            )
          }
          <View
            style={styles.body}
          >
            {children}
          </View>
        </View>
        <View>
          {
            renderFootor && renderFootor()
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    height: 60
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    width: 100
  },
  body: {
    color: 'red',
    flex: 1
  },
  bottomborder: {
    borderBottomWidth: 1,
    borderColor: '#e3e3e3'
  },
  topBorder: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3'
  }
});

export default JListitem;
