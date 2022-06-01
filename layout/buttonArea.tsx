import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";

type ButtonComponentProps = {
  buttonText: string;
};

// const [stateSw1, setStateSw1] = useState("outline");

const ButtonArea: React.FunctionComponent<ButtonComponentProps> = (props) => {
  async function handleClickSw1() {
    const res = await axios.post("http://192.168.1.77/btnPush");
    alert(JSON.stringify(res.status));
  }
  async function handleClickSw2() {
    const param = { data: 1000 };
    const res = await axios.post("http://192.168.1.77/expo", param);
    alert(JSON.stringify(res.data));
  }

  return (
    <View>
      <Button
        title="sw1"
        containerStyle={{ margin: 5 }}
        onPress={handleClickSw1}
      />
      <Button
        title="sw2"
        containerStyle={{ margin: 5 }}
        onPress={handleClickSw2}
      />
      <Button title="sw3" containerStyle={{ margin: 5 }} />
    </View>
  );
};

export default ButtonArea;
