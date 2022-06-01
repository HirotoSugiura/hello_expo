import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

const ViewArea: React.FunctionComponent = () => {
  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <View>
      <View style={styles.viewarea}>
        <Text h1>hello</Text>
        <Text h3>number</Text>
      </View>
      <View style={styles.viewarea}>
        <Text h1>hello</Text>
        <Text h3>number</Text>
      </View>
      <View style={styles.viewarea}>
        <Text h1>hello</Text>
        <Text h3>number</Text>
      </View>
    </View>
  );
};

export default ViewArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  viewarea: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
