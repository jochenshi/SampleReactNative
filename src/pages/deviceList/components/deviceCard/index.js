import React from 'react';
import {
  View, Text, StyleSheet, TouchableHighlight
} from 'react-native';
import {Icon} from 'react-native-elements';

class DeviceCard extends React.Component {
  handleDelete = (e) => {
    console.log(e);
    e.stopPropagation();
    const {onDelete} = this.props;
    if (onDelete) {
      onDelete();
    } 
  };

  render() {
    const {record = {}, onNavigate} = this.props;
    return (
      <TouchableHighlight
        onPress={() => {
          if (onNavigate) {
            onNavigate();
          }
        }}
        style={{
          marginBottom: 16,
          borderRadius: 4
        }}
      >
        <View
          style={styles.mainWrapper}
        >
          <View
            style={styles.headerWrapper}
            onPress={() => {
              console.log('detail');
            }}
          >
            <View
              style={[
                {
                width: 10,
                height: 10,
                borderRadius: 5,
                borderWidth: 2
              }, record.status === 1 ?
                {
                  borderColor: '#0EDE77'
                } :
                {
                  borderColor: '#F12E50'
                }
              ]
              }
            />
            <Text
              style={styles.text}
            >
              asdasd
            </Text>
            <View>
              <Icon
                type='antdesign'
                name='delete'
                color='#A4A5B3'
                size={18}
                onPress={this.handleDelete}
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    height: 40,
    paddingRight: 16,
    paddingLeft: 16,
    justifyContent: 'center',
    shadowColor: '#2f34ba',
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 4,
      height: 4
    }
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    marginLeft: 6
  }
});

export default DeviceCard;