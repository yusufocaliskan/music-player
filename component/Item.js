import { Modal, View, Text, StyleSheet, Pressable } from "react-native";

function Item(props) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.text}> {props.text} </Text>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  item: {
    marginBottom: 5,

    borderRadius: 5,
    backgroundColor: "#ddd",
    color: "black",
  },

  text: {
    padding: 5,
  },
});
