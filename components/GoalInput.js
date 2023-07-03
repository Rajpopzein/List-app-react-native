import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useEffect, useState, useRef } from "react";

const GoalInput = ({ handle_click, err, visible , voff}) => {
  const [taskText, setTaskText] = useState("");
  const [update, setUpdate] = useState(false);
  const clear = useRef();

  const handleClose = () =>{
    voff()
  }

  const handle_clicks = () => {
    handle_click(taskText);
    setTaskText("");
    setUpdate(!update);
  };

  const handle_change = (text) => {
    setTaskText(text);
  };



  return (
    <Modal  visible={visible} animationType="slide" >
      <View style={styles.inputs}>
        <Image source={require('../assets/images/goal.png')} style={styles.image}/>
        <TextInput
          ref={clear}
          onChangeText={handle_change}
          style={styles.textInput}
          placeholder={err}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button
              color={"#394867"}
              onPress={handle_clicks}
              title="Add goal"
            />
          </View>
          <View style={styles.buttons}>
            <Button title="Cancel" onPress={handleClose} color={"#212A3E"}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    image:{
      width:100,
      height:100,
      margin:20,
    },
  inputs: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: '#9BA4B5',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#F1F6F9",
    width: "90%",
    marginRight: 8,
    padding: 8,
    color: "#212A3E",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  buttons: {
    width:"40%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
