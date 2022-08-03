import { useState } from "react";

import { SafeAreaView, Button, FlatList, StyleSheet, View } from "react-native";

import Item from "./component/Item";
import ListInput from "./component/ListInput";

export default function App() {
  const [cList, setList] = useState([]);
  const [modalIsVisible, setModalVisible] = useState(false);

  function onButtonPressed(entredListText) {
    setList((currentList) => [
      ...currentList,
      { text: entredListText, key: Math.random().toString() },
    ]);
  }

  function deleteItem(id) {
    setList((currentList) => {
      return currentList.filter((list) => list.id !== id);
    });
  }

  function showModalHandler() {
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add New Item" onPress={showModalHandler} />

      <ListInput visible={modalIsVisible} onAddList={onButtonPressed} />

      <View style={styles.listContainer}>
        <FlatList
          data={cList}
          renderItem={(itemData) => {
            return (
              <Item
                onDeleteItem={deleteItem}
                id={itemData.item.id}
                text={itemData.item.text}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  listContainer: {
    flex: 5,
  },
});
