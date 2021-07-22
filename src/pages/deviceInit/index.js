import React, {useState} from 'react';
import {
  View, Switch, StyleSheet
} from 'react-native';
import {
  ListItem, Button
} from 'react-native-elements';
import {useSelector} from 'react-redux';

const DeviceInitPage = (props) => {
  const [isDhcp, setIsDhcp] = useState(false);

  const confirmData = () => {
    props.navigation.push('deviceRegist');
  };

  return (
    <View>
      <ListItem
        bottomDivider
        topDivider
        style={styles.firstList}
      >
        <ListItem.Content
          style={styles.listContentWithOther}
        >
          <ListItem.Title>
            DHCP
          </ListItem.Title>
          <View
            style={styles.listContentView}
          >
            <Switch
              value={isDhcp}
              onValueChange={() => {
                setIsDhcp(!isDhcp);
              }}
              trackColor={{
                true: '#0A6EFA'
              }}
            />
          </View>
        </ListItem.Content>
      </ListItem>
      <ListItem
        bottomDivider
        containerStyle={styles.listContainer}
        onPress={() => {
          props.navigation.push('deviceInitNet');
        }}
      >
        <ListItem.Content>
          <ListItem.Title>
            有线网络
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem
        bottomDivider
        containerStyle={styles.listContainer}
        onPress={() => {
          props.navigation.push('deviceInitApn');
        }}
        disabled={isDhcp}
      >
        <ListItem.Content>
          <ListItem.Title
            style={isDhcp ? styles.disableListStyle : {}}
          >
            无线网络
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <View
        style={styles.bottomBtn}
      >
        <Button
          title='下一步'
          buttonStyle={styles.button}
          onPress={confirmData}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: 59.4
  },
  listContentWithOther: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  listContentView: {
    flex: 1,
    alignItems: 'flex-end'
  },
  disableListStyle: {
    color: '#e3e3e3'
  },
  firstList: {
    paddingTop: 21
  },
  bottomBtn: {
    marginTop: 60,
    height: 45
  },
  button: {
    borderRadius: 15,
    height: '100%',
    marginHorizontal: 20
  }
});

export default DeviceInitPage;
