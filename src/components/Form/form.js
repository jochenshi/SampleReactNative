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
        const itemName = item?.props?.name;
        return React.cloneElement(item, {
          key: `${itemName}_${index}`,
          error: errors[itemName],
          ...item.props,
          ...extraProps
        });
      })}
    </View>
  );
};

