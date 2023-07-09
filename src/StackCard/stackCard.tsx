import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StackCard = (props: { name: string }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.name}
            </Text>
        </View>
    );
};

export default StackCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize:30,
        fontWeight:'800'
    }
});