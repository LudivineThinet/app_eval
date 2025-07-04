import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native';
import ItemJeux from './ItemJeux.jsx';

const ListeJeux =  ({ jeux }) => {
 return (
    <View style={styles.container}>
        <FlatList
        data={jeux}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
         <ItemJeux item={item} />
        )}
        numColumns={3}
        columnWrapperStyle={styles.row}
         
      />
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    maxHeight: '50%',
    borderWidth: 1,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 5,
    
  },
});












export default  ListeJeux