import React from 'react';
import {
  Input
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

class JInput extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    console.log(this.input);
  }

  render() {
    const {
      clear, rightIcon, ...restProps
    } = this.props;
    const isFocused = this.input?.current?.isFocused();
    const styleObj = {};
    console.log({isFocused});
    if (!isFocused) {
      styleObj.display = 'none';
    }
    return (
      <Input
        {...restProps}
        ref={this.input}
        rightIcon={(
          <Icon
            name='highlight-off'
            style={styleObj}
          />
        )}
        clearButtonMode='while-editing'
        onFocus={(e) => {
          console.log(e);
        }}
      />
    );
  }
}

export default JInput;
