import { StyleSheet, View, TextInput, Button } from "react-native";
import { useEffect, useState, useRef } from "react";

const GoalInput = ({ handle_click, err }) => {
  const [taskText, setTaskText] = useState("");
  const [update, setUpdate] = useState(false)
  const clear = useRef();

  const handle_clicks = () => {
    handle_click(taskText)
    setTaskText('')
    setUpdate(!update)
  };

  const handle_change = (text) => {
    setTaskText(text);
  };


  useEffect(()=>{
    clear.current.clear()
  },[update])

  
  return (
    <View style={styles.inputs}>
      <TextInput
        ref={clear}
        onChangeText={handle_change}
        style={styles.textInput}
        placeholder={err}
        onSubmitEditing={()=>{
            cleartext()
        }}
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
