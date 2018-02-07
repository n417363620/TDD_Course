import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AV from "leancloud-storage";
export default class TestPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>hello world！</Text>
      </View>
    );
  }
}
