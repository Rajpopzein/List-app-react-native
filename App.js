import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskerr, setTaskerr] = useState("Add your list");
  const [visibilityModel, setVisibilityModel] = useState(false);

  const handle_model_visibility = () => {
    setVisibilityModel(true);
  };
  const handle_endmodel_visibility = () => {
    setVisibilityModel(false);
  };
  const handle_click = (text) => {
    if (text.length > 0 && text !== " ") {
      const data = [...taskList, { text: text, id: Math.random().toString() }];
      setTaskList(data);
      handle_endmodel_visibility();
    } else {
      setTaskerr("Enter a Item");
    }
  };

  const delitem = (id) => {
    setTaskList((taskList) => {
      return taskList.filter((item) => {
        return item.id !== id;
      });
    });
  };

  useEffect(() => {}, [taskList]);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/images/planning.png')}/>
        <Button
          title={"Add tasks"}
          color={"#394867"}
          onPress={handle_model_visibility}
        />
        <GoalInput
          handle_click={handle_click}
          err={taskerr}
          visible={visibilityModel}
          voff={handle_endmodel_visibility}
        />
        <View style={styles.goals_container}>
          <FlatList
            data={taskList}
            renderItem={({ item, index, separators }) => {
              return <GoalItem data={item} deletes={delitem} id={item.id} />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    fontSize: 25,
    // justifyContent:'center',
    flexDirection:"column",
  },
  goals_container: {
    flex: 5,
  },
  image:{
    width:150,
    height:150,
    marginLeft:'25%',
    flex:1,
    paddingBottom:'10%',
    // alignItems:'center'
  },
});
