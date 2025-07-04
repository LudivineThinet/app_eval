import { StyleSheet, Text, View, } from 'react-native';

const ItemJeux = ({ item }) => {
    return (
<View style={styles.item}>
            <Text style={styles.titre}>{item.titre}</Text>
            <Text>Genre : {item.genre}</Text>
            <Text>Prix : {item.prix} €</Text>
          </View>
    )}


const styles = StyleSheet.create({
item : {
    marginVertical: 25,
    backgroundColor: '#edcbf0',
    fontSize: 18,
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
    width: '30%',
    height: '140'
  },
  titre : {
    fontSize: 15,
    fontWeight: 'bold',
}
})




export default ItemJeux