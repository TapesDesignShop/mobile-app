import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const A4Folder = props => {
    return (
        <View style={styles.container}>
            <Text>A4Folder</Text>
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

export default A4Folder;