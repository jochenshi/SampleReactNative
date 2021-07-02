import React from 'react';
import {
  Text, View
} from 'react-native';

export default ({children, ...extraProps}) => {
  console.log({extraProps});
  const {
      register, errors, ...extra
  } = extraProps;
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
      {arr.map((item) => {
        console.log(1, item);
        return React.cloneElement(item, {
          register,
          error: errors[item.name],
          ...extra,
          ...item.props
        });
      })}
    </View>
  );
};
