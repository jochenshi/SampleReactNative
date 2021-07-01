import React from 'react';
import {
  View, Text, TouchableOpacity, Animated, ScrollView
} from 'react-native';
import {Icon} from 'react-native-elements';

class DropDownMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedValue: {},
      activeIndex: -1
    };
    this.defaultConfig = {
      height: 50
    };
  }

  judgeDisplayTitle = (record) => {
    const selectedValue = (this.state.selectedValue || {})[record.dataIndex];
    if (selectedValue) {
      const title = record.options.find(item => selectedValue === item.value);
      return title ? title.text : (record.options || [])[0].text;
    }
    return record.title;
  };

  renderDropArea = () => {
    const {
      activeIndex
    } = this.state;
    if (activeIndex > -1) {
      const listData = (this.props.data || [])[activeIndex];
      return (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: this.defaultConfig.height,
            bottom: 0
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.openOrClosePanel(activeIndex);
            }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }}
            activeOpacity={1}
          >
            <View
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }}
            >
              <View
                style={{
                  opacity: 0.4,
                  backgroundColor: 'black',
                  flex: 1
                }}
              />
            </View>
          </TouchableOpacity>
          <ScrollView
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0
            }}
            disableScrollViewPanResponder
          >
            {(listData?.options || []).map((item, index) => (
              <TouchableOpacity
                key={`list_${index}`}
                style={{
                  flex: 1,
                  height: 44
                }}
                onPress={() => {
                  this.clickSingleItem(item, listData.dataIndex);
                }}
              >
                {this.renderSingleItem(item, listData.dataIndex)}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      );
    }
  };

  renderSingleItem = (record, dataIndex) => {
    const {
      selectedValue
    } = this.state;
    const isSelected = (selectedValue || {})[dataIndex] === record.value;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 15
        }}
      >
        <Text
          style={{
            color: isSelected ? '#099DFF' : '#000000'
          }}
        >
          {record.text}
        </Text>
        {
          isSelected ? (
            <Icon
              type='material-icon'
              name='check'
              color='#099DFF'
            />
          ) : undefined
        }
      </View>
    );
  };

  openOrClosePanel = (index) => {
    if (this.state.activeIndex === index) {
      this.setState({
        activeIndex: -1
      });
    } else {
      this.setState({
        activeIndex: index
      });
    }
  };

  clickSingleItem = (recrod, dataIndex) => {
    const {
      activeIndex, selectedValue
    } = this.state;
    const newObj = {...selectedValue};
    if (newObj[dataIndex] === recrod.value) {
      newObj[dataIndex] = undefined;
    } else {
      newObj[dataIndex] = recrod.value;
    }
    this.setState({
      selectedValue: newObj
    });
    if (this.props.onChange) {
      this.props.onChange(newObj);
    }
    this.openOrClosePanel(activeIndex);
  };

  render() {
    const {
      selectedValue, activeIndex
    } = this.state;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            shadowColor: '#2E3E68',
            shadowOpacity: 0.15,
            shadowOffset: {
              width: 0,
              height: 0
            },
            zIndex: 10
          }}
        >
          {(this.props.data || []).map((item, index) => {
            const isSelected = (selectedValue || {})[item.dataIndex];
            return (
              <TouchableOpacity
                key={`item_${index}`}
                style={{
                  height: this.defaultConfig.height,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                activeOpacity={1}
                onPress={this.openOrClosePanel.bind(this, index)}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    style={{
                      color: isSelected ? '#099DFF' : '#000000'
                    }}
                  >
                    {this.judgeDisplayTitle(item, isSelected)}
                  </Text>
                  <Animated.View>
                    <Icon
                      type='material-icon'
                      color={isSelected ? '#099DFF' : '#26272E'}
                      name={activeIndex === index ? 'expand-less' : 'expand-more'}
                    />
                  </Animated.View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {this.props.children}
        {this.renderDropArea()}
      </View>
    );
  }
}

export default DropDownMenu;
