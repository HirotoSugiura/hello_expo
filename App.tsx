import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Header from "./layout/headerArea";
import ViewArea from "./layout/viewArea";
import ButtonArea from "./layout/buttonArea";
import { SafeAreaProvider } from "react-native-safe-area-context";
// declare namespace JSX {
//   interface IntrinsicElements {
//     viewArea: React.FunctionComponent<{}>;
//   }
// }

function handlePowerOnOff() {
  console.log("onoff!");
}

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header title={""}></Header>
        <ViewArea></ViewArea>
        <View style={styles.container}>
          <ButtonArea buttonText="hello"></ButtonArea>
          <StatusBar style="auto" />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  viewarea: {
    margin: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
