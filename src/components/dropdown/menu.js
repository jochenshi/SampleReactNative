import React from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
  }

  generateContent = () => {
    const {
      children
    } = this.props;
    return React.Children.map(children || [], (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          parentRef: this.parentRef
        });
      }
      return child;
    });
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          marginTop: 6,
          justifyContent: 'center',
          padding: 16
        }}
        ref={this.parentRef}
      >
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          {this.generateContent()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

export default DropDownMenu;