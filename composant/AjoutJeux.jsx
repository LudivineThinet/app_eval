import { StyleSheet, Text, View, TextInput, Pressable, } from 'react-native';


const AjoutJeux = ({  AjoutJeux }) => {
    return (
    <View style={styles.Ajouter}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={Text}
          placeholder="Ajoutez un jeux"
        />

        <Pressable onPress={() => AjoutJeux(true)}>
                <Text style={styles.add}>OK</Text>
              </Pressable>
    </View>
        )}







const styles = StyleSheet.create({
    Ajouter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    add: {
        backgroundColor: '#007BFF',
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
    },
    }); 

export default AjoutJeux