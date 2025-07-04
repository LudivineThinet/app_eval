import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

const AjoutJeux = ({ AddJeux, titre, prix, genre, onChangeTitre, onChangePrix, onChangeGenre }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Titre du jeu"
        value={titre}
        onChangeText={onChangeTitre}
      />
      <TextInput
        style={styles.input}
        placeholder="Prix"
        value={prix}
        onChangeText={onChangePrix}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={genre}
        onChangeText={onChangeGenre}
      />

      <Pressable style={styles.bouton} onPress={AddJeux}>
        <Text style={styles.boutonTexte}>OK</Text>
      </Pressable>
    </View>
  );
};

export default AjoutJeux;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#edcbf0',
  },
  bouton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  boutonTexte: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});