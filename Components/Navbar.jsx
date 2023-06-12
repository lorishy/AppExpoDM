import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Navbar({ navigation }) {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <View style={styles.nav}>
            <View style={styles.navContent}>
                <Icons name="pokeball" size={25} />
                <Text style={styles.navTitle}>Pokémon App</Text>
            </View>
            <TouchableOpacity onPress={handleMenuToggle} style={styles.navButton}>
                <Icons name="menu" size={25} />
            </TouchableOpacity>
            {showMenu && (
                <View style={styles.menu}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Compteur');
                        }}
                    >
                        <Text style={styles.menuItem}>Compteur</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                    >
                        <Text style={styles.menuItem}>Connexion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Register');
                        }}
                    >
                        <Text style={styles.menuItem}>Inscription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Panier');
                        }}
                    >
                        <Text style={styles.menuItem}>Panier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Reglages');
                        }}
                    >
                        <Text style={styles.menuItem}>Réglages</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        height: 80,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        zIndex: 10,
    },
    navContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    navButton: {
        padding: 10,
    },
    navButtonText: {
        fontSize: 16,
    },
    menu: {
        position: 'absolute',
        zIndex: 20,
        top: 60,
        right: 0,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 5,
        padding: 10,
    },
    menuItem: {
        fontSize: 16,
        paddingVertical: 5,
    },
});
