import React from 'react';
import {
  TextInput, StyleSheet
} from 'react-native';

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
      clear, ...restProps
    } = this.props;
    return (
      <TextInput
        {...restProps}
        ref={this.input}
        style={styles.input}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16
  }
});

export default JInput;
