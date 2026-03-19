import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function goalAddHandler() {
    setGoals((currentGoals) => [...currentGoals, goalText]);
    console.log(currentGoals)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter goal" style={styles.input} onChangeText={goalInputHandler} />
        <Button title="+" onPress={goalAddHandler} />
      </View>
      <View>
        
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000000ff',
    paddingBottom: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000ff',
    padding: 10,
    marginRight: 10,
  },
  primary_btn: {
    margin: 20,
    padding: 10,
    borderRadius: 20,
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000ff",
    color: "#ffffffff"
  }
});
