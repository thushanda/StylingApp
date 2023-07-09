import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PersonalInfo } from '../App';

type Props = PersonalInfo &{
    imageUrl?: string;
}



const ProfileCard  = (prop: Props) => {



    return(
        <View style={styles.container}>
            <Image source={{uri: prop.imageUrl}} style={styles.image}/>
            <View style={styles.contain}>
                <Text style={styles.title}>{prop.name}</Text>
                <Text style={styles.title}>{prop.age}</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.btn}>{prop.buttons}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileCard;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'black',
        borderRadius: 10,
    },
    contain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:{
        marginTop: 2,
        fontFamily: 'serif',
        fontSize: 25,
        fontWeight:'bold',
        color: 'white'
        
    },
    image:{
        width: 300,
        height: 300,
        borderRadius: 5,
    },
    btn:{
        width: '50%',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 20,
        paddingBottom: 5,
        paddingTop: 5,
        paddingHorizontal: 30,
        borderRadius: 10,
        fontWeight: '600',
        backgroundColor: '#FFFFFF',
        
    }

});