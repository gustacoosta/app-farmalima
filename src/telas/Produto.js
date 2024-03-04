import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Produto(){
    return (
        <View style={styles.container}>
            <Text>Está é a primeira tela do App!</Text>
            <StatusBar style="auto" />
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