import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";

export default function Index() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function goalAddHandler(goalText) {
    if (goalText.trim().length != 0) {
      setGoals((currentGoals) => [...currentGoals, goalText]);
    }
    closeAddModal();
  }

  function closeAddModal() {
    setIsModalVisible(false);
  }

  function deleteItem(id) {
    const newGoals = goals.filter((e1, i) => i != id);
    setGoals(newGoals);
  }


  return (
    <View style={styles.container}>
      <Pressable style={styles.primary_btn} onPress={() => setIsModalVisible(true)}>
        <Text style={styles.primary_btn_text}>Add Goal</Text>
      </Pressable>
      <GoalInput visible={isModalVisible} onAddGoal={goalAddHandler} onCancel={closeAddModal} />
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item} onDelete={() => deleteItem(itemData.index)} />
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 16,
    gap: 10,
  },
  goalsContainer: {
    width: "100%"
  },
  primary_btn: {
    borderWidth: 1,
    borderColor: "#000000ff",
    padding: 8,
  },
  primary_btn_text: {
    color: "#000000ff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
