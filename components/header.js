//import { StatusBar } from 'expo-status-bar';
import React from 'react'; // Acutally "{ useState }" is not needed
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>- TODO LIST -</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 40,
        backgroundColor: 'teal',
    },
    title: {
        textAlign: "center",
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})