import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TitleBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tapes Design Shop</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2abf7',
        height: '12%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    title: {
        paddingTop: 40,
        paddingLeft: 20,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        
    },
    navBar: {

    },

});

export default TitleBar;