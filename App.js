import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <View style={styles.main}>
      <Text style={styles.header}>Onze producten</Text>
      <ScrollView contentContainerStyle={styles.cards}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  
  cards: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    backgroundColor: '#fff',
    maxHeight: 400,
    alignContent: 'center',
    rowGap: 3,
    columnGap: 15,
    paddingRight: 10,
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
},
});
