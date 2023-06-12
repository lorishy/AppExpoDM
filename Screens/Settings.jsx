import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = () => {
    const [nightMode, setNightMode] = useState(false);

    const toggleNightMode = () => {
        setNightMode(!nightMode);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Paramètres</Text>
            <View style={styles.setting}>
                <Text style={styles.settingLabel}>Mode nuit</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={nightMode ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleNightMode}
                    value={nightMode}
                />
            </View>
            <Text style={styles.infoText}>
                Le mode nuit est {nightMode ? 'activé' : 'désactivé'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    setting: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    settingLabel: {
        fontSize: 18,
    },
    infoText: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default SettingsScreen;
