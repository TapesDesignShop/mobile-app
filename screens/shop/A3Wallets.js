import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const A3Wallets = props => {
    return (
        <View style={styles.container}>
            <Text>A3Wallets</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default A3Wallets;