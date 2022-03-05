import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title='About us' onPress={() => navigation.navigate('AboutUs')} /></View>
                <View style={styles.button}><Button title='Shop' onPress={() => navigation.navigate('Shop')} /></View>
                <View style={styles.button}><Button title='Services' onPress={() => navigation.navigate('Services')} /></View>
                <View style={styles.button}><Button title='Contact' onPress={() => navigation.navigate('Contact')} /></View>
            </View>
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
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        marginHorizontal: 10,
        marginVertical: 25,
    }
});

export default HomeScreen;