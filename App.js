import { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AddItem from './Components/AddItem';
import Lista from './Components/Lista/Lista';
import ModalItem from './Components/ModalItem';

export default function App() {
  const [itemList,setItemList] = useState([]);
  const [textItem,setTextItem] = useState("");
  const [modalVisible,setModalVisible] = useState(false);
  const [itemSelected,setItemSelected] = useState({});
  const onHandlerDelete = (id) => {
    const aux = itemList.filter(item=>item.id !== id);
    setItemList(aux);
    setItemSelected({});
    setModalVisible(!modalVisible);
  }
  const onHandlerModal = id => {
    setItemSelected(itemList.filter(item=>item.id === id)[0]);
    setModalVisible(!modalVisible);
  }
  const onHandlerChangeItem = (text) => {
    setTextItem(text);
  };
  const changeCompleted = (data) => {
    const aux = {
      id: data.id,
      value: data.value,
      completed: !data.completed
    }
    const newList = itemList.filter(item=>item.id!==data.id);
    newList.push(aux);
    setItemList(newList);
  }
  const addItem = () =>{
    setItemList(currentItems => [
      ...currentItems,
      {
        id: Math.random().toString(),
        value: textItem,
        completed: false
      }
    ]);
    setTextItem("");
  }
  return (
    <View style={styles.screen}>
      <ModalItem 
        visible={modalVisible}
        onDelete={onHandlerDelete.bind(this, itemSelected.id)}
        item={itemSelected}/>
      <View style={styles.mainHeader}>
        <Text style={styles.mainTitle}>Lista de compras</Text>
      </View>
      <View style={styles.container}>
        <AddItem
          onChange={onHandlerChangeItem}
          onAddItem={addItem}
          value={textItem}
          itemSelected={itemSelected}
        />
      </View>
      <Lista itemList={itemList} onHandlerModal={onHandlerModal} changeCompleted={changeCompleted}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
