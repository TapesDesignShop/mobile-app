import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Pens = props => {
    return (
        <View style={styles.container}>
            <Text>Pens</Text>
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

export default Pens;