import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.header}>Onze producten</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DetailsScreen")}>
          <Text style={styles.buttonText}>Meer info</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.cards} showsVerticalScrollIndicator={false}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    alignItems: 'center',
    paddingTop: 50,
  },

  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    backgroundColor: '#fff',
    alignContent: 'center',
    rowGap: 3,
    columnGap: 15,
    paddingLeft: 30,
    paddingBottom: 50, 
    paddingTop: 20, 
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#f78928",
    padding: 10,
    borderRadius: 5,
    marginBottom: 30,
  },

  buttonText: {
    color: "#fff",
  }
});

export default HomeScreen;