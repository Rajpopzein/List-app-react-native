import { StyleSheet, View, Text, Pressable } from "react-native";



const GoalItem = ({ data }) => {

    const del = () =>{
        
    }

  return (
    <Pressable onPress={del}>
      <View style={styles.goals_list_item} key={data.key}>
        <Text style={styles.goal_text}>{data.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goals_list_item: {
    marginTop: 10,
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#FCAEAE",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 10,
    elevation: 2,
  },
  goal_text: {
    color: "#000",
    fontSize: 18,
  },
});

export default GoalItem;
