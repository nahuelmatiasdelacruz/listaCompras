import { Button, Text, Modal, View, StyleSheet } from "react-native";

const ModalItem = props => {
    const {visible, onDelete, item} = props;
    if(!visible) return null;
    return(
        <Modal animationType='slide' visible={visible}>
            <View style={styles.modalTitle}>
              <Text>Mi modal</Text>
            </View>
            <View style={styles.modalMessage}>
              <Text>¿Está seguro que desea borrar?</Text>
            </View>
            <View style={styles.modalMessage}>
              <Text style={styles.modalItem}>{item.value}</Text>
            </View>
            <View style={styles.modalButton}>
              <Button onPress={onDelete} title="Confirmar"/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
  modalTitle:{
    backgroundColor: "#ccc",
    color: "white",
    fontSize: 18
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  modalButton: {
    marginTop: 15
  },
  modalItem:{
    fontSize: 30
  }
})

export default ModalItem;