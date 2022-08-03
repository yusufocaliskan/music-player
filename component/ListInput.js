import { Modal, View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

function ListInput(props) {
  const [entredListText, setEnteredListText] = useState("");

  function addGoalHandler() {
    props.onAddList(entredListText);
    setEnteredListText("");
  }

  function getTheText(theText) {
    setEnteredListText(theText);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.InputContainer}>
        <TextInput
          onChangeText={getTheText}
          style={styles.TextInput}
          placeholder="Add Something.."
          value={entredListText}
        />

        <View style={styles.buttonContainer}>
          <View>
            <Button title="Cancel" onPress={addGoalHandler} />
          </View>
          <View>
            <Button title="Add Item" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ListInput;

const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
  },

  TextInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 7,
  },

  buttonContainer: {
    flexDirection: "row",
  },
});
