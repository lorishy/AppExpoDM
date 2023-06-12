import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import SwiperFlatList from 'react-native-swiper-flatlist';

const HomeScreen = ({ navigation }) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemons = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
            const { results } = response.data;
            const pokemonData = await Promise.all(
                results.map(async (pokemon) => {
                    const response = await axios.get(pokemon.url);
                    return response.data;
                })
            );
            setPokemons(pokemonData);
        } catch (error) {
            console.error(error);
        }
    };

    const renderCarouselItem = ({ item }) => {
        const { name, sprites } = item;
        const imageUrl = sprites.other['official-artwork'].front_default;

        const windowWidth = Dimensions.get('window').width;

        return (
            <View style={[styles.carouselItem, { width: windowWidth }]}>
                <Image style={[styles.pokemonImage, { width: windowWidth, height: windowWidth }]} source={{ uri: imageUrl }} />
                <Text style={styles.pokemonName}>{name}</Text>
            </View>
        );
    };

    return (
        <View>
            <Navbar navigation={navigation} />
            <ScrollView>
                <View style={styles.carouselContainer}>
                    <SwiperFlatList
                        data={pokemons}
                        renderItem={renderCarouselItem}
                        keyExtractor={(item) => item.id.toString()}
                        showPagination
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        height: 500,
        marginBottom: 20,
    },
    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    pokemonImage: {
        resizeMode: 'cover',
    },
    pokemonName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
