
import { StyleSheet, Text, Image, View, ScrollView, Button } from 'react-native';

const ProductCard = () => {
    return (
        <View style={styles.card}>
            <Image
                source={require("../images/SketchingSet.jpg")}
                style={styles.image}
            />
            <Text style={styles.title}>Professional Sketching Set</Text>
            <Text style={styles.description}>Everything you need to start sketching!</Text>
            <Text style={styles.price}>€ 14,99</Text>
            <Button title='Buy now' color={"#f78928"}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 180,
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 20,
        borderColor: "#f78928",
        borderStyle: "solid",
        borderWidth: 2,
    },

    image: {
        width: "100%",
        height: 150,
        borderRadius: 12,
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
    },

    price: {
        fontSize: 18,
        color: "#f78928",
        marginTop: 6,
        marginBottom: 4,
    },
});

export default ProductCard;