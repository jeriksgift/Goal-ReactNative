import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem(props){
    return(
        <View style={styles.goalItem}>
            <Text style={styles.goal}>◼️ {props.text}</Text>
            <Pressable onPress={props.onDelete} style={styles.delete_btn}>
                <Text style={styles.delete_btn_text}>❌</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem:{
        flexDirection: 'row',
        margin: 8,
        padding: 8,
        borderColor: "#000000ff",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
  goal: {
    color: "#000000ff",
  },
  delete_btn: {
    borderWidth: 1,
    borderColor: "#000000ff",
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  delete_btn_text: {
    color: "#000000ff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});