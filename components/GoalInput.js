import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function GoalInput(props) {
    const [goalText, setGoalText] = useState("");

    function goalInputHandler(text) {
        setGoalText(text);
    }

    function addGoalHandler() {
        props.onAddGoal(goalText);
        setGoalText("");
    }

    return (
        <Modal visible={props.visible} animationType='fade'>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Enter goal" style={styles.input} onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <Pressable onPress={addGoalHandler} style={styles.primary_btn}>
                        <Text style={styles.primary_btn_text}>+</Text>
                    </Pressable>
                    <Pressable onPress={props.onCancel} style={styles.primary_btn}>
                        <Text style={styles.primary_btn_text}>x</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000000ff',
        padding: 10,
        width: '80%',
        marginBottom: 10,
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
    buttonContainer: {
        flexDirection: 'row',
        gap: 20,
    }
});