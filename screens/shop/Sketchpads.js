import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Sketchpads = props => {
    return (
        <View style={styles.container}>
            <Text>Sketchpads</Text>
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

export default Sketchpads;