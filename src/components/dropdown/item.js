import React, {ReactDOM} from 'react';
import {
  View, Text
} from 'react-native';

class DropDownItem extends React.Component {
  constructor() {
    super();
    this.popRef = React.createRef();
  }

  generatePopWrapper = () => {
    const {parentRef} = this.props;
    const wrapper = (
      <View
        ref={this.popRef}
      />
    );
    if (parentRef) {
      ReactDOM.createPortal(wrapper, parentRef);
    }
  };

  render() {
    const {
      title, children, options = []
    } = this.props;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Text
          onPress={() => {
            console.log(this.props);
          }}
        >
          {title}
        </Text>
      </View>
    );
  }
}

export default DropDownItem;
