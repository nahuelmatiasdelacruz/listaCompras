import Checkbox from "expo-checkbox";
import {FlatList,ListViewBase,StyleSheet,Text,TouchableOpacity,View} from "react-native";
const Lista = (props) => {
    const {itemList,onHandlerModal,changeCompleted} = props;
    return(
        <FlatList
            data={itemList}
            renderItem={data=>(
              <TouchableOpacity onPress={onHandlerModal.bind(this,data.item.id)}>
                <View style={data.item.completed ? styles.itemListInc : styles.itemList}>
                  <Text>{data.item.value}</Text>
                  <View style={styles.completedContainer}>
                    <Text style={styles.completedText}>Completado: </Text>
                    <Checkbox
                    style={styles.checkbox}
                    value={data.item.completed}
                    onValueChange={()=>{
                      changeCompleted(data.item);
                    }}/>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item)=>item.id}
        />
    )
}
const styles = StyleSheet.create({
    itemList: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#ccc",
      padding: 10,
      margin: 5
    },
    itemListInc: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#89F147",
      padding: 10,
      margin: 5
    },
    completedContainer: {
      flexDirection: "row",
      alignItems: "center"
    },
    completedText: {
      fontSize: 10,
      marginRight: 5
    }
});

export default Lista;