import { StyleSheet, View, Text, Pressable } from "react-native";



const GoalItem = ({data, deletes}) => {
  return (
    <Pressable onPress={deletes.bind(this, data.id)}>
      <View style={styles.goals_list_item} key={data.id}>
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
