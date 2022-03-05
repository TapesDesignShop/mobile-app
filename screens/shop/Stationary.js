import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Stationary = props => {
    return (
        <View style={styles.container}>
            <Text>Stationary</Text>
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

export default Stationary;