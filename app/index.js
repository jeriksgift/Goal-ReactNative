import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";

export default function Index() {
  const [goals, setGoals] = useState([]);

  function goalAddHandler(goalText) {
    setGoals((currentGoals) => [...currentGoals, goalText]);
  }

  function deleteItem(id) {
    const newGoals = goals.filter((e1, i) => i != id);
    setGoals(newGoals);
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={goalAddHandler} />
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
  },
  goalsContainer: {
    width: "100%"
  },
});
