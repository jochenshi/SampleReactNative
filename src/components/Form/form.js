import React from 'react';
import {
  Text, View
} from 'react-native';

export default ({children, errors = {}, ...extraProps}) => {
  let arr = [];
  if (children) {
    if (Array.isArray(children)) {
      arr = [...children];
    } else {
      arr = [children];
    }
  }
  return (
    <View>
      {arr.map((item, index) => {
        return React.cloneElement(item, {
          key: `${item.name}_${index}`,
          error: errors[item.name],
          ...item.props,
          ...extraProps
        });
      })}
    </View>
  );
};

