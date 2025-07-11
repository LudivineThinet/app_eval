import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ListeJeux from './composant/ListeJeux.jsx';
import AjoutJeux from './composant/AjoutJeux.jsx';  

export default function App() {
  const [jeux, setJeux] = useState([
    {
    "id": 1,
    "titre": "The Last of Us Part II",
    "prix": 25,
    "genre": "Action-Aventure"
  },
  {
    "id": 2,
    "titre": "FIFA 23",
    "prix": 20,
    "genre": "Sport"
  },
  {
    "id": 3,
    "titre": "Call of Duty: Modern Warfare II",
    "prix": 30,
    "genre": "FPS"
  },
  {
    "id": 4,
    "titre": "Horizon Forbidden West",
    "prix": 28,
    "genre": "Action-RPG"
  },
  {
    "id": 5,
    "titre": "Mario Kart 8 Deluxe",
    "prix": 35,
    "genre": "Course"
  },
  {
    "id": 6,
    "titre": "Animal Crossing: New Horizons",
    "prix": 22,
    "genre": "Simulation"
  },
  {
    "id": 7,
    "titre": "Elden Ring",
    "prix": 32,
    "genre": "Action-RPG"
  },
  {
    "id": 8,
    "titre": "God of War Ragnarök",
    "prix": 40,
    "genre": "Action-Aventure"
  },
  {
    "id": 9,
    "titre": "Gran Turismo 7",
    "prix": 27,
    "genre": "Course"
  },
  {
    "id": 10,
    "titre": "Minecraft",
    "prix": 18,
    "genre": "Sandbox"
  },
  {
    "id": 11,
    "titre": "Fortnite",
    "prix": 0,
    "genre": "Battle Royale"
  },
  {
    "id": 12,
    "titre": "Red Dead Redemption 2",
    "prix": 23,
    "genre": "Action-Aventure"
  },
  {
    "id": 13,
    "titre": "Cyberpunk 2077",
    "prix": 15,
    "genre": "RPG"
  },
  {
    "id": 14,
    "titre": "Resident Evil Village",
    "prix": 19,
    "genre": "Horreur"
  },
  {
    "id": 15,
    "titre": "Assassin's Creed Valhalla",
    "prix": 21,
    "genre": "Action-Aventure"
  }
])
const [titre, setTitre] = useState('');
  const [prix, setPrix] = useState('');
  const [genre, setGenre] = useState('');

  const AddJeux = () => {
    if (titre.trim() === '' || prix.trim() === '' || genre.trim() === '') return;

    const nouveauJeu = {
      id: jeux.length + 1,
      titre: titre.trim(),
      prix: parseFloat(prix),
      genre: genre.trim()
    };

    setJeux([...jeux, nouveauJeu]);
    setTitre('');
    setPrix('');
    setGenre('');
  };

  return (
    <View style={styles.container}>
      
      <ListeJeux jeux={jeux} />

      <Text style={styles.Ajout}>Ajouter un nouveau jeu</Text>
      <AjoutJeux
        AddJeux={AddJeux}
        titre={titre}
        prix={prix}
        genre={genre}
        onChangeTitre={setTitre}
        onChangePrix={setPrix}
        onChangeGenre={setGenre}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efdff0',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
  },
  Ajout: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#333',
  },
});