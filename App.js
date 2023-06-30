import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskerr, setTaskerr] = useState("Add your list");

  const handle_click = (text) => {
    if (text.length > 0 && text !== " ") {
      const data = [
        ...taskList,
        { text: text, id: Math.random().toString() },
      ];
      setTaskList(data);
    } else {
      setTaskerr("Enter a Item");
      console.log('hit')
    }
  };

  const delitem = (id) => {
      setTaskList((taskList)=>{
      return taskList.filter((item)=>{ return item.id!== id} )
    })
  };

  useEffect(()=>{

  },[taskList])

  return (
    <View style={styles.container}>
      <GoalInput  handle_click={handle_click} err={taskerr}/>
      <View style={styles.goals_container}>
        <Text style={{ fontSize: 20 }}>Lists</Text>
        <FlatList
          data={taskList}
          renderItem={({ item, index, separators }) => {
            return (
               <GoalItem data={item} deletes={delitem} id={item.id}/>
            );
          }}
          keyExtractor={(item , index)=>{
              return(
                item.id
              )
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#FFEADD",
    fontSize: 25,
  },
  goals_container: {
    flex: 5,
  },
  
});
