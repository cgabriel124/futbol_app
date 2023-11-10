import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';

const Header = ({ titulo }) => {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.texto}>{titulo}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2FA632',
    },
    texto: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default Header;