import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Navbar from '../Components/Navbar';

const PanierScreen = ({ navigation }) => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Salamèche', price: 10 },
        { id: 2, name: 'Bulbizare', price: 15 },
        { id: 3, name: 'Carapuce', price: 20 },
    ]);
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const calculateTotal = () => {
        let total = 0;
        products.forEach((product) => {
            total += product.price;
        });
        return total;
    };

    const handleCheckout = () => {
        setOrderConfirmed(true);
    };

    return (
        <View style={styles.container}>
            <Navbar navigation={navigation} />

            <View style={styles.productList}>
                {products.map((product) => (
                    <View key={product.id} style={styles.productItem}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>{product.price}€</Text>
                    </View>
                ))}
            </View>

            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: {calculateTotal()}€</Text>
            </View>

            {orderConfirmed && (
                <View style={styles.confirmationContainer}>
                    <Text style={styles.confirmationText}>Commande validée !</Text>
                </View>
            )}

            <TouchableOpacity style={styles.button} onPress={handleCheckout}>
                <Text style={styles.buttonText}>Valider ma commande</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    productList: {
        flex: 1,
        padding: 20,
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    productName: {
        fontSize: 16,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'flex-end',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    confirmationContainer: {
        backgroundColor: 'green',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmationText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#2e86de',
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PanierScreen;
