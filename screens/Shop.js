import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Shop = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Shop</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonSecondaryContainer}>
                    <View style={styles.button}><Button title='Paper & Card' onPress={() => navigation.navigate('PaperCard')} /></View>
                    <View style={styles.button}><Button title='Art Pens' onPress={() => navigation.navigate('ArtPens')} /></View>
                    <View style={styles.button}><Button title='Foamboard' onPress={() => navigation.navigate('Foamboard')} /></View>
                </View>
                <View style={styles.buttonSecondaryContainer}>
                    <View style={styles.button}><Button title='Mountboard' onPress={() => navigation.navigate('Mountboard')} /></View>
                    <View style={styles.button}><Button title='Photography' onPress={() => navigation.navigate('Photography')} /></View>
                    <View style={styles.button}><Button title='Pens' onPress={() => navigation.navigate('Pens')} /></View>
                </View>
                <View style={styles.buttonSecondaryContainer}>
                    <View style={styles.button}><Button title='USB & Flash Drives' onPress={() => navigation.navigate('USBFlash')} /></View>
                    <View style={styles.button}><Button title='Sketchpads' onPress={() => navigation.navigate('Sketchpads')} /></View>
                    <View style={styles.button}><Button title='A4 Folders & Files' onPress={() => navigation.navigate('A4Folder')} /></View>
                </View>
                <View style={styles.buttonSecondaryContainer}>
                    <View style={styles.button}><Button title='A3 Wallets & Files' onPress={() => navigation.navigate('A3Wallets')} /></View>
                    <View style={styles.button}><Button title='Ruled Pads' onPress={() => navigation.navigate('RuledPads')} /></View>
                    <View style={styles.button}><Button title='Stationary' onPress={() => navigation.navigate('Stationary')} /></View>
                </View>
                <View style={styles.buttonSecondaryContainer}>
                    <View style={styles.button}><Button title='Balsa Woods & Wires' onPress={() => navigation.navigate('BalsaWoods')} /></View>
                    <View style={styles.button}><Button title='Technical Drawing Products' onPress={() => navigation.navigate('TechnicalDrawing')} /></View>
                    <View style={styles.button}><Button title='Greeting Cards' onPress={() => navigation.navigate('GreetingCards')} /></View>
                </View>
                <View style={styles.buttonSecondaryContainer}>
                    <View style={styles.button}><Button title='Acrylic Sheets' onPress={() => navigation.navigate('AcrylicSheets')} /></View>
                </View>
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
        flexWrap: 'wrap'
    },
    buttonSecondaryContainer: {
        flexWrap: 'wrap',
    },
    button: {
        marginHorizontal: 15,
        marginVertical: 5,
    },
});

export default Shop;