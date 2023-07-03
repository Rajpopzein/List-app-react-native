import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

const GoalItem = ({ data, deletes}) => {
  return (
    
      <View style={styles.goals_list_item} key={data.id}>
        <Pressable
          android_ripple={{ color: "#394867" }}
          onPress={deletes.bind(this, data.id)}
        >
          <Text style={styles.goal_text}>{data.text}</Text>
        </Pressable>
      </View>
   
  );
};

const styles = StyleSheet.create({
  goals_list_item: {
    marginTop: 10,
    borderRadius: 6,
    backgroundColor: "#F1F6F9",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#212A3E",
    marginBottom: 10,
    elevation: 2,
  },
  goal_text: {
    color: "#394867",
    fontSize: 18,
    padding: 10,
  },
});

export default GoalItem;
