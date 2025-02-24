import React from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.main}>
        <Text style={styles.header}>Details</Text>
        <Image source={require("../images/SketchingSet.jpg")} style={styles.image}/>
        <Text style={styles.title}>Professional Sketching Set</Text>
        <Text style={styles.description}>Everything you need to start sketching!</Text>
        <Text style={styles.price}>€ 14,99</Text>
        <Button title='Buy now' color={"#f78928"}></Button>
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
      alignContent: 'center',
      rowGap: 3,
      columnGap: 15,
      paddingRight: 10,
    },
  
    header: {
      fontSize: 30,
      fontWeight: "bold",
      marginTop: 10,
      marginBottom: 20,
    },

    image: {
      borderRadius: 12,
      marginBottom: 20,
    },

    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginTop: 10,
    },

    description: {
      fontSize: 16,
      color: "#555",
      marginTop: 4,
      marginBottom: 20,
    },

    price: {
      fontSize: 18,
      color: "#f78928",
      marginTop: 6,
      marginBottom: 4,
      marginBottom: 20,
    },
  });

  export default DetailsScreen;