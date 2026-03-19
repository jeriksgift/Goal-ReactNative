import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function GoalInput(props) {
    const [goalText, setGoalText] = useState("");

    function goalInputHandler(text) {
        setGoalText(text);
    }

    function addGoalHandler() {
        props.onAddGoal(goalText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Enter goal" style={styles.input} onChangeText={goalInputHandler} />
            <Pressable onPress={addGoalHandler} style={styles.primary_btn}>
                <Text style={styles.primary_btn_text}>+</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
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
        borderWidth: 1,
        borderColor: "#000000ff",
        width: 40,
        height: 40,
    },
    primary_btn_text: {
        color: "#000000ff",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
});