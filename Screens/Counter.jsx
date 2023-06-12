import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Navbar from '../Components/Navbar';

const CounterScreen = ({ navigation }) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <View style={styles.container}>
            <Navbar navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.counterText}>{counter}</Text>
                <TouchableOpacity style={styles.button} onPress={incrementCounter}>
                    <Text style={styles.buttonText}>Incrémenter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#2e86de',
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CounterScreen;
