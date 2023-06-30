import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = ({ handle_click, err }) => {
  const [taskText, setTaskText] = useState("");
  

  const handle_clicks = () => {
    handle_click(taskText)
    setTaskText('')
  };

  const handle_change = (text) => {
    setTaskText(text);
  };

  return (
    <View style={styles.inputs}>
      <TextInput
        onChangeText={handle_change}
        style={styles.textInput}
        placeholder={err}
      />
      <Button color={"#FF6666"} onPress={handle_clicks} title="Add goal" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#FF8989",
    width: "70%",
    marginRight: 8,
    padding: 8,
    color: "#FF6666",
    fontSize: 20,
  },
});

export default GoalInput;
