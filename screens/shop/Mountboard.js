import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Mountboard = props => {
    return (
        <View style={styles.container}>
            <Text>Mountboard</Text>
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

export default Mountboard;