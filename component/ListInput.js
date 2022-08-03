import {
  Image,
  Modal,
  View,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
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
        <Image style={styles.logo} source={require("../image/target.jpg")} />
        <TextInput
          onChangeText={getTheText}
          style={styles.TextInput}
          placeholder="Add Something.."
          value={entredListText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Item" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={props.modalClosed} />
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
    backgroundColor: "#FCDEC6",
    marginBottom: 25,
  },
  logo: {
    width: 200,
    height: 200,
  },

  TextInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ccc",
    width: "90%",
    padding: 7,
  },
  modal: {
    backgroundColor: "#FCDEC6",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },

  button: {
    marginHorizontal: 20,
    width: 100,
  },
});
